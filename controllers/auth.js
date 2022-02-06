const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');

// Get signup form
exports.register_get = (req, res) => {
  res.json({
    data: 'signup endpoint',
  });
};

// Add new admin to db
exports.register_post = (req, res) => {
  if (req.body.admin_code !== process.env.REGISTER_ADMIN_CODE) {
    res.send("Sorry, you're not allowed to make an account.");
  } else {
    Admin.findOne({ usename: req.body.username }, async (err, adminDoc) => {
      if (err) throw err;
      if (adminDoc) {
        res.send('An administrator with that username already exists.');
      } else {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newAdmin = new Admin({
          username: req.body.username,
          password: hashedPassword,
          dateCreated: Date.now(),
          dateLastActive: Date.now(),
        });

        await newAdmin.save();
        res.send('User created. Send user to homepage.');
      }
    });
  }
};
