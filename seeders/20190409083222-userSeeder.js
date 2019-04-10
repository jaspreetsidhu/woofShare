'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userName: "seedTest",
        photo: "images/dog-1.jpg",
        email:"test@gmail.com",
        address: "Austin, Texas",
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
