const nodemailer = require("nodemailer");
const { HOST, USER, PASSWORD } = process.env;

const mail = {
  user: "hitalent09@gmail.com",
  pass: "hiTalent.proyecto.09",
};

let transporter = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  tls: {
    rejectUnauthorized: false,
  },
  secure: false, // true for 465, false for other ports
  auth: {
    user: mail.user, // generated ethereal user
    pass: mail.pass, // generated ethereal password
  },
});

const sendEmail = async (email, subject, html) => {
  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: `"hiTalent 👻" < ${mail.user}>`, // sender address
      to: email, // list of receivers
      subject, // Subject line
      text: "Hola, bienvenidos a la comunidad de hiTalent", // plain text body
      html, // html body
    });
  } catch (error) {
    console.log("Algo no va bien con el email", error);
  }
};

const getTemplate = (name, token) => {
  return `
      <head>
          <link rel="stylesheet" href="./style.css">
      </head>
      
      <div id="email___content">
          <img src="https://i.imgur.com/eboNR82.png" alt="">
          <h2>Hola ${name}</h2>
          <p>Para confirmar tu cuenta, ingresa al siguiente enlace</p>
          <a
              href="http://localhost:4000/api/user/confirm/${token}"
              target="_blank"
          >Confirmar Cuenta</a>
      </div>
    `;
};

module.exports = {
  sendEmail,
  getTemplate,
};
