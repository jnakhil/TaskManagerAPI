const { DataTypes } = require('sequelize');
const sequelize = require('../../db');

const Task = sequelize.define('Task', {
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'open',
        validate: {
          isIn: [['open', 'inprogress', 'completed']], // Custom validation to enforce enum values
        },
    },
});

module.exports = Task;