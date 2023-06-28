const Sequelize = require("sequelize");

const connection = new Sequelize("company", "postgres", "92cEKVy9In0t", {
  host: "localhost",
  dialect: "postgres",
});

module.exports = connection;
