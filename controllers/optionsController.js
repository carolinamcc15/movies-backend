const Option = require('../models/options');

const getOptions = async (req, res) => {
  try {
    const options = await Option.findAll();
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las opciones' });
  }
};

module.exports = {
  getOptions,
};