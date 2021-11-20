const { DataTypes } = require('sequelize');
const db = require("../db")

const User = db.define("journal", {
    title: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    date: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    entry: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    owner: {
        type: DataTypes.INTEGER
    }
})

module.exports = Journal