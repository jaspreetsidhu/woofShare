var models = require("../models/index");
var Sequelize = require("sequelize");
var moment = require("moment");

var Op = Sequelize.Op;

/**
 * @class RatingController
 * @desc A controller that handles all operations related to ratings
 */
class RatingController {
  /**
   * @static
   * Method to show rate page for a dog
   * @param {*} request
   * @param {*} response
   * @memberof RatingController
   */
  static rateDog(request, response) {
    var { dogId } = request.params;
    models.Dog.findOne({
      where: {
        id: dogId
      },
      attributes: [
        "id",
        "name",
        "size",
        "breed",
        "age",
        "available",
        "profile",
        "card_color"
      ]
    })
      .then(function(dog) {
        if (dog) {
          response.render("rateDog", { dog });
        } else {
          request.flash("info", "Could not find dog");
          response.redirect("/gallery");
        }
      })
      .catch(function(err) {
        request.flash("info", "An error occured");
        response.redirect("/gallery");
      });
  }

  /**
   * @static
   * Method to rate a dog
   * @param {*} request
   * @param {*} response
   * @memberof RatingController
   */
  static rateDogApi(request, response) {
    var { dogId, review, score } = request.body;
    models.Dog.findOne({
      where: {
        id: dogId
      },
      attributes: ["id"]
    })
      .then(function(dog) {
        if (dog) {
          models.Rating.create({
            score,
            review,
            dogId,
            userId: request.session.user.id
          })
            .then(function(ratedDog) {
              request.flash("info", "Dog has been rated");
              response.redirect("/gallery");
            })
            .catch(function(err) {
              request.flash("info", "Could not rate, please try again");
              response.redirect("/create/dog");
            });
        } else {
          request.flash("info", "Could not find dog");
          response.redirect("/gallery");
        }
      })
      .catch(function(error) {
        request.flash("info", "An error occured");
        response.redirect("/gallery");
      });
  }
}
module.exports = RatingController;
