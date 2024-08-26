const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Section = require('./section');
const Service = require('./service');

const Row = sequelize.define('Row', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sectionId: {
    type: DataTypes.INTEGER,
    field: 'section_id'

  },
  serviceId: {
    type: DataTypes.INTEGER,
    field: 'service_id'

  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isForward: {
    type: DataTypes.BOOLEAN
  }
}, {
  tableName: 'row', 
  timestamps: false 
});

Section.hasMany(Row, {
  foreignKey: 'section_id',
  as: 'rows',
});
Row.belongsTo(Section, { foreignKey: 'section_id' , as: 'section'});

Service.hasMany(Row, {
  foreignKey: 'service_id',
  as: 'rows',
});
Row.belongsTo(Service, { foreignKey: 'service_id' , as: 'service'});

module.exports = Row;
