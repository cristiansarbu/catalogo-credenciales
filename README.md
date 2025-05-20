# Catálogo Credential Events Gaia-X

## Funcionalidades:
- Obtener credenciales de la API credentials-events-service con paginación y mostrar detalles.
- Permitir la visualización de la credencial completa en formato .json.
- Obtener credencial por su ID mediante un formulario.
- Subir credencial mediante la API credentials-events-service.

## Rutas:
```
GET   /                          Muestra página principal
GET   /credentials               Muestra página con credenciales
GET   /credential-by-id/(:id)    Muestra página con la credencial del parámetro. Si no recibe el parámetro, muestra el formulario de búsqueda
GET   /upload-credential         Muestra página con el formulario para subir credenciales

POST  /credential-by-id          Redirecciona a la página de la credencial buscada. (Se utiliza para el formulario de búsqueda)
POST  /upload-credential         Envía la credencial .json a la API de credentials-events
```
