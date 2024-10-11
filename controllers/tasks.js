const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { CustomAPIError, createCustomError } = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const getTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with ID: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).send(task);
});

const updateTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const taskBody = req.body;

  const task = await Task.findOneAndUpdate({ _id: taskId }, taskBody, {
    new: true, // get the new one back
    runValidators: true, // run validations
  });
  if (!task) {
    return next(createCustomError(`No task with ID: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res, next) => {
  const taskId = req.params.id;
  const task = await Task.findOneAndDelete({ _id: taskId });
  if (!task) {
    return next(createCustomError(`No task with ID: ${taskId}`, 404));
  }
  res.status(200).json({ task });
});

module.exports = {
  getAllTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
