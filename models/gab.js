'use strict';
module.exports = function(sequelize, DataTypes) {
  var gab = sequelize.define('gab', {
    text: {
      type: DataTypes.STRING,
      max: 140
    }
  }, {});

  gab.associate = function(models){
    gab.belongsTo(models.user, {
      as: 'user',
      foreignKey: 'userId'
    });
  };
  return gab;
};
