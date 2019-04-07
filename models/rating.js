module.exports = function(sequelize, DataTypes) {
    var Rating = sequelize.define("Rating", {
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
          
        dogId: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
        });

        rating.associate = function(models) {
           rating.belongsTo(models.Dog, {
              foreignKey: 'id',
              targetKey: 'dogID'
            });
            rating.belongsToMany(models.User, {
                through: 
                foreignKey: 'id',
                targetKey: 'userID'
              });
        };

        return rating;
  
  };


