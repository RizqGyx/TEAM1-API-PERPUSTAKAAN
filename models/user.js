'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(model.Transaction, {
        foreignKey:{
          name: "borrowerId"
        }
      })

      User.hasMany(model.Transaction, {
        foreignKey:{
          name: "issuerId"
        }
      })

      User.hasOne(model.Auth, {
        foreignKey: {
          name: "userId"
        }
      })

      User.hasMany(model.Library, {
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