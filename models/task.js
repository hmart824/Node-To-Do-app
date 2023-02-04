const mongoose = require('mongoose');

//define schema
const taskSchema = new mongoose.Schema({
    task:{
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    due_date:{
        type: String,
        required: true
    },
    checked:{
        type: Boolean,
        required: true
    }
});

const Task = mongoose.model('Task' , taskSchema);
module.exports = Task;