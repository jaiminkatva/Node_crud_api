module.exports = (sequelize, DataTypes) => {

    const Student = sequelize.define("student", {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    })
    return Student
}