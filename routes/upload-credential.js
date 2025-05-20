var express = require("express");
var router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/', fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('application/json')) {
        cb(null, true);
    } else {
        cb(new Error('Solo se admiten ficheros JSON.'), false);
    }
} });

const controller = require("../controllers/upload-credential-controller");

router.get("/", controller.get);
router.post("/", upload.single('credential'), controller.post);

module.exports = router;
