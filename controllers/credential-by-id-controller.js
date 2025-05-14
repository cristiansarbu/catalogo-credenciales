const axios = require("axios");
const { validationResult } = require('express-validator');
const datosJson = require("../public/misc/test.json")

module.exports = {
  get: (req, res) => {
    if (req.params.id) {
        // Axios no permite hacer solicitudes con route param dinámico -> crear el enlace de la query manualmente
        const requestUrl = `https://ces-main.lab.gaia-x.eu/credentials-events/${req.params.id}`
        axios
              .get(requestUrl)
              .then((response) => {
                const datosJson = response.data;
                res.render("credential-by-id/credential-by-id", { datosJson });
              })
              .catch((error) => {
                res.send("Error fetching data: " + error);
              });
    } else {
        res.render("credential-by-id/credential-search")
    } 
  },
  post: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        // req.body.uuid = uuid que se busca
        console.log(req.body.uuid);
        res.redirect(`/credential-by-id/${req.body.uuid}`);
    }
  }
};
