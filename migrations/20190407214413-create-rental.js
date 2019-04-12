'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('rentals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      returnDate: {
        type: Sequelize.DATE
      },
      pickUpDate: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      daysToRent: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
          as: 'userId'
        }
      },
      dogId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'dogs',
          key: 'id',
          as: 'dogId'
        }
      },      
      returnComplete: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      statusArchive: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('rentals');
  }
};