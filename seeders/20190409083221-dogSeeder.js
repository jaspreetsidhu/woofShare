
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Dogs', [
      {
        name: 'Everlyn',
        photoUrl: "images/dog-1.jpg",
        size:"large",
        breed: "marcho",
        age:"Adult",
        profile:"I am a calm dog who loves to go for walks on a leash.  I do not get along with other dogs, but I love people and will do just about anything for a tasty treat.",
        card_color: 2,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Pepper',
        photoUrl: "images/dog-2.jpg",
        size:"medium",
        breed: "Schnauzer",
        age:"Adult",
        profile:" I have tons of energy and I love to run around with other dogs. I love to bark so you may not want to take me to the library. I am very well-behaved otherwise.",
        card_color: 2,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Cuddles',
        photoUrl: "images/dog-3.jpg",
        size:"small",
        breed: "hound",
        age:"puppy",
        profile:"I like dogs and cats and love to play with toys.  I have lots of energy and love to chew on everything.  You may want to put away your shoes if I come over.",
        card_color: 1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Jinkies',
        photoUrl: "images/dog-6.jpg",
        size:"small",
        breed: "beagle mix",
        age:"puppy",
        profile:":  I love to explore and may run away if I am off-leash. I also do not like riding in cars because I get carsick. I only eat puppy food unless you have Milkbones.",
        card_color: 1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Hercules',
        photoUrl: "images/dog-4.jpg",
        size:"small",
        breed: "pomeranian",
        age:"adult",
        profile:"I may look little, but I am a full grown boy. I love to sit in your purse and go shopping.  I also love peanut butter and looking pretty.  I do not like cats.",
        card_color: 2,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Tiny',
        photoUrl: "images/dog-5.jpg",
        size:"large",
        breed: "St. Bernard",
        age:"Senior",
        profile:"I get winded easily, so I prefer a leasurely stroll over brisk walks or runs.  I love to drool so you may not want to wear your best clothes when we are hanging out.",
        card_color: 3,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Stephanie',
        photoUrl: "images/dog-7.jpg",
        size:"medium",
        breed: "lab mix",
        age:"puppy",
        profile:"I love to play fetch and love to run and run.  I also love water and would really enjoy it if you could take me swimming.  Ironically, I do not like baths or being clean.",
        card_color: 1,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Wags',
        photoUrl: "images/dog-8.jpg",
        size:"large",
        breed: "fluffy",
        age:"Senior",
        profile:"I love attention and love to have my belly rubbed. I can't run like I used to but I love walks and I love other dogs and cats. I have some stomach issues so I need to only eat the food that owner specifies.",
        card_color: 3,
        createdAt: '2013-08-25 09:09:00',
        updatedAt:'2013-08-25 09:09:00'
      },
      {
        name: 'Woofy',
        photoUrl: "images/dog-9.jpg",
        size:"large",
        breed: "malamute mix",
        age:"Senior",
        profile:"I get really hot in the sun, so it is best if you keep me in the shade aso I won't get overheated. I love other dogs but I do not like cats because they are mean. I make a great lunch companion and I love bacon.",
        card_color: 3,
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
