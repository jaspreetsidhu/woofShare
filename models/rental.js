"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rental = sequelize.define(
    "Rental",
    {
      returnDate: {
        type: DataTypes.DATEONLY
      },
      pickUpDate: {
        type: DataTypes.DATEONLY
      },
      daysToRent: {
        type: DataTypes.INTEGER
      },
      userId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Users",
          key: "id",
          as: "userId"
        }
      },
      dogId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "Dogs",
          key: "id",
          as: "dogId"
        }
      }
    },
    { tableName: "rentals" }
  );
  Rental.associate = function(models) {
    // associations can be defined here
    Rental.belongsTo(models.Dog, {
      // foreignKey: 'dogId',
      as: "dog",
      onDelete: "CASCADE"
    });
    Rental.belongsTo(models.User, {
      // foreignKey: 'userId',
      onDelete: "CASCADE",
      foreignKey: "userId"
    });
  };
  return Rental;
};
