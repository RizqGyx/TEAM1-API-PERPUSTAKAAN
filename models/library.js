'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Library extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Library.hasMany(models.Book, {
        foreignKey: {
          name: "availableAt"
        }
      })

      Library.belongsTo(models.User, {
        foreignKey: {
          name: "staffId"
        }
      })
    }
  }
  Library.init({
    libraryName: DataTypes.STRING,
    address: DataTypes.STRING,
    staffId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Library',
  });
  return Library;
};