const { Router } = require('express');

const router = Router();
const movieManager = require('./movieManager');

module.exports = app => {
  app.use('/api/movies', router);
};

router.get('/', (req, res, next) => {
  movieManager
    .list(req.query)
    .then(result => res.json(result))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  movieManager
    .get(req.params)
    .then(result => res.json(result))
    .catch(next);
});
