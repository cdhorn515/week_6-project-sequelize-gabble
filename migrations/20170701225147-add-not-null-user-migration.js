'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users',
      'username',
      {
        type: Sequelize.STRING,
        allowNull: false
      },
      'users',
      'password',
       {
          type: Sequelize.STRING,
          allowNull: false
        }
    );
},
  down: function (queryInterface, Sequelize) {
    queryInterface.changeColumn(
      'users',
      'username',
      {
        allowNull: true
      },
      'users',
      'password',
      {
        allowNull: true
      }
    );
  }
};
