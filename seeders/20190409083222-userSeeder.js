'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userName: "Test Seed",
        photo: "images/dog-1.jpg",
        email:"test@gmail.com",
        address: "3119 E 13th St, Austin TX 78702",
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
