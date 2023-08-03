const { Op } = require('sequelize');
const Movie = require('../models/movies');

const getMovies = async (year, limit = 20, offset = 0) => {
  try {
    let movies;
    if (year) {
      movies = await Movie.findAll({
        where: {
          date: {
            [Op.between]: [`${year}-01-01`, `${year}-12-31`],
          },
        },
        order: [['id', 'DESC']],
        offset,
        limit,
      });
    } else {
      movies = await Movie.findAll({ order: [['id', 'DESC']], offset, limit });
    }
    return movies;
  } catch (error) {
    throw new Error('Error getting movies');
  }
};

const createMovie = async movieData => {
  try {
    const movie = await Movie.create(movieData);
    return movie;
  } catch (error) {
    throw new Error('The movie could not be created');
  }
};

module.exports = {
  createMovie,
  getMovies,
};
