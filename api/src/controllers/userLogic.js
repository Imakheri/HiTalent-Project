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
    });
    //   const userSaved = await newUser.save();
    //   transporter.sendMail(emailer(user));

    //-----GENERAR EL CODIGO-------
    const code = uuidv4();

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

module.exports = {
  createUser,
};
