'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Transaction, {
        foreignKey:{
          name: "borrowerId"
        }
      })

      User.hasMany(models.Transaction, {
        foreignKey:{
          name: "issuerId"
        }
      })

      User.hasOne(models.Auth, {
        foreignKey: {
          name: "userId"
        }
      })

      User.hasMany(models.Library, {
        foreignKey: {
          name: "staffId"
        }
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    role: {
      type: DataTypes.ENUM(["Guest", "Admin", "Staff"]),
      defaultValue: "Guest"
    },
    address: DataTypes.STRING,
    phoneNum: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};