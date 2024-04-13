'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auth extends Model {

    static associate(models) {
      Auth.belongsTo(models.User, {
        foreignKey: {
          name: "userId",
          allowNull: false
        }
      })
    }
  }
  Auth.init({
    userId: DataTypes.INTEGER,
    password: DataTypes.STRING,
    confirmPassword: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Auth',
  });
  return Auth;
};