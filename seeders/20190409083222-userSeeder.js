'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        userName: "SchnauzerLover",
        photo: "images/userProfile/user1.PNG",
        email:"test@gmail.com",
        address: "3119 E 13th St, Austin TX 78702",
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },

      {
        userName: "DoggoneIt",
        photo: "images/userProfile/user2.jpg",
        email:"radiogaga66@gmail.com",
        address: "3119 E 13th St, Austin TX 78702",
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },

      {
        userName: "CanineCareGiver",
        photo: "images/userProfile/user3.jpg",
        email:"test@gmail.com",
        address: "3119 E 13th St, Austin TX 78702",
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },

      {
        userName: "ByDogNoMan",
        photo: "images/userProfile/user4.jpg",
        email:"test@gmail.com",
        address: "3119 E 13th St, Austin TX 78702",
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },

      {
        userName: "MansBestFriend",
        photo: "images/userProfile/user5.jpg",
        email:"test@gmail.com",
        address: "3119 E 13th St, Austin TX 78702",
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
