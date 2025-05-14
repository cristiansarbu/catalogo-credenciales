const axios = require("axios");
const datosJson = require("../public/misc/test.json")

module.exports = {
  get: (req, res) => {
    res.render("index")
  },
};
