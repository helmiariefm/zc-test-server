'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pasien extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pasien.init({
    name: DataTypes.STRING,
    sex: DataTypes.STRING,
    religion: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    nik: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pasien',
  });
  return pasien;
};