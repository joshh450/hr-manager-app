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

router.patch('/:id',  async (req, res) => {
    try {
        await Employee.findByIdAndUpdate(req.params.id, req.body);
        await Employee.save()
        res.send(employee)
    } catch (err) {
        res.status(500).send(err)
    }
})

router.delete('/:id',  async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id)
        if(!employee) res.status(404).send("No employee found")
        res.status(200).send()
    } catch (err) {
        res.status(500).send(err)
    }
})

module.exports = router;