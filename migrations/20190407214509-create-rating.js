"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("ratings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      score: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      review: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
          as: "userId"
        }
      },
      dogId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "dogs",
          key: "id",
          as: "dogId"
        }
      }
    });
  }/*,
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("ratings");
  }*/
};
