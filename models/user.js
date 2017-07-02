'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});

  user.associate = function(models) {
    user.hasMany(models.gab, {
      as: 'gabs',
      foreignKey: 'userId'
    });
  };
  return user;
};
