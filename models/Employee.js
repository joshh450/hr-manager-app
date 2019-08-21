const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    id: {
        type: Number,
        max: 999999,
        unique: true,
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
        required: true,
        max: 9999999999,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Employee = mongoose.model('employee', EmployeeSchema)