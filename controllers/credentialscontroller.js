const axios = require("axios");
const datosJson = require("../public/misc/test.json");
const { validationResult } = require("express-validator");

module.exports = {
  get: (req, res) => {
    const errorsQueryParam = validationResult(req);
    if (errorsQueryParam.isEmpty()) {
      // Recoger parámetros de query (/credentials?page=1)
      const datosParams = req.query;

      // Validar la página y devolver página = 0 como default
      if (parseInt(datosParams.page)) {
        datosParams.page = parseInt(datosParams.page);
      } else {
        datosParams.page = 0;
      }

      // Solicitud a API de Gaia
      axios
        .get("https://ces-main.lab.gaia-x.eu/credentials-events", {
          params: {
            page: datosParams.page,
            size: 20,
            type: "eu.gaia-x.credential",
          },
        })
        .then((response) => {
          const datosJson = response.data;
          res.render("credentials", { datosJson, datosParams });
        })
        .catch((error) => {
          res.render("error", { error });
        });
    } else {
      const errorMsg = errorsQueryParam.errors[0].msg;
      res.render("error", { errorMsg });
    }
  },
};
