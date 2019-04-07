module.exports = function(sequelize, DataTypes) {
    var rental = sequelize.define("Rental", {
        requestDate: {
            type: DataTypes.DATEONLY
            }
          },
         daysToRent : {
            type: DataTypes.INTEGER
         }
        });

        dog.associate = function(models) {


        return rental;
  
  };