const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        // Add additional validation rules for address if needed
    },
    work: {
        type: String,
        enum: ['waiter', 'manager', 'chef'],
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Person', personSchema);


