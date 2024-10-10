const Task = require('../models/Task');

const getAllTasks = (req, res) => {
  res.send('all ietms from file')
}

const getTask = (req, res) => {
  res.send('get task')
}

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body)
    res.status(201).send(task)
  } catch (error) {
    res.status(500).json({ msg: error })
  }
  
}

const updateTask = (req, res) => {
  res.send('update task')
}

const deleteTask = (req, res) => {
  res.send('delete task')
}


module.exports = {
  getAllTasks, getTask, createTask, updateTask, deleteTask
}