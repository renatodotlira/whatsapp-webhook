const { Sequelize } = require('sequelize');

// Configure com suas credenciais do banco de dados
const sequelize = new Sequelize('cutscheduler', 'postgres', '12345', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
