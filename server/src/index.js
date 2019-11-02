/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const glob = require('glob');
const config = require('./config');

const app = express();

async function start() {
  // Enable cors in dev mode
  if (config.dev) {
    app.use(cors());
  }

  // Enable api usage logging
  if (config.dev) {
    app.use(morgan('dev'));
  } else {
    app.use(morgan('short'));
  }

  app.use(express.json({ limit: '2mb', type: 'application/json' }));

  // Load APIs
  const apis = glob.sync(`${config.path}/**/*Api.js`);
  apis.forEach(apiPath => {
    require(`${apiPath}`)(app);
  });

  // Listen the server
  app.listen(config.port);
}

start();
module.exports = app;
