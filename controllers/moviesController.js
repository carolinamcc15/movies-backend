const Movie = require('../models/movies');

const createMovie = async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la película' });
  }
};

module.exports = {
  createMovie
};
