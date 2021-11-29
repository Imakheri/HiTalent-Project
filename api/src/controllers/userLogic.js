const { Users } = require("../db");
const { v4: uuidv4 } = require("uuid");
const { getToken, getTokenData } = require("../config/jwt.config");
const { getTemplate, sendEmail } = require("../config/mail.config");

async function createUser(req, res, next) {
  let {
    username,
    password,
    name,
    lastName,
    birthdate, //"año/mes/dia"
    email,
    email_verified,
    image,
    country,
  } = req.body;
  // hacer un if donde si el email es "adminuser@admin.com", el isAdmin = true y isDataComplete = true
  //console.log(req.body)
  try {
    //-----VALIDACIONES-----
    if (!name) return res.send("Debe agregar un nombre");
    if (!lastName) return res.send("Debe agregar un apellido");
    if (!email) return res.send("Debe agregar un email");

    //Verificar que el username no exista
    const foundUser = await Users.findOne({ where: { username: username } });
    if (foundUser) {
      //return res.json({success:false, msg 'Usuario ya existe'})
      return res.send("El usuario ya existe");
    }
    //Verificar que el email no exista
    searchMail = await Users.findOne({ where: { email: email } });
    if (searchMail) return res.send("El email ya existe");

    //Verificar que sea un email
    let expReg =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let isValid = expReg.test(email);
    if (isValid === false) return res.send("El email no es valido");

    //-----GENERAR EL CODIGO-------
    const code = uuidv4();

    //Si todo esta correcto, se crea el usuario
    const newUser = await Users.create({
      username: username,
      password: password,
      name: name,
      lastName: lastName,
      birthdate: birthdate,
      email: email,
      email_verified: email_verified,
      image: image,
      country: country,
      code: code,
    });

    //-----GENERAR TOKEN-----
    const token = getToken({ email, code });

    //-----OBTENER UN TEMPLATE-----
    const template = getTemplate(name, token);

    //-----ENVIAR EL EMAIL------
    await sendEmail(email, "Este es un email de prueba", template);
    await newUser.save();

    res.json({
      success: true,
      msg: "Registro exitoso",
    });
  } catch (err) {
    next(err);
  }
}

const confirm = async (req, res) => {
  try {
    // Obtener el token
    const { token } = req.params;

    // Verificar la data
    const data = await getTokenData(token);

    if (data === null) {
      return res.json({
        success: false,
        msg: "Error al obtener data",
      });
    }

    console.log(data);

    const { email, code } = data.data;

    // Verificar existencia del usuario
    const user = (await Users.findOne({ email })) || null;

    if (user === null) {
      return res.json({
        success: false,
        msg: "Usuario no existe",
      });
    }

    // Verificar el código
    if (code !== user.code) {
      return res.redirect("/error.html");
    }

    // Actualizar usuario
    user.email_verified = true;
    await user.save();

    // Redireccionar a la confirmación
    return res.redirect("/confirm.html");
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      msg: "Error al confirmar usuario",
    });
  }
};

async function getUser(req, res, next) {
  res.send("GET user test");
}

async function deleteUser(req, res, next) {
  let { id } = req.body;
  console.log(id);
  try {
    let existsInDB = await Users.findByPk(id); // primero busca si existe el user en la DB. Si existe lo guarda en esta variable
    if (existsInDB) {
      await Users.destroy({
        // de existir, lo destruye
        where: {
          id,
        },
      });
      return res.json(existsInDB); // devuelve el post eliminado como el metodo pop()
    } else {
      throw new Error(
        "ERROR 500: El usuario no fue encontrado en la base de datos (UUID no existe)."
      );
    }
  } catch (err) {
    next(err);
  }
}

async function getLogIn(req, res, next) {
  let { username, password, email } = req.body;

  if (email) {
    const userEmail = await Users.findOne({
      where: {
        email: email,
      },
    });
    if (userEmail) {
      res.send(userEmail);
    } else {
      res.send("Email incorrecto");
    }
  } else if (username) {
    const userMatch = await Users.findOne({
      where: {
        username: username,
      },
    });
    if (userMatch) {
      if (userMatch.password === password) {
        res.send(userMatch);
      } else {
        res.send("Password incorrecto");
      }
    } else {
      res.send("Usuario incorrecto");
    }
  }
}

module.exports = {
  createUser,
  deleteUser,
  getUser,
  getLogIn,
  confirm,
};
