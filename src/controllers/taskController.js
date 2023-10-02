const Task = require('../models/tasks');

exports.createTask = async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const status = "open";

        const task = await Task.create({ title, description, status });
        res.status(201).json({
            "message": "Created task successfully",
            "result": task
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            "message": 'Failed to create task',
            "errorDescription": error
        });
    }
};

exports.updateTask = async (req, res) => {
    try {
        const taskId = req.params.taskId;
        const { title, status, description } = req.body;
        const task = await Task.findByPk(taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        task.title = title;
        task.status = status;
        task.description = description;
        
        await task.save();

        res.json({
            "message": "Updated task successfully",
            "result": task
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            "message": 'Failed to update task',
            "errorDescription": error
        });
    }
};

exports.getAllTasks = async (req, res) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const offset = (page - 1) * limit;

        const tasks = await Task.findAndCountAll({
            offset: offset,
            limit: parseInt(limit)
        });

        res.json(tasks);

    } catch (error) {
        console.error(error);

        res.status(500).json({
            "message": 'Failed to fetch task',
            "errorDescription": error
        });
    }
};