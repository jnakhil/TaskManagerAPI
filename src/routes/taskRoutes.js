const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.post('/', taskController.createTask);
router.put('/:taskId', taskController.updateTask);
router.get('/', taskController.getAllTasks);

module.exports = router;
