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
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
          as: "userId"
        }
      },
      dogId: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "dogs",
          key: "id",
          as: "dogId"
        }
      }
    },
    { tableName: "ratings" }
  );

  Rating.associate = function(models) {
    Rating.belongsTo(models.Dog, {
      as: "dog",
      onDelete: "CASCADE",
      foreignKey: "dogId"
    });
    Rating.belongsTo(models.User, {
      as: "user",
      onDelete: "CASCADE",
      foreignKey: "userId"
    });
  };
  return Rating;
};
