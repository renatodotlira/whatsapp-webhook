const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Business = require('./business');


const Phone = sequelize.define('Phone', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  businessId: {
    type: DataTypes.INTEGER,
    field: 'business_id'

  },
  number: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'phone', 
  timestamps: false 
});

Business.hasMany(Phone, {
  foreignKey: 'business_id',
  as: 'phones',
});
Phone.belongsTo(Business, { foreignKey: 'business_id' , as: 'business'});

module.exports = Phone;
