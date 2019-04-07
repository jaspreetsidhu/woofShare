module.exports = function (sequelize, DataTypes) {
    var dog = sequelize.define("Dog", {
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
            validate: {
                isUrl: {
                    msg: "invalid URL"
                }
            }
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
    });

    dog.associate = function (models) {
        dog.hasMany(models.Rating, {
            onDelete: "cascade"
        });
        dog.hasOne(models.Rental, {
            onDelete: "cascade"
        })
    };


    return dog;

};