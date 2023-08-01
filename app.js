const express = require('express');
var cors = require('cors');
require('dotenv').config();

const optionsController = require('./controllers/optionsController');
const moviesController = require('./controllers/moviesController');

const port = process.env.PORT || 3010;

const corsOpts = {
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
};

const app = express();
app.use(cors(corsOpts));
app.use(express.json());

// Rutas para películas
app.get('/api/movies', moviesController.getMovies);
app.post('/api/movies', moviesController.createMovie);

// Rutas para opciones
app.get('/api/options', optionsController.getOptions);

app.listen(port, () => {
  console.log(`API iniciada en http://localhost:${port}`);
});