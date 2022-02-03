const { register_get } = require('../controllers/auth');

module.exports = (app) => {
  app.get('/api/register', register_get);

  app.post('/api/register', register_post);
};
