"use strict";
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      userName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            args: 3,
            msg: "Name must be atleast 3 characters in length"
          }
        },
        unique: {
          args: true,
          msg: "Username already in use!"
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        },
        unique: {
          args: true,
          msg: "Email address already in use!"
        }
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          isUrl: { msg: "invalid URL" }
        }
      }
    },
    { tableName: "users" }
  );
  User.associate = function(models) {
    User.hasMany(models.Rating, {
      onDelete: "cascade",
      as: "user",
      foreignKey: "userId"
    });
  };
  return User;
};
