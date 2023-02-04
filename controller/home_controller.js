const Task = require('../models/task');
module.exports.home = (req , res)=>{
    Task.find({}, (err , tasks)=>{
        if(err){
            console.log("error in getting tasks")
        }
        return res.render('home' , {
            title: "ToDo",
            tasks: tasks
        })
    })
};