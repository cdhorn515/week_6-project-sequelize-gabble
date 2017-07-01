'use strict';
module.exports = function(sequelize, DataTypes) {
  var gab = sequelize.define('gab', {
    text: DataTypes.STRING(140)
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return gab;
};