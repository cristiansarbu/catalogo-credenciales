# Catálogo Credential Events Gaia-X
Proyecto con NodeJS y Express.js que utilizando Pug renderiza varias páginas en el servidor para interaccionar con la API de Credentials Event Services de Gaia-X.

## Funcionalidades:
- Obtener credenciales de la API credentials-events-service con paginación y mostrar detalles.
- Permitir la visualización de la credencial completa en formato .json.
- Obtener credencial por su ID mediante un formulario.
- Subir credencial mediante la API credentials-events-service.

## Rutas:
```
GET   /                          Muestra página principal
GET   /credentials               Muestra página con credenciales. Elementos paginados con el parámetro
                                 opcional '?page=x'.
GET   /credential-by-id/(:id)    Muestra página con la credencial del parámetro. Si no recibe el parámetro,
                                 muestra el formulario de búsqueda. Si recibe el parámetro '?detailed=true'
                                 muestra la credencial completa en formato JSON.    
GET   /upload-credential         Muestra página con el formulario para subir credenciales

POST  /credential-by-id          Redirecciona a la página de la credencial buscada. (Se utiliza para el formulario de búsqueda)
POST  /upload-credential         Envía la credencial .json a la API de credentials-events
```

## Configuración:

El archivo config.js contiene la configuración para el certificado SSL y la ruta de la API de Credentials Event Service. La aplicación 
por defecto se despliega en un entorno HTTP, pero automáticamente cambia a HTTPS si se encuentran los archivos del certificado en el
directorio /certs de la aplicación. 

## Despliegue en Docker:

Para desplegar la aplicación con Docker, utilizar los siguientes comandos:
```
docker pull ghcr.io/cristiansarbu/catalogo-credenciales-ces:1.0.0

docker run --name catalogo-credenciales -p 443:443 -p 80:80 -d -v [DIRECTORIO QUE CONTIENE EL CERTIFICADO SSL]:/app/certs ghcr.io/cristiansarbu/catalogo-credenciales-ces:1.0.0
```

## Dependencias principales:
- express-validator 7.2.1 -> Validación y sanitización de los formularios, las query parameters y las route parameters.
- AxiosHTTP 1.8.4 -> Realización de solicitudes GET y POST a la API de credentials-events.
- Multer 2.0.0 -> Tratamiento del formulario y la subida de credenciales.
- Pug.js 2.0.0 -> Renderizado server-side de las vistas.
