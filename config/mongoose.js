const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/tasks_db');
const db = mongoose.connection;

db.on('error' , console.error.bind(console , 'error in database'));

db.once('open' , ()=>{
    console.log('successfully connected to the database');
})