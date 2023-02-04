const express = require('express');
const router = express.Router();
const home_controller = require('../controller/home_controller');
const task_controller = require('../controller/task_controller');
const task_delete_controller = require('../controller/task_delete_controller');
const update_controller = require('../controller/update_controller');

//handle routes
router.get('/' , home_controller.home);
router.get('/delete-task' , task_delete_controller.delete);
router.get('/updates' , update_controller.update);
router.post('/add-task' , task_controller.task);


module.exports = router;