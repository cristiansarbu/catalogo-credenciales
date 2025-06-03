const axios = require("axios");
const datosJson = require("../public/misc/test.json");
const { validationResult } = require("express-validator");
const { ces, cesv2 } = require("../config");
const { criteria } = require("../public/misc/criteria");

module.exports = {
  get: (req, res) => {
    // Validar query param
    const errorsQueryParam = validationResult(req);
    if (errorsQueryParam.isEmpty()) {
      // Recoger query param (/credentials?page=1&type=tagus)
      const datosParams = req.query;

      // Devolver página como int o 0 como default si no existe
      if (parseInt(datosParams.page)) {
        datosParams.page = parseInt(datosParams.page);
      } else {
        datosParams.page = 0;
      }

      // Solicitud a API de CES (v1 o v2 según query parameter)
      axios
        .get(datosParams.type != "loire" ? ces : cesv2, {
          params: {
            page: datosParams.page,
            size: 20,
            type: "eu.gaia-x.credential",
          },
        })
        .then((response) => {
          const datosJson = response.data;
          res.render("credentials", { datosJson, datosParams, criteria });
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
