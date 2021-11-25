const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('posts', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      //allowNull: false,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  
    duration: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    oferta:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }

  });
};