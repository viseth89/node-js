const Sequelize = require('sequelize');

const sequelize = new Sequelize("postgres://viseth:viseth@localhost:5432/journal")

module.exports = sequelize