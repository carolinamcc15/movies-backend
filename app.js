const express = require('express');
var cors = require('cors');
require('dotenv').config();

const moviesRoutes = require('./routes/moviesRoutes');
const optionsRoutes = require('./routes/optionsRoutes');

const corsOpts = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT'],
  allowedHeaders: ['Content-Type'],
};

const app = express();
app.use(cors(corsOpts));
app.use(express.json());

// API routes
app.use('/api/movies', moviesRoutes);
app.use('/api/options', optionsRoutes);

module.exports = app;