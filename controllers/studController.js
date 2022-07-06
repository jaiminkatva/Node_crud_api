const db = require("../models");

// create main model
const Student = db.student


//main work

// 1. create student

const addStudent = async(req, res) => {

    let info = {
        name: req.body.name,
        email: req.body.email,
        active: req.body.active
    }

    const student = await Student.create(info)
    res.status(200).send(student)
    console.log(student);

}

// 2. get all the student 

const getAllStudent = async(req, res) => {
    const student = await Student.findAll({})
    res.status(200).send(student)
}


// 3. get one student

const getOneStudent = async(req, res) => {
    let id = req.params.id
    const student = await Student.findOne({ where: { id: id } })
    res.status(200).send(student)
}

// 4. update student

const updateStudent = async(req, res) => {
    let id = req.params.id
    const student = await Student.update(req.body, { where: { id: id } })
    res.status(200).send(student)
}

// 5. delete student 

const deleteStudent = async(req, res) => {
    let id = req.params.id
    await Student.destroy({ where: { id: id } })
    res.status(200).send(`delete data id of ${id}`)
}

module.exports = { addStudent, getAllStudent, getOneStudent, updateStudent, deleteStudent }