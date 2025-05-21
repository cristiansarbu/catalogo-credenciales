var express = require("express");
var router = express.Router();
const { credentialsPageQueryParamValidator } = require('../validation/validators');

const controller = require("../controllers/credentials-controller");

router.get("/", credentialsPageQueryParamValidator, controller.get);

module.exports = router;
