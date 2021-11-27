const { Users } = require("../db");

async function createUser(req, res, next) {
  res.send("crea tu usuario");
}

async function getUser(req, res, next) {
  res.send("GET user test");
}



async function deleteUser(req,res,next){
    let { id } = req.body;
    console.log(id)
    try {
      let existsInDB = await Users.findByPk(id); // primero busca si existe el user en la DB. Si existe lo guarda en esta variable 
      if (existsInDB) {
        await Users.destroy({ // de existir, lo destruye
          where: {
            id
          }
        });
        return res.json(existsInDB); // devuelve el post eliminado como el metodo pop()
      } else {
        throw new Error('ERROR 500: El usuario no fue encontrado en la base de datos (UUID no existe).');
      }
    } catch (err) {
      next(err);
    };
}



module.exports ={
  createUser,
  deleteUser,
  getUser
}