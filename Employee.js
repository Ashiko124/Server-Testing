mongoose = require('mongoose');
const Employee = require('./Employee');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
    }
});


module.exports = mongoose.model(Employee, userSchema);
