"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Rack extends Model {
    static associate(models) {
      Rack.belongsTo(models.Library, {
        foreignKey: "libraryId",
      });

      Rack.hasMany(models.Book, {
        foreignKey: "rackId",
      });
    }
  }
  Rack.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      rackNumber: DataTypes.INTEGER,
      floorNumber: DataTypes.INTEGER,
      libraryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Rack",
    }
  );
  return Rack;
};
