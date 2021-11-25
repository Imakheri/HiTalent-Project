const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('favorites', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        post_id: {
            type: DataTypes.STRING(255),
            allowNull: false,
            unique: true
        },
        user_id: {			// id del user que crea la orden
            type: DataTypes.UUID,
            allowNull: false
        }
    });
};