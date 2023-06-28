const { DataTypes } = require("sequelize");

const connect = require("../index");

const employee = connect.define(
  "employee",
  {
    id: { type: DataTypes.STRING, primaryKey: true, allowNull: false },
    Age: { type: DataTypes.INTEGER, allowNull: false },
    Name: { type: DataTypes.STRING, allowNull: false },
    Position: { type: DataTypes.STRING, allowNull: false },
  },
  {
    tableName: "employee",
  }
);

module.exports = employee;
