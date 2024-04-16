"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {
    static associate(models) {
      Auth.belongsTo(models.Member, {
        foreignKey: "memberId",
      });
    }
  }
  Auth.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      memberId: DataTypes.INTEGER,
      password: DataTypes.STRING,
      confirmPassword: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Auth",
    }
  );
  return Auth;
};
