const { Sequelize } = require('sequelize');

// Initialize Sequelize with SQLite database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/Users/akhiljain/Desktop/TaskMangerAPI/database.sqlite', // SQLite database file
});

// Note: This should not be done production environment. Just used it for purpose of demo.
// sequelize.sync({
//   force: true
// }).then(() => {
//   console.log("Database in Sync")
// })

module.exports = sequelize;