const axios = require("axios");
const datosJson = require("../public/misc/test.json");
const { default: i18next } = require("i18next");

module.exports = {
  get: (req, res) => {
    res.render("index", {
      message: req.t("message"),
    });
  },
};
