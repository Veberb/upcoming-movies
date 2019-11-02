const path = require('path');
const tmdb = require('./tmdb');

const env = process.env.NODE_ENV;
const dev = env === 'development';
const staging = env === 'staging';
const production = env === 'production';

const DEFAULT_ENV_CONFIG = {
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3001,

  tmdb,

  env,
  dev,
  staging,
  production,

  path: path.normalize(`${__dirname}/..`)
};

module.exports = { ...DEFAULT_ENV_CONFIG };
