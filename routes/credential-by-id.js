var express = require("express");
var router = express.Router();
const credentialSearchValidator = require('../validation/validators')

const controller = require("../controllers/credential-by-id-controller");

router.get("/:id?", controller.get);
router.post("", credentialSearchValidator, controller.post)

module.exports = router;
