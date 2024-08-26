const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Step = require('./step');

const Section = sequelize.define('Section', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  stepId: {
    type: DataTypes.INTEGER,
    field: 'step_id'

  },
  title: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'section', 
  timestamps: false 
});

Step.hasMany(Section, {
  foreignKey: 'step_id',
  as: 'sections',
});
Section.belongsTo(Step, { foreignKey: 'step_id' , as: 'step'});

module.exports = Section;
