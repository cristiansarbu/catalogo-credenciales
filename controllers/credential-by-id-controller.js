const axios = require("axios");
const { validationResult } = require("express-validator");
const { ces } = require("../config");

module.exports = {
  // Recibe: /credential-by-id/{id}?detailed={true} -> Route parameter y query parameter
  get: (req, res) => {
    const queryParameters = req.query;
    // Devolver página de la credencial si hay parámetro de credencial, si no devolver página con form de búsqueda
    if (req.params.id) {
      const errorsRouteParameters = validationResult(req);
      if (errorsRouteParameters.isEmpty()) {
        // Solicitud Axios a la API de CES
        const requestUrl = ces + `/${req.params.id}`;
        axios
          .get(requestUrl)
          .then((response) => {
            const datosJson = response.data;

            if (queryParameters.detailed == "true") {
              res.json(datosJson);
            } else {
              res.render("credential-by-id/credential-by-id", { datosJson });
            }
          })
          .catch((error) => {
            res.render("error", { error });
          });
      } else {
        // Tratamiento de error en validación del route param
        const errorMsg = errorsRouteParameters.errors[0].msg;
        res.render("error", { errorMsg });
      }
    } else {
      res.render("credential-by-id/credential-search");
    }
  },
  post: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      // req.body.uuid = UUID de la credencial que se busca
      res.redirect(`/credential-by-id/${req.body.uuid}`);
    } else {
      const errorMsg = errors.errors[0].msg;
      res.render("error", { errorMsg });
    }
  },
};
