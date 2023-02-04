const Task = require('../models/task');
module.exports.delete = (req , res)=>{
    let id = req.query.id;
    Task.findByIdAndDelete(id , (err)=>{
        if(err){
            console.log("error in deleting contact");
            return;
        }
    });
    res.redirect('back');
}