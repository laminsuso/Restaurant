const { sequelize, DataTypes, Model } = require("./db");

class Waiter extends Model {}

Waiter.init(
  {
    name: DataTypes.STRING,
    salary: DataTypes.INTEGER,
  },
  {
    sequelize,
    timestamps: false,
  }
);

module.exports = { Waiter };
