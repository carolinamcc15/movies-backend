const express = require('express');
const router = express.Router();

const optionsController = require('../controllers/optionsController');

router.get('/', optionsController.getOptions);

// For toggling the "disabled" status of an option
router.put('/:id/toggleDisabled', optionsController.toggleOptionDisabled);

module.exports = router;
