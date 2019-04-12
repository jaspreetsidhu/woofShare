//'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Ratings', [
      {
        score: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        dogId:1,
        userId:1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        score: 1,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        dogId:2,
        userId:1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        score: 3,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        dogId:1,
        userId:1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        score: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        dogId:2,
        userId:1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        score: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        dogId:3,
        userId:1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        score: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        dogId:1,
        userId:1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        score: 4,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
        dogId:2,
        userId:1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },

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
