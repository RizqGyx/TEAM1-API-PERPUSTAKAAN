'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class library extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      library.hasOne(models.Book, {
        foreignKey: {
          name: "availableAt"
        }
      })

      library.belongsTo(models.User, {
        foreignKey: {
          name: "staffId"
        }
      })
    }
  }
  library.init({
    libraryName: DataTypes.STRING,
    address: DataTypes.STRING,
    staffId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Library',
  });
  return library;
};