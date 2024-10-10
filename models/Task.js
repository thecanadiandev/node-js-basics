const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: String,
  completed: Boolean
})

// model is a wrapper for a schema
module.exports = mongoose.model('Task', TaskSchema)