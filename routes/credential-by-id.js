var express = require("express");
var router = express.Router();
const controller = require("../controllers/credential-by-id-controller");
const { credentialSearchFormValidator, credentialRouteParamQueryParamValidator } = require('../validation/validators');

router.get("/:id?", credentialRouteParamQueryParamValidator, controller.get);
router.post("", credentialSearchFormValidator, controller.post)

module.exports = router;
