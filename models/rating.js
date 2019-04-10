"use strict";
module.exports = (sequelize, DataTypes) => {
  const Rating = sequelize.define(
    "Rating",
    {
      score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      review: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      userId: {
        type: DataTypes.INTEGER,
        // onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
          as: "User_Id"
        }
      },
      dogId: {
        type: DataTypes.INTEGER,
        // onDelete: "CASCADE",
        references: {
          model: "dogs",
          key: "id",
          as: "Dog_Id"
        }
      }
    },
    { tableName: "ratings" }
  );

  Rating.associate = function(models) {
    Rating.belongsTo(models.Dog, {
      as: "dog",
      foreignKey: "dogId"
    });
    Rating.belongsTo(models.User, {
      as: "user",
      foreignKey: "userId"
    });
  };
  return Rating;
};
