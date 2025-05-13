const axios = require("axios");
const datosJson = require("../public/misc/test.json");

module.exports = {
  get: (req, res) => {
    const datosParams = req.query;
    datosParams.page = parseInt(datosParams.page);

    const config = {
        params: {
            page: '1',
            size: '5',
            type: 'eu.gaia-x.credential'
        }
    }

    axios
      .get("https://ces-main.lab.gaia-x.eu/credentials-events", config)
      .then((response) => {
        // const datos = JSON.stringify(response.data);
        const datosJson = response.data;
        res.render("index", { datosJson, datosParams });
      })
      .catch((error) => {
        res.send("Error fetching data: " + error);
      });

    // Pruebas con json local "/public/misc/test.json" para ahorrar solicitudes a API real
    // res.render("credentials", { datosJson, datosParams })
  },
};
