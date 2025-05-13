const axios = require("axios");
const datosJson = require("../public/misc/test.json")

module.exports = {
  get: (req, res) => {
    // axios
    //   .get(
    //     "https://ces-main.lab.gaia-x.eu/credentials-events?page=0&size=20&type=eu.gaia-x.credential"
    //   )
    //   .then((response) => {
    //     // const datos = JSON.stringify(response.data);
    //     const datosJson = response.data;
    //     res.render("index", { datosJson });
    //   })
    //   .catch((error) => {
    //     res.send("Error fetching data: " + error);
    //   });

    // Pruebas con json local "/public/misc/test.json" para ahorrar solicitudes a API real
    res.render("index", { datosJson })
  },
};
