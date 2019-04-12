'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rentals', [
      {
        returnDate: '2019-08-05 09:09:00',
        pickUpDate: "2019-08-25 09:09:00",
        dogId:1,
        userId:1,
        daysToRent:5,
        createdAt: '2013-08-09 09:09:00',
        updatedAt:'2013-08-08 09:09:00'
      },
      {
        returnDate: '2019-08-05 09:09:00',
        pickUpDate: "2019-08-25 09:09:00",
        dogId:1,
        userId:2,
        daysToRent:5,
        createdAt: '2013-08-09 09:09:00',
        updatedAt:'2013-08-08 09:09:00'
      },
      {
        returnDate: '2019-08-05 09:09:00',
        pickUpDate: "2019-08-25 09:09:00",
        dogId:1,
        userId:3,
        daysToRent:5,
        createdAt: '2013-08-09 09:09:00',
        updatedAt:'2013-08-08 09:09:00'
      },
      {
        returnDate: '2019-08-05 09:09:00',
        pickUpDate: "2019-08-25 09:09:00",
        dogId:1,
        userId:2,
        daysToRent:5,
        createdAt: '2013-08-09 09:09:00',
        updatedAt:'2013-08-08 09:09:00'
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
