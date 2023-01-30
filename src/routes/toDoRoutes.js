const express = require('express');
const router = express.Router();
const taskController = require('./../controller/toDoController')


router.route("/")
    .get(taskController.getTasks)
    .post(taskController.postTasks)
router.route("/:id")
    .patch(taskController.updateTasks)
    .delete(taskController.deleteTasks)
    .get(taskController.getTasksById)

module.exports = router;   