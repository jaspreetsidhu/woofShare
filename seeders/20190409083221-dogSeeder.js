
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dogs', [
      {
        name: 'everlyn',
        photoUrl: "images/dog-1.jpg",
        size:"large",
        breed: "marcho",
        age:"Adult",
        profile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        card_color: 1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Burham',
        photoUrl: "images/dog-2.jpg",
        size:"medium",
        breed: "Bichon Frise",
        age:"Puppy",
        profile:" Country of origin mexico and fluffy",
        card_color: 2,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'St Bernard',
        photoUrl: "images/dog-3.jpg",
        size:"small",
        breed: "labrador",
        age:"Senior",
        profile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        card_color: 3,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Tyron',
        photoUrl: "images/dog-9.jpg",
        size:"small",
        breed: "american kitten",
        age:"small",
        profile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        card_color: 1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'sterling',
        photoUrl: "images/dog-4.jpg",
        size:"medium",
        breed: "spanish roar",
        age:"medium",
        profile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        card_color: 2,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'oscar',
        photoUrl: "images/dog-5.jpg",
        size:"large",
        breed: "rizzo",
        age:"Adult",
        profile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        card_color: 1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'ricardo',
        photoUrl: "images/dog-6.jpg",
        size:"large",
        breed: "terrky",
        age:"Adult",
        profile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        card_color: 2,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'maily',
        photoUrl: "images/dog-7.jpg",
        size:"small",
        breed: "fluffy",
        age:"Puppy",
        profile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        card_color: 3,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'haddasah',
        photoUrl: "images/dog-8.jpg",
        size:"medium",
        breed: "bull",
        age:"Senior",
        profile:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        card_color: 1,
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
