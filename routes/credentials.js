var express = require("express");
var router = express.Router();
const { credentialsPageQueryParamValidator } = require('../validation/validators');

const controller = require("../controllers/credentialscontroller");

router.get("/", credentialsPageQueryParamValidator, controller.get);

module.exports = router;
