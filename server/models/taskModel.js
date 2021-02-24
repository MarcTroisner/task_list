const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

const taskModel = mongoose.model('taskModel', taskSchema, 'tasks');

module.exports = taskModel;
