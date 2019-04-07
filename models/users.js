module.exports = function(sequelize, DataTypes) {
    var Users = sequelize.define("Users", {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 3,
                    msg: "Name must be atleast 3 characters in length"
                }
            },
            unique:{
                args: true,
                msg: 'Username already in use!'
            }
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false,
            validate: {
              isEmail:true
            },
            unique: {
                args: true,
                msg: 'Email address already in use!'
            }
        },
        address: { 
            type: Sequelize.STRING,
            allowNull: false
        },
        photo:{
            type: Sequelize.STRING,
            allowNull: true,
            validate:{
                isUrl:{msg:"invalid URL"}
            }
        }
    });

    Users.associate = function(models) {
        Users.hasMany(models.rating);
        Users.hasOne(models.rental)
     };




    return User;
  };