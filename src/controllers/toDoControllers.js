const getFunction = require('./../services/toDoServices');

exports.getTasks = (req, res) => {
    getFunction.getTasks(req, res);
};

exports.getTasksById = (req, res) => {
    getFunction.getTasksById(req, res);
};

exports.deleteTasks = (req, res) => {
    getFunction.deleteTasks(req, res);
};

exports.updateTasks = (req, res) => {
    getFunction.updateTasks(req, res);
};

exports.postTasks = (req, res) => {
    getFunction.postTasks(req, res);
};