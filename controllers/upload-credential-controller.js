const axios = require("axios");
const fs = require("fs");

module.exports = {
  get: (req, res) => {
    res.render("upload-credential");
  },
  post: (req, res) => {
    // Leer y obtener un objeto a partir del fichero de la credencial subido
    fs.readFile(req.file.path, function (err, data) {
      if (err) {
        const error = err;
        res.render("error", { error });
      }
      let credencial = JSON.parse(data);
      // Enviar la solicitud POST de tipo json a la api CES con la credencial
      axios
        .post("https://ces-main.lab.gaia-x.eu/credentials-events", credencial, {
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
    });
  },
};
