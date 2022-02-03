const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({
    path: `${__dirname}/.env.prod`,
  });
} else {
  require('dotenv').config({
    path: `${__dirname}/.env.dev`,
  });
}

mongoose.connect(process.env.MONGO_URI);

// middleware
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// routes
require('./routes/auth')(app); // a function that immediately invokes using app as parameter

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
