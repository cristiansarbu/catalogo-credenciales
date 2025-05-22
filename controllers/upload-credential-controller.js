const axios = require("axios");
const fs = require("fs");
const { ces } = require("../config");

module.exports = {
  get: (req, res) => {
    res.render("upload-credential");
  },
  post: (req, res) => {
    // Leer y obtener objeto a partir del fichero de la credencial
    fs.readFile(req.file.path, function (err, data) {
      if (err) {
        const error = err;
        res.render("error", { error });
      }
      let credencial = JSON.parse(data);

      // Enviar la solicitud POST de tipo json a la api CES con la credencial
      axios
        .post(ces, credencial, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .catch((error) => {
          const errorMsg = error.response.data.message
            ? error.response.data.message
            : "Intentalo más tarde.";
          res.render("error", { error, errorMsg });
        });

      // Eliminar el archivo  
      fs.unlink(req.file.path, (err) => {
        if (err) {
          const error = err;
          res.render("error", { error });
        }
      })
    });
  },
};
