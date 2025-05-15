const axios = require("axios");
const datosJson = require("../public/misc/test.json");

module.exports = {
  get: (req, res) => {
    const datosParams = req.query;
    if (datosParams.page) {
      datosParams.page = parseInt(datosParams.page);
    } else {
      datosParams.page = 0
    }

    axios
      .get("https://ces-main.lab.gaia-x.eu/credentials-events", {
        params: {
            page: datosParams.page,
            size: 20,
            type: 'eu.gaia-x.credential'
        }
      })
      .then((response) => {
        const datosJson = response.data;
        res.render("credentials", { datosJson, datosParams });
      })
      .catch((error) => {
        res.render("error", { error });
      });
  },
};
