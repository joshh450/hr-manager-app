const express = require('express')
const router = express.Router();
const Employee = require('../../models/Employee')

router.get('/',  async (req, res) => {
    const employees = await Employee.find({})
    try {
        res.send(employees)
    } catch (err) {
        console.error(err.message)
        res.status(500).send(err)
    }
})

router.post('/',  async (req, res) => {
    const newEmployee = new Employee(req.body)
    try {
        await newEmployee.save();
        res.json(newEmployee)
    } catch (err) {
        console.error(err.message)
        res.status(500).send(err)
    }
})

module.exports = router;