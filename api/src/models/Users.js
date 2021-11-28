const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },

    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },

    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },

    image: {
      type: DataTypes.TEXT, // type.BLOB? Sequelize-file
      allowNull: true,
    },
    score: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
    country: {
      type: DataTypes.STRING,
    },
    // social:{
    //     type:DataTypes.STRING  //para luego
    // }

    // deberia guardarse aca cualquier informacion de mercadopago. VER CON LA API COMO FUNCIONA
    // Ejemplo: un user quiere ofrecer servicios y cobrar por mercadopago, su info de mercado pago (solo la relevante), se tiene que guardar aca.
  });
};
