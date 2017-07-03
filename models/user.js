'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    username: {
      type: DataTypes.STRING,
      unique: {
        message: 'Someone beat you to that username, hurry and pick another before it\'s taken!'
    },
      allowNull: false,
      validate: {
        isAlpha: {
            message: 'Unless you\'re from a galaxy far, far away you should only have letters in your name'
        },
        notEmpty: {
            message: 'Oops! Looks like you forgot to enter some information!'
        }
    },
    password: DataTypes.STRING
  }
}, {});

  user.associate = function(models) {
    user.hasMany(models.gab, {
      as: 'gabs',
      foreignKey: 'userId'
    });
  };
  return user;
};
