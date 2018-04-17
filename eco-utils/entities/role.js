"use strict";

module.exports = function(sequelize,DataTypes)
{
    var Role = sequelize.define('Role',{
        roleId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        roleName: {
            type: DataTypes.STRING,
            unique: true
        },
        isDisabled: {
            type: DataTypes.INTEGER
        },
        description: {
            type: DataTypes.STRING
        },
        createdDateTime: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        updatedDateTime: {
            type: DataTypes.DATE
        },
        expiryDate: {
            type: DataTypes.DATE
        },
        status: {
            type: DataTypes.INTEGER
        }
    },
    {
        classMethods: {
            associate: function(models) {}
        },
        timestamps: false
    });
    return Role;
}
