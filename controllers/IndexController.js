const axios = require("axios");

module.exports = {
  get: (req, res) => {
    axios
      .get(
        "https://ces-main.lab.gaia-x.eu/credentials-events?page=0&size=20&type=eu.gaia-x.credential"
      )
      .then((response) => {
        // const datos = JSON.stringify(response.data);
        const datosJson = response.data;
        res.render("index", { datosJson });
      })
      .catch((error) => {
        res.send("Error fetching data: " + error);
      });
  },
};
