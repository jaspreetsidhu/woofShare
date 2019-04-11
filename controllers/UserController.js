// module to create user functionality
var models = require("../models/index");
//var Sequelize = require("sequelize");
var dotenv = require("dotenv");
dotenv.config();

class UserController {
  static createUser(request, response) {
    var sendUserDetails = JSON.stringify({
      displayName: request.body.name,
      photoUrl: request.user.photos[0].value
    });

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
      .spread(function() {
        response.cookie("userDetails", sendUserDetails).send("done");
      })
      .catch(function(err) {
        response.status(500).json({
          status: "FAILED",
          message: "Error saving user, please try again",
          error: err.toString()
        });
      });
  }
  // //getDog Rentals
  // static getDogRentals(userRecordId, response) {
  //   models.Rental.findAll({
  //     attributes: ["returnDate", "pickUpDate", "userId", "dogId", "returnComplete"],
  //     include: [
  //       {
  //         model: models.Dog,
  //         as: "dog",
  //         attributes: ["id", "name", "breed", "profile", "photoUrl"]
  //       }
  //     ],
  //     where: {
  //       userId: userRecordId
  //     }
  //   })
  //     .then(function(dogRentals) {
  //       console.log("dogRentals", dogRentals);
  //       return dogRentals;
  //       // response.render("userProfile", { user: userRecord });
  //     })
  //     .catch(function(err) {
  //       response.status(500).json({
  //         status: "FAILED",
  //         message: "Error retrieving user, please try again",
  //         error: err.toString()
  //       });
  //     });
  // }

  //get user
  static getUser(request, response) {
    models.User.findOne({
      attributes: ["id", "userName", "email", "photo"],
      where: {
        email: request.user.emails[0].value
      }
    })
      .then(function(userRecord) {
        console.log("User Details:", userRecord);
        if (userRecord) {
          console.log("userdetails", userRecord.dataValues.id);
          //  var userRentalDetail= getDogRentals(userRecord.dataValues.id,response);
          // console.log("DogRentals", res);
          //,userRentDetails: res
          models.Rental.findAll({
            attributes: ["returnDate", "pickUpDate", "userId", "dogId", "returnComplete", "statusArchive"],
            include: [
              {
                model: models.Dog,
                as: "dog",
                attributes: ["id", "name", "breed", "profile", "photoUrl"]
              }
            ],
            where: {
              userId: userRecord.dataValues.id
            }
          })
            .then(function(dogRentals) {
              console.log("dogRentals", dogRentals);
              //return dogRentals;
              // response.render("userProfile", { user: userRecord });
              response.render("userProfile", {
                user: userRecord,
                rentals: dogRentals
              });
            })
            .catch(function(err) {
              response.status(500).json({
                status: "FAILED",
                message: "Error retrieving Rental, please try again",
                error: err.toString()
              });
            });
        }
      })
      .catch(function(err) {
        response.status(500).json({
          status: "FAILED",
          message: "Error retrieving user, please try again",
          error: err.toString()
        });
      });
  }
}
module.exports = UserController;
