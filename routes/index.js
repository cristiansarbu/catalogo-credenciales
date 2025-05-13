var express = require('express');
var router = express.Router();

const controller = require('../controllers/IndexController');

router.get('/', controller.get);

module.exports = router;
