"use strict";

module.exports = function(sequelize,DataTypes)
{
    var UserRole = sequelize.define('UserRole',{
        userRoleId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER
        },
        roleId: {
            type: DataTypes.INTEGER
        }
    },
    {
        classMethods: {
            associate: function(models) {}
        },
        timestamps: false
    });
    return UserRole;
}
