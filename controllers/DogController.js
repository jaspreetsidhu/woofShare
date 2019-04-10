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
    // var { available, age } = request.query;
    models.Dog.findAll({
      include: [
        {
          model: models.Rating,
          as: "ratings"
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
          // return response.status(200).json({
          //   status: 'SUCCESS',
          //   message: 'Dogs Fetched Successfully',
          //   data: dogs
          // })
          // console.log(dogs);
          response.render("gallery", { dogs: dogs });
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
    var dogId = request.params.dogId;
    if (!dogId) {
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
      .then(function(singleDog) {
        if (singleDog) {
          response.render("confirmation", { dog: singleDog });
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
   * Method to get dog instance by filtering
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static filterDogs(request, response) {
    var { available, age, breed, size } = request.query;
    if (available === "true") {
      available = true;
    } else if (available === "false") {
      available = false;
    }
    models.Dog.findAll({
      where: {
        [Op.or]: [
          {
            available:
              available === undefined ? { [Op.ne]: undefined } : available
          },
          {
            age: age === undefined ? { [Op.ne]: undefined } : age
          },
          {
            breed: breed === undefined ? { [Op.ne]: undefined } : breed
          },
          {
            size: size === undefined ? { [Op.ne]: undefined } : size
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
        "card_color"
      ]
    })
      .then(function(dogs) {
        if (dogs) {
          console.log;
          return response.status(200).json({
            status: "SUCCESS",
            message: "Dogs Fetched Successfully",
            data: dogs
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
   * @static
   * Method to add a new dog
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static addDog(request, response) {
    var {
      name,
      photo_url,
      breed,
      size,
      age,
      card_color,
      profile
    } = request.body;
    models.Dog.findOrCreate({
      where: {
        name: name
      },
      defaults: {
        name,
        photo_url,
        breed,
        size,
        age,
        card_color,
        profile
      }
    })
      .spread(function(dog, created) {
        if (!created) {
          return response.status(409).json({
            status: "Failed",
            message: "Dog already exists"
          });
        }
        return response.status(201).json({
          status: "SUCCESS",
          message: "A new dog successfully created",
          data: dog
        });
      })
      .catch(function(err) {
        response.status(500).json({
          status: "FAILED",
          message: "Error processing request, please try again",
          error: err.toString()
        });
      });
  }

  /**
   * @static
   * Method to update a  dog instance by Id
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static update(request, response) {
    var { dogId } = request.params;
    var {
      name,
      photo_url,
      breed,
      size,
      //age,
      card_color,
      profile
    } = request.body;
    models.Dog.findOne({
      where: {
        id: dogId
      },
      attributes: [
        "name",
        "photo_url",
        "breed",
        "size",
        "age",
        "card_color",
        "profile",
        "id",
        "available"
      ]
    })
      .then(function(foundDog) {
        if (foundDog) {
          const value = {
            name: name || foundDog.name,
            photo_url: photo_url || foundDog.photo_url,
            breed: breed || foundDog.breed,
            size: size || foundDog.size,
            profile: profile || foundDog.profile,
            card_color: card_color || foundDog.console
          };
          foundDog
            .update(value, {
              where: {
                id: foundDog.dataValues.id
              }
            })
            .then(function(updatedDog) {
              return response.status(200).json({
                status: "SUCCESS",
                message: "Dog has been updated Successfully",
                data: updatedDog
              });
            });
        } else {
          response.status(404).json({
            message: "Dog not found or has been deleted"
          });
        }
      })
      .catch(function(err) {
        response.status(500).json({
          status: "FAILED",
          message: "Error processing request, please try again",
          Error: err.toString()
        });
      });
  }

  /**
   * @static
   * Method to delete a dog instance by Id
   * @param {*} request
   * @param {*} response
   * @memberof DogController
   */
  static delete(request, response) {
    const { dogId } = request.params;
    models.Dog.findOne({
      where: {
        id: dogId
      },
      attributes: ["id", "name"]
    })
      .then(function(foundDog) {
        if (foundDog) {
          models.Dog.destroy({
            where: {
              id: dogId
            }
          }).then(function() {
            return response.status(200).json({
              status: "SUCCESS",
              message: "Article deleted successfully"
            });
          });
        } else {
          response.status(404).json({
            status: "FAILED",
            message: "Dog not found or has been deleted"
          });
        }
      })
      .catch(function(err) {
        response.status(500).json({
          status: "FAILED",
          message: "Error processing request, please try again",
          Error: err.toString()
        });
      });
  }

  static reserve(request, response) {
    var { pickUpDate, returnDate, dogId } = request.body;
    console.log("=================>>>>", pickUpDate, returnDate);
    // const myDate = moment(str, 'YYYY-MM-DD').toDate();
    // pickUpDate = moment(pickUpDate).format('MM-DD-YYYY HH:MM:SS');
    pickUpDate = moment(pickUpDate, "MM-DD-YYYY HH:MM:SS");
    // returnDate = moment(returnDate, 'MM-DD-YYYY HH:MM:SS')
    models.Rental.create({
      pickUpDate,
      returnDate: pickUpDate,
      daysToRent: 1,
      dogId,
      userId: 1
    })
      .then(function() {
        models.Dog.findOne({
          where: {
            id: dogId
          },
          attributes: ["available", "id"]
        })
          .then(function(foundDog) {
            console.log(foundDog);
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
                .then(function() {
                  response.redirect("/gallery");
                });
            } else {
              response.status(404).json({
                message: "Dog not found or has been deleted"
              });
            }
          })
          .catch(function(err) {
            response.status(500).json({
              status: "FAILED",
              message: "Error processing request, please try again",
              Error: err.toString()
            });
          });
      })
      .catch(function(err) {
        response.status(500).json({
          status: "FAILED",
          message: "Error processing request, please try again",
          Error: err.toString()
        });
      });
  }
}
module.exports = DogController;
