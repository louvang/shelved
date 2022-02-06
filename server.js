const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

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

if (process.env.NODE_ENV === 'development') {
  app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
    })
  );

  app.use(
    ['/api', '/api/*'],
    createProxyMiddleware({ target: 'http://localhost:5000' })
  );
}

// routes
require('./routes/auth')(app); // a function that immediately invokes using app as parameter

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
