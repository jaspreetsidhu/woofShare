//'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
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
      userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique:{
          args: true,
          msg: 'Username already in use!'
        }
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail:true
        },
        unique: {
            args: true,
            msg: 'Email address already in use!'
        }
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false
      },
      photo:{
        type: Sequelize.STRING,
        allowNull: true,
        validate:{
            isUrl:{msg:"invalid URL"}
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};