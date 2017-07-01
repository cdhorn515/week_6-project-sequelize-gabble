'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'gabs',
      'text',
      {
        type: Sequelize.STRING(140),
        allowNull: false
      }
    );
    },

    down: function (queryInterface, Sequelize) {
      queryInterface.changeColumn(
        'gabs',
        'text',
        {
          type: Sequelize.STRING(140),
          allowNull: true
        }
      );
    }
  };
