const Option = require('../models/options');

const getOptions = async (req, res) => {
  try {
    const options = await Option.findAll({
      order: [['id', 'ASC']],
    });
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las opciones' });
  }
};

const toggleOptionDisabled = async (req, res) => {
  const optionId = req.params.id;

  try {
    const foundOption = await Option.findByPk(optionId);

    if (!foundOption) {
      res.status(404).json({ error: 'The resource was not found' });
    }

    foundOption.disabled = !foundOption.disabled;
    await foundOption.save();

    res.json({ message: 'Disabled value updated' });
  } catch (err) {
    res.status(500);
  }
};

module.exports = {
  getOptions,
  toggleOptionDisabled,
};
