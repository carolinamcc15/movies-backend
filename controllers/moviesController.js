const moviesService = require('../services/moviesService');

const getMovies = async (req, res) => {
  const { year } = req.query;

  try {
    const movies = await moviesService.getMovies(year);
    res.status(200).json(movies);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const createMovie = async (req, res) => {
  try {
    const movieData = req.body;
    const movie = await moviesService.createMovie(movieData);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createMovie,
  getMovies,
};
