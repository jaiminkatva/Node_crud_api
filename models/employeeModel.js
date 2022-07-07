module.exports = (sequelize, DataTypes) => {

    const Employee = sequelize.define("employee", {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        subject: {
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    })
    return Employee
}