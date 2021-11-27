const axios = require('axios');
const { Users } = require('../db.js');



async function getLogIn(req, res, next){
    let { username, password, email } = req.body;

      if(email){
        const userEmail= await Users.findOne({
          where: {
            email: email
          }
        })
        if(userEmail) {
          res.send(userEmail)
        } else {
          res.send('Email incorrecto')
        }
      }
      else if(username){
        const userMatch= await Users.findOne({
          where: {
            username: username
          }
        })
      if(userMatch) {
        if(userMatch.password === password){
          res.send(userMatch)
        }
        else {
          res.send('Password incorrecto')
        }
      }
      else {
        res.send('Usuario incorrecto')
      }
    }


};


module.exports = {
 getLogIn
};