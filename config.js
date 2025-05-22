
// ------- Configuración del entorno de ejecución -------


/*
 Para desplegar en servidor HTTPS incluir a continuación las rutas de los certificados SSL. 
 En su defecto (cadena vacía), la aplicación se despliega en un entorno HTTP.
*/

const ssl = {
  cert: "", // Ej: "/etc/letsencrypt/live/mydomain.com/fullchain.pem"
  key: "", // Ej: "/etc/letsencrypt/live/mydomain.com/privkey.pem"
};

/*
 Configurar la ruta de la API de credentials event services para las solicitudes GET y POST
*/

const ces = "https://ces-main.lab.gaia-x.eu/credentials-events";


module.exports = { ssl, ces };
