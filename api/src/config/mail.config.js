const nodemailer = require("nodemailer");
const { HOST, USER, PASSWORD } = process.env;

const mail = {
  user: USER,
  pass: PASSWORD,
};

let transporter = nodemailer.createTransport({
  host: HOST,
  port: 465,
  tls: {
    rejectUnauthorized: false,
  },
  secure: true, // true for 465, false for other ports
  auth: {
    user: mail.user, // generated ethereal user
    pass: mail.pass, // generated ethereal password
  },
});

const sendEmail = async (email, subject, html) => {
  try {
    // send mail with defined transport object
    await transporter.sendMail({
      from: '"hiTalent 👻" <hiTalent@comunity.com>', // sender address
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
          <h2>Hola ${name}</h2>
          <img src="https://media1.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif?cid=ecf05e47ke716v2cux6xhdzu346d98wutrc5xw6x9lzpgjzc&rid=giphy.gif&ct=g" alt="">
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
