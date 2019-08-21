const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    id: {
        type: Number,
        min: 6,
        max: 6,
        required: true
    },
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        min: 10,
        max: 10,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema)