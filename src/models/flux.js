const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Phone = require('./phone');


const Flux = sequelize.define('Flux', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  phoneId: {
    type: DataTypes.INTEGER,
    field: 'phone_id'

  }
}, {
  tableName: 'flux', 
  timestamps: false 
});

Phone.hasMany(Flux, {
  foreignKey: 'phone_id',
  as: 'fluxes',
});
Flux.belongsTo(Phone, { foreignKey: 'phone_id' , as: 'phone'});

module.exports = Flux;
