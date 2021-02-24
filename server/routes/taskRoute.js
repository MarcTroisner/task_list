const express = require('express');
const mongoose = require('mongoose');
const taskModel = require('../models/taskModel');

const router = express.Router();

// GET
router.get('/', async (_req, res) => {
  try {
    await taskModel.find({}, 'task created _id', (error, docs) => {
      if (error) res.sendStatus(404);
      res.status(200).json({ tasks: docs });
    });
  } catch (error) {
    res.sendStatus(500);
  }
});

// POST
router.post('/', async (req, res) => {
  try {
    const task = new taskModel({ task: req.body.task });
    await task.save((error) => {
      if (error) res.sendStatus(500);
      res.sendStatus(201);
    });
  } catch (error) {
    res.sendStatus(500);
  }
});

// DELETE
router.delete('/', async (req, res) => {
  try {
    await taskModel.deleteOne({ _id: req.body._id }, (error) => {
      if (error) res.sendStatus(404);
      res.sendStatus(204);
    })
  } catch (error) {
    res.sendStatus(500);
  }
});


module.exports = router;
