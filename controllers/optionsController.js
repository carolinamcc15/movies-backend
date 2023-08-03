const optionsService = require('../services/optionsService');

const getOptions = async (_req, res) => {
  try {
    const options = await optionsService.getOptions();
    res.json(options);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const toggleOptionDisabled = async (req, res) => {
  const optionId = req.params.id;

  try {
    const result = await optionsService.toggleOptionDisabled(optionId);

    if (result === null) {
      res.status(404).json({ error: 'The resource was not found' });
    } else {
      res.status(200).json(result);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getOptions,
  toggleOptionDisabled,
};
