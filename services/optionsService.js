const Option = require('../models/options');

const getOptions = async () => {
  try {
    const options = await Option.findAll({
      order: [['id', 'ASC']],
    });
    return options;
  } catch (error) {
    throw new Error('Error getting options');
  }
};

const toggleOptionDisabled = async optionId => {
  try {
    const foundOption = await Option.findByPk(optionId);

    if (!foundOption) {
      return null;
    }

    foundOption.disabled = !foundOption.disabled;
    await foundOption.save();

    return { message: 'Disabled value updated' };
  } catch (err) {
    throw new Error('Error updating disabled value');
  }
};

module.exports = {
  getOptions,
  toggleOptionDisabled,
};
