const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Flux = require('./flux');


const Step = sequelize.define('Step', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fluxId: {
    type: DataTypes.INTEGER,
    field: 'flux_id'

  },
  order: {
    type: DataTypes.INTEGER
  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING
  },
}, {
  tableName: 'step', 
  timestamps: false 
});

Flux.hasMany(Step, {
  foreignKey: 'flux_id',
  as: 'steps',
});
Step.belongsTo(Flux, { foreignKey: 'flux_id' , as: 'flux'});

module.exports = Step;
