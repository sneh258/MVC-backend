const getFunction = require('./../services/toDoServices');
//const getFunction = require('./../../database/models/index')

const Joi = require('joi')
exports.getTasks = async (req, res) => {
    const tasks = await getFunction.getTasks()
    res.status(200).json(tasks);

};

// res.status()

// const res = {
//     status: () => {
//         kjsj
//         return res;
//     },
//     json: () => {
//         kjsdjk
//         return res;
//     }
// }
exports.getTasksById = async (req, res) => {
    const { id } = req.params
    const found = await getFunction.getTasksById(id);
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
};

exports.deleteTasks = async (req, res) => {
    const { id } = req.params
    await getFunction.deleteTasks(id);
    res.status(200).send("deleted")
};

exports.updateTasks = async (req, res) => {

    const { id } = req.params;
    const { task } = req.body;
    const taskToUpdate = await getFunction.updateTasks(id, task)
    res.status(200).send(taskToUpdate)
};

exports.postTasks = async (req, res) => {
    // try {
    //     const schema = Joi.object(
    //         {
    //             task: Joi.string()
    //                 .required(),

    //         }
    //     )
    //    const { error, value } = schema.validate(req.body);
    //    console.log(error);
    //    if (!error) {
            const { task } = req.body;
            const newTask = await getFunction.postTasks(task);
            res.status(201).json(newTask)
    //     } else {
    //       res.status(400).json({
    //              error: error.message
    //          })
    //      }
    //  } catch (error) {
    //      res.status(500).json({
    //         error: error.message

    //     })
    }



