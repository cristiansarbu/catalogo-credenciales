var express = require('express');
var router = express.Router();

const controller = require('../controllers/language-controller');

router.get('/', controller.get);

module.exports = router;
