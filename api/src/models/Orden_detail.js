const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('orden_detail', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        post_id: {
            type: DataTypes.UUID,
            allowNull: false
        },
    });
};