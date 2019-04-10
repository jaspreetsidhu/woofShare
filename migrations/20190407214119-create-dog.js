"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("dogs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      photoUrl: {
        allowNull: true,
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
      },
      profile: {
        type: Sequelize.TEXT
      },
      available: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      card_color: {
        type: Sequelize.INTEGER
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("dogs");
  }
};
