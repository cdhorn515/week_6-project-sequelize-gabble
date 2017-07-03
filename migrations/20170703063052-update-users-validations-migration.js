'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users',
      'username',
      {
        type: Sequelize.STRING,
        unique: {
          message: 'Someone beat you to that username, hurry and pick another before it\'s taken!'
      },
        allowNull: false,
        validate: {
          notEmpty: {
              message: 'Oops! Looks like you forgot to enter some information!'
          }
        }
      }
    );
  },
  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users',
      'username',
      {
        type: Sequelize.STRING,
        unique: false,
        allowNull: true,
        validate: {
          notEmpty: false
        }
      }
    );
  }
  };
