const Movie = require('../models/movies');

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener películas' });
  }
};

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la película' });
  }
};

module.exports = {
  createMovie,
  getMovies
};
