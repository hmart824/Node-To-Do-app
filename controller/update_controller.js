const Task = require('../models/task');
module.exports.update = (req , res)=>{
    let id = req.query.id;
    let updates = JSON.parse(req.query.update);
    Task.findByIdAndUpdate(id ,updates, (err)=>{
        if(err){
            console.log("error in completing task");
            return;
        }
        return res.redirect('back');
    });
}