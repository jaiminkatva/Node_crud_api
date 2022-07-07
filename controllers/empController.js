const db = require("../models");

// create main model
const Employee = db.employee

// api

// 1. craete Employee

const addEmployee = async(req, res) => {
    let info = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject
    }
    const employee = await Employee.create(info)
    res.status(200).send(employee)
    console.log(employee);
}

const getEmployee = async(req, res) => {
    const employee = await Employee.findAll({})
    res.status(200).send(employee)
}

const deleteEmployee = async(req, res) => {
    let id = req.params.id
    await Employee.destroy({ where: { id: id } })
    res.status(200).send(`Deleted employee id is ${id}`)
}

const getOneEmployee = async(req, res) => {
    let id = req.params.id
    const employee = await Employee.findOne({ where: { id: id } })
    res.status(200).send(employee)
}

const updateEmployee = async(req, res) => {
    let id = req.params.id
    const employee = await Employee.update(req.body, { where: { id: id } })
    res.status(200).send(employee)
}

module.exports = { addEmployee, getEmployee, deleteEmployee, updateEmployee, getOneEmployee }