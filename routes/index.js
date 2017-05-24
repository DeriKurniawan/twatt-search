const express = require('express');
const router = express.Router();
const controller = require('../controller/twitter-search')

router.get('/:search', controller.getOauth);

module.exports = router;
