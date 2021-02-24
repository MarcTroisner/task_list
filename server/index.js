require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const taskRoute = require('./routes/taskRoute');

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(bodyParser.json());

// MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (error) => {
  if (error) console.log('Connection error');
  console.log('Connected to MongoDB');
});

// ROUTES
app.use('/tasks', taskRoute);

// PORT
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
