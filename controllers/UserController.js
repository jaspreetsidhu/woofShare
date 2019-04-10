// module to create user functionality
var models = require("../models/index");
//var Sequelize = require("sequelize");
var dotenv = require("dotenv");
var jwt = require("jsonwebtoken");
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
      .spread(function(user, created) {
        if (!created) {
          const token = jwt.sign({ user }, process.env.JWTKEY, {
            expiresIn: process.env.TOKEN_EXPIRATION
          });
          response.cookie("userDetails", sendUserDetails).send(token);
        }
        const token = jwt.sign({ user }, process.env.JWTKEY, {
          expiresIn: process.env.TOKEN_EXPIRATION
        });
        response.cookie("userDetails", sendUserDetails).send(token);
      })
      .catch(function(err) {
        response.status(500).json({
          status: "FAILED",
          message: "Error saving user, please try again",
          error: err.toString()
        });
      });
  }
}
module.exports = UserController;
