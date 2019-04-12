var models = require("../models/index");
//var Sequelize = require('sequelize')
//var moment = require('moment')

//var Op = Sequelize.Op

/**
 * @class RentalController
 * @desc A controller that handles all operations related to rentals
 */
class RentalController {
  /**
   * @static
   * Method to rent a dog
   * @param {*} request
   * @param {*} response
   * @memberof RentalController
   */
  static getRentals(request, response) {
    models.Rental.findAll({
      include: [
        {
          model: models.Dog,
          attributes: [
            "name",
            "size",
            "breed",
            "age",
            "available",
            "profile",
            "photoUrl"
          ]
        }
      ],
      include: [
        {
          model: models.User,
          attributes: ["userName", "email", "photo", "address"]
        }
      ],
      attributes: ["returnDate", "pickUpDate", "daysToRent", "userId", "dogId"]
    })
      .then(function(rentals) {
        console.log("====>", rentals);
        if (rentals) {
          response.render("rentals", {
            rentals
          });
        }
      })
      .catch(function(err) {
        request.flash("info", "Could not get list of rentals");
        response.redirect("/gallery");
      });
  }
}

module.exports = RentalController;
