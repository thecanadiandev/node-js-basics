const getAllTasks = (req, res) => {
  res.send('all ietms from file')
}

const getTask = (req, res) => {
  res.send('get task')
}

const createTask = (req, res) => {
  res.send('create task')
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