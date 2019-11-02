const axios = require('axios').default;
const { tmdb } = require('../../config');

const movieInstance = axios.create({
  baseURL: tmdb.url
});

exports.list = async ({ page = 1 }) => {
  const res = await movieInstance.get('/movie/upcoming', {
    params: { api_key: tmdb.apiKey, page }
  });

  return res.data;
};

exports.get = async ({ id }) => {
  const res = await movieInstance.get(`/movie/${id}`, {
    params: { api_key: tmdb.apiKey }
  });
  return res.data;
};
