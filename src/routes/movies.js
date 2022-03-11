const express = require('express');
const router = express.Router();

const MovieController = require('../app/controllers/MovieController');

router.get('/:slug', MovieController.show);

module.exports = router;
