const express = require('express')
const router = express.Router()
// route = /api/v1/tasks

const {
    getAllTasks,
    createTask,
    getSingleTask,
    editTask,
    deleteTask
} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').get(getSingleTask).patch(editTask).delete(deleteTask)

module.exports = router