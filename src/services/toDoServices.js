let tasks = [{ id: 1, task: 'buy grocery', isCompleted: false },
{ id: 2, task: 'buy books', isCompleted: false }]




exports.getTasks = (req, res) => {
    res.status(200).json({
        status: "success",
        requestedAt: req.requestedAt,
        data: {
            tasks: tasks
        }
    });
}

exports.deleteTasks = (req, res) => {
    tasks = tasks.filter(function (item) {
        return item.id !== Number(req.params.id)
    });

    res.status = 204;
    res.send(JSON.stringify({
        message: "data deleted"
    }));
}

exports.getTasksById = (req, res) => {

    let found = tasks.find(function (item) {
        return item.id === Number(req.params.id);
    });
    console.log(found)
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
};

exports.postTasks = (req, res) => {

    let newId = tasks.length + 1;
    const newTask = Object.assign({ id: newId }, req.body);
    tasks.push(newTask);
    res.status(201).json({
        status: "success",
        data: {
            tasks: newTask
        }
    });

};

exports.updateTasks = (req, res) => {
    let id = req.params.id * 1;
    let taskToUpdate = tasks.find((item) => item.id === id);
    let index = tasks.indexOf(taskToUpdate);
    Object.assign(taskToUpdate, req.body);
    tasks[index] = taskToUpdate;


    res.status(200).json({
        status: "success",
        data: {
            task: taskToUpdate
        }

    });





}
