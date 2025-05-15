const axios = require("axios");
const { validationResult } = require('express-validator');
const datosJson = require("../public/misc/test.json")

module.exports = {
  get: (req, res) => {
    // Recibe: /credential-by-id/{id}?detailed={true} -> Route parameter y query parameter
    const queryParameters = req.query;
    if (req.params.id) {
        // Axios no permite hacer solicitudes con route param dinámico -> crear el enlace de la query manualmente
        const requestUrl = `https://ces-main.lab.gaia-x.eu/credentials-events/${req.params.id}`
        axios
              .get(requestUrl)
              .then((response) => {
                const datosJson = response.data;

                if (queryParameters.detailed == 'true') {
                  res.json(datosJson);
                } else {
                  res.render("credential-by-id/credential-by-id", { datosJson });
                }
              })
              .catch((error) => {
                res.render("error", { error });
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
