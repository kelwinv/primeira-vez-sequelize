const Sequelize = require('sequelize');
const dbConfig = require('../config/databases');

const User = require('../models/User')

const connection = new Sequelize(dbConfig);

User.init(connection);

module.exports = connection;