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
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            allowNull: false
        },
        photo:{
            type: DataTypes.STRING,
            allowNull: true,
            validate:{
                isUrl:{msg:"invalid URL"}
            }
        }
    });
    // Users.associate = function(models) {
    //      Users.hasMany(models.rental, {
    //              foreignKey: 'id',
    //              sourceKey: 'rentalID'
    //           })
    //          };

    return Users;
  };