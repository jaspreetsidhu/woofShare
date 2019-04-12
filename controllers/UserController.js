var models = require("../models/index");
var dotenv = require("dotenv");
dotenv.config();

class UserController {
  static checkToken(request, response) {
    if (request.session.user) {
      response.status(200).json({
        status: "SUCCESS",
        message: "User is authenticated"
      });
    } else {
      response.status(404).json({
        status: "FAILED",
        message: "User not authenticated"
      });
    }
  }

  static signup(request, response) {
    if (request.user) {
      models.User.findOne({
        where: {
            email: request.user.emails[0].value
          },
          attributes: ["email", "userName", "photo", "id"]
        })
        .then(function (user) {
          if (user) {
            var userDetails = {
              id: user.dataValues.id,
              name: user.dataValues.userName,
              photo: user.dataValues.photo
            };
            request.session.user = userDetails;
            response.render("signUp", userDetails);
          } else {
            response.render("signUp", {
              data: null
            });
          }
        })
        .catch(function (err) {
          response.render("signUp", {
            data: null
          });
        });
    } else {
      response.redirect("/");
    }
  }

  static createUser(request, response) {
    models.User.findOrCreate({
        where: {
          email: request.user.emails[0].value
        },
        defaults: {
          address: request.body.address,
          email: request.user.emails[0].value,
          userName: request.body.name,
          photo: request.user.photos[0].value
        }
      })
      .spread(function (user, created) {
        if (!created) {
          var userDetails = {
            id: user.dataValues.id,
            name: user.dataValues.userName,
            photo: user.dataValues.photo
          };
          request.session.user = userDetails;
          response.send(userDetails);
        } else {
          var userDetails = {
            id: user.id,
            name: user.userName,
            photo: user.photo
          };
          request.session.user = userDetails;
          response.send(userDetails);
        }
      })
      .catch(function (err) {
        response.status(500).json({
          status: "FAILED",
          message: "Error saving user, please try again",
          error: err.toString()
        });
      });
  }
  //get user along with rental details
  static getUser(request, response) {
    models.User.findOne({
        attributes: ["id", "userName", "email", "photo"],
        where: {
          email: request.user.emails[0].value
        }
      })
      .then(function (userRecord) {
        //console.log("User Details:", userRecord);
        if (userRecord) {
          // console.log("userdetails", userRecord.dataValues.id);
          //  var userRentalDetail= getDogRentals(userRecord.dataValues.id,response);
          // console.log("DogRentals", res);
          //,userRentDetails: res
          models.Rental.findAll({
              attributes: [
                "id",
                "returnDate",
                "pickUpDate",
                "userId",
                "dogId",
                "returnComplete",
                "statusArchive"
              ],
              include: [{
                model: models.Dog,
                as: "Dog",
                attributes: ["id", "name", "breed", "profile", "photoUrl"]
              }],
              where: {
                userId: userRecord.dataValues.id
              }
            })
            .then(function (dogRentals) {
              // console.log("dogRentals", dogRentals);
              //return dogRentals;
              // response.render("userProfile", { user: userRecord });
              response.render("userProfile", {
                user: userRecord,
                rentals: dogRentals
              });
            })
            .catch(function (err) {
              response.status(500).json({
                status: "FAILED",
                message: "Error retrieving Rental, please try again",
                error: err.toString()
              });
            });
        }
      })
      .catch(function (err) {
        response.status(500).json({
          status: "FAILED",
          message: "Error retrieving user, please try again",
          error: err.toString()
        });
      });
  }
  //update the rental return date along with status flags
  static updateDogRentals(request, response) {
    //console.log("rental id : ******", request.params.rentId);
    var rentId = parseInt(request.params.rentId);
    if (rentId) {
      //console.log("rentId", rentId);
      models.Rental.update({
          returnComplete: true
        }, {
          where: {
            id: rentId
          }
        })
        .then(function (updatedRentals) {
          // console.log("updatedRentals:", updatedRentals);
          response.json(updatedRentals)
        })
        .catch(function (err) {
          response.status(500).json({
            status: "FAILED",
            message: "Error updating rentals, please try again",
            error: err.toString()
          });
        });
    }
  }
  //update the rental return date along with status flags
  static updateDogArchiveRentals(request, response) {
    //console.log("rental id : ******", request.params.rentId);
    var rentId = parseInt(request.params.rentId);
    if (rentId) {
      // console.log("rentId", rentId);
      models.Rental.update({
          statusArchive: true
        }, {
          where: {
            id: rentId
          }
        })
        .then(function (updatedRentals) {
          //  console.log("updatedRentals:", updatedRentals);
          response.json(updatedRentals)
        })
        .catch(function (err) {
          response.status(500).json({
            status: "FAILED",
            message: "Error updating rentals, please try again",
            error: err.toString()
          });
        });
    }
  }
}
module.exports = UserController;