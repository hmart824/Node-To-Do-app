const Task = require('../models/task')
module.exports.task = (req , res)=>{
    console.log(req.body)
    Task.create({
        task: req.body.task,
        category: req.body.category,
        due_date: req.body.date,
        checked: false
    } , (err , newTask)=>{
        if(err){
            console.log('Error in adding task');
            return;
        }
        console.log('----> ' , newTask);
        return res.redirect('back');
    })
}