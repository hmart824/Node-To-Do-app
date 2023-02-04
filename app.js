const express = require('express');
const port = 3000;
const path = require('path');

const db = require('./config/mongoose');

const app = express();

//set view engine
app.set('view engine' , "ejs");
app.set('views' , path.join(__dirname , 'views'));

app.use(express.urlencoded());
app.use(express.static('statics'));

//set express router
app.use('/' , require("./routes"));




//starts the server
app.listen(port , (err)=>{
    if(err){
        console.log("Error in starting the server");
        return;
    }
    console.log('Server starts successfully on port : ', port);
})