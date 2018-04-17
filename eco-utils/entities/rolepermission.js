"use strict";

module.exports = function(sequelize,DataTypes)
{
    var RolePermission = sequelize.define('RolePermission',{
        rolePermissionId: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        roleId: {
            type: DataTypes.INTEGER
        },
        permissionId: {
            type: DataTypes.INTEGER
        }
    },
    {
        classMethods: {
            associate: function(models) {}
        },
        timestamps: false
    });
    return RolePermission;
}
