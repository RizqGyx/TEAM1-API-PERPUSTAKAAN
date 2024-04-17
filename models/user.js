"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasOne(models.Auth, {
        foreignKey: "userId",
      });

      User.hasMany(models.Library, {
        foreignKey: "userId",
      });

      User.belongsTo(models.Library, {
        foreignKey: "libraryId",
        allowNull: false,
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      profileImage: {
        type: DataTypes.TEXT,
        defaultValue:
          "https://tse2.mm.bing.net/th?id=OIP.U2iQ7wNK6ZzTW_traW_-PQHaHa&pid=Api&P=0&h=180",
      },
      role: {
        type: DataTypes.ENUM(["Admin", "Manager", "Staff"]),
        defaultValue: "Staff",
      },
      libraryId: DataTypes.INTEGER,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "User",
    }
  );

  return User;
};
