'use strict';
module.exports = (sequelize, DataTypes) => {
  const Dog = sequelize.define('Dog', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
          len: [1]
      }
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    size: {
      type: DataTypes.STRING,
    },
    breed: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.STRING,
    },
    profile: {
      type: DataTypes.TEXT,
    },
    available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    },
    card_color: {
        type: DataTypes.INTEGER,
    }
  }, { tableName: 'dogs' });

  Dog.associate = function (models) {
    Dog.hasMany(models.Rating, {
      onDelete: "cascade",
      as: "ratings",
      foreignKey: 'dogId',
    });
    Dog.hasOne(models.Rental, {
      onDelete: "cascade",
      foreignKey: 'rentals',
      as: 'rental'
    })
  };
  return Dog
};