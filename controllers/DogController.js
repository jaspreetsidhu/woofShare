var models = require("../models/index");
var Sequelize = require("sequelize");
var moment = require("moment");

var Op = Sequelize.Op;

/**
 * @class DogController
 * @desc A controller that handles all operations related to dogs
 */
class DogController {
  /**
   * @static
   *  Method to get list of dogs
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static getAllDogs(request, response) {
    models.Dog.findAll({
      include: [
        {
          model: models.Rating,
          as: "ratings",
          attributes: ["review", "score"]
        }
      ],
      attributes: [
        "id",
        "name",
        "size",
        "breed",
        "age",
        "available",
        "profile",
        "card_color",
        "photoUrl",
        [
          models.sequelize.fn("ROUND", ("AVG", models.sequelize.col("score"))),
          "ratingAvg"
        ]
      ]
    })
      .then(function(dogs) {
        if (dogs) {
          response.render("gallery", {
            dogs: dogs,
            ratings: dogs[0].dataValues.ratings,
            messages: request.flash("info")
          });
        }
      })
      .catch(function(err) {
        return response.status(500).json({
          status: "FAILED",
          message: "Error processing request, please try again",
          Error: err.toString()
        });
      });
  }

  /**
   *
   * @static
   *  * Method to get a single dog instance
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static getSingleDog(request, response) {
    var dogId = parseInt(request.params.dogId);
    if (isNaN(dogId)) {
      request.flash("info", "Could not find that dog");
      response.redirect("/gallery");
    }
    models.Dog.findOne({
      where: {
        id: dogId
      },
      include: [
        {
          model: models.Rating,
          as: "ratings",
          attributes: ["review", "score", "userId", "dogId"]
        }
      ],
      attributes: [
        "id",
        "name",
        "size",
        "breed",
        "age",
        "available",
        "profile",
        "card_color",
        "photoUrl",
        [
          models.sequelize.fn("ROUND", ("AVG", models.sequelize.col("score"))),
          "ratingAvg"
        ]
      ]
    })
      .then(function(singleDog) {
        if (singleDog) {
          response.render("confirmation", { dog: singleDog });
        } else {
          request.flash("info", "Could not find that dog");
          response.redirect("/gallery");
        }
      })
      .catch(function(err) {
        request.flash(
          "info",
          "An error occured while getting dog, please try again"
        );
        response.redirect("/gallery");
      });
  }

  /**
   *
   * @static
   *  * Method to get a single dog instance
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static getSingleDogApi(request, response) {
    var dogId = parseInt(request.params.dogId);
    if (isNaN(dogId)) {
      return response.status(400).json({
        status: "Failed",
        message: "Dog Id must be a number"
      });
    }
    models.Dog.findOne({
      where: {
        id: dogId
      },
      include: [
        {
          model: models.Rating,
          as: "ratings",
          attributes: ["review", "score", "userId", "dogId"],
          include: [
            {
              model: models.User,
              as: "user",
              attributes: ["userName", "photo"]
            }
          ]
        }
      ],
      attributes: [
        "id",
        "name",
        "size",
        "breed",
        "age",
        "available",
        "profile",
        "card_color",
        "photoUrl"
      ]
    })
      .then(function(singleDog) {
        if (singleDog) {
          return response.status(200).json({
            dog: singleDog.dataValues
          });
        } else {
          return response.status(404).json({
            status: "FAILED",
            message: "Could not find dog",
            dog: []
          });
        }
      })
      .catch(function(error) {
        return response.status(500).json({
          status: "FAILED",
          message: "Error processing request, please try again",
          Error: error.toString()
        });
      });
  }

  /**
   * @static
   * Method to add a new dog
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static addDog(request, response) {
    var { name, breed, size, age, card_color, profile } = request.body;
    let photoUrl = null;
    if (request.file) {
      photoUrl = "images/" + request.file.filename;
    }
    models.Dog.findOrCreate({
      where: {
        name: name
      },
      defaults: {
        name,
        photoUrl,
        breed,
        size,
        age,
        card_color: parseInt(card_color),
        profile
      }
    })
      .spread(function(dog, created) {
        if (!created) {
          request.flash("info", "Dog already exists");
          response.redirect("/gallery");
        } else {
          request.flash("info", "A new dog has been added");
          response.redirect("/gallery");
        }
      })
      .catch(function(err) {
        request.flash("info", "Could not create do, please try again");
        response.redirect("/create/dog");
      });
  }

  /**
   *
   * @static
   *  * Method to reserve a single dog instance
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static reserve(request, response) {
    var { pickUpDate, returnDate, dogId } = request.body;
    pickUpDate = moment(pickUpDate, "MM-DD-YYYY");
    returnDate = moment(returnDate, "MM-DD-YYYY");
    // console.log("pickUpDate", pickUpDate);
    // console.log("returnDate", returnDate);
    var duration = moment.duration(returnDate.diff(pickUpDate));
    var days = duration.asDays();
    models.Rental.create({
      pickUpDate,
      returnDate,
      daysToRent: days,
      dogId,
      userId: request.session.user.id
    })
      .then(function() {
        models.Dog.findOne({
          where: {
            id: dogId
          },
          attributes: ["available", "id", "name"]
        })
          .then(function(foundDog) {
            if (foundDog) {
              const value = {
                available: 0
              };
              foundDog
                .update(value, {
                  where: {
                    id: foundDog.dataValues.id
                  }
                })
                .then(function(updatedDog) {
                  request.flash(
                    "info",
                    `Dog (${updatedDog.dataValues.name}) has been reserved!`
                  );
                  response.redirect("/gallery");
                });
            } else {
              request.flash("info", "Dog cannot be found!");
              response.redirect("/gallery");
            }
          })
          .catch(function(err) {
            request.flash("info", "An error occured");
            response.redirect("/gallery");
          });
      })
      .catch(function(err) {
        request.flash("info", "Error processing request, please try again");
        response.redirect("/gallery");
      });
  }

  /**
   * @static
   * Method to get dog instance by filtering
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static filterDogs(request, response) {
    var { available, age, breed, size } = request.body;
    if (available == "true") {
      available = true;
    } else if (available == "false") {
      available = false;
    }
    models.Dog.findAll({
      where: {
        [Op.or]: [
          {
            available:
              available === undefined
                ? {
                    [Op.ne]: undefined
                  }
                : available
          },
          {
            age:
              age === undefined
                ? {
                    [Op.ne]: undefined
                  }
                : age
          },
          {
            breed:
              breed === undefined
                ? {
                    [Op.ne]: undefined
                  }
                : breed
          },
          {
            size:
              size === undefined
                ? {
                    [Op.ne]: undefined
                  }
                : size
          }
        ]
      },
      include: [
        {
          model: models.Rating,
          as: "ratings",
          attributes: ["review", "score"]
        }
      ],
      attributes: [
        "id",
        "name",
        "size",
        "breed",
        "age",
        "available",
        "profile",
        "card_color",
        "photoUrl"
      ]
    })
      .then(function(dogs) {
        if (dogs) {
          response.render("gallery", {
            dogs: dogs,
            ratings: dogs[0].dataValues.ratings,
            messages: request.flash("info")
          });
        }
      })
      .catch(function(err) {
        request.flash("info", "Error processing request, please try again");
        response.redirect("/gallery");
      });
  }
}

module.exports = DogController;
