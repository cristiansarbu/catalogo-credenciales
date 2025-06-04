# Catálogo Credential Events Gaia-X
Proyecto con NodeJS y Express.js que utilizando Pug renderiza varias páginas en el servidor para interaccionar con la API de Credentials Event Services de Gaia-X.

## Funcionalidades:
- Obtener credenciales de la API credentials-events-service con paginación y mostrar detalles.
- Permitir la visualización de la credencial completa en formato .json.
- Obtener credencial por su ID mediante un formulario.
- Subir credencial mediante la API credentials-events-service.

## Rutas:
#### GET

<details>
 <summary><code>GET</code> <code><b>/</b></code> <code>(Muestra la página principal)</code></summary>

##### Parameters

> None

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | HTML string                                                         |


</details>

<details>
 <summary><code>GET</code> <code><b>/credentials</b></code> <code>(Muestra la página con credenciales paginadas)</code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `page` |  optional | int ($int64)   | Número de la página de credenciales empezando desde 0. Predeterminado: 0        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | HTML string                                                         |

##### Page Rendered Errors

> | http code     | message                      | meaning                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `-`         | Enlace incorrecto        | El parámetro de página insertado es incorrecto.   
> | `404`         | Error 404        | La API no ha encontrado la página solicitada.  



</details>

<details>
 <summary><code>GET</code> <code><b>/credential-by-id/{id}</b></code> <code>(Muestra la página con la credencial elegida o, en su defecto, el formulario de búsqueda de credenciales)</code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `{id}` |  required | string   | UUID de la credencial a buscar        |
> | `detailed` |  optional | string   | Indicador de vista completa de la credencial (muestra el JSON completo): `true`        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | HTML string                                                         |

##### Page Rendered Errors

> | http code     | message                      | meaning                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `-`         | Formato incorrecto. La credencial de la ruta debe tener formato UUID.        | El parámetro de ruta de la credencial es inválido.   
> | `-`         | Enlace incorrecto        | El parámetro de consulta `detailed`es inválido 

</details>

<details>
 <summary><code>GET</code> <code><b>/upload-credential</b></code> <code>(Muestra el formulario de subida de credenciales)</code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   | UUID de la credencial a buscar        |

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | HTML string                                                         |

##### Page Rendered Errors

> | http code     | message                      | meaning                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `-`         | Formato incorrecto. La credencial de la ruta debe tener formato UUID.        | El parámetro de ruta de la credencial es inválido.   
> | `-`         | Enlace incorrecto        | El parámetro de consulta `detailed`es inválido 

</details>

#### POST

<details>
 <summary><code>POST</code> <code><b>/credential-by-id/{id}</b></code> <code>(Redirecciona a la página de la credencial buscada, utilizado para el formulario de búsqueda)</code></summary>

##### Parameters

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `id` |  required | string   | UUID de la credencial a buscar    

##### Request Body

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `uuid` |  x-www-form-urlencoded | string   | UUID de la credencial a buscar 

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | HTML string                                                         |

##### Page Rendered Errors

> | http code     | message                      | meaning                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `404`         | Error 404        | Error de la api CES.
> | `-`         | Formato incorrecto. La credencial debe tener formato UUID.        | El formato de la UUID de la credencial es inválido.

</details>

<details>
 <summary><code>POST</code> <code><b>/upload-credential</b></code> <code>(Envia una solicitud de subida a la API de CES con la credencial)</code></summary>

##### Parameters

> None

##### Request Body

> | name              |  type     | data type      | description                         |
> |-------------------|-----------|----------------|-------------------------------------|
> | `credential` |  form-data | file (JSON)   | Credencial en formato `.json` 

##### Responses

> | http code     | content-type                      | response                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `200`         | `text/plain;charset=UTF-8`        | HTML string                                                         |

##### Page Rendered Errors

> | http code     | message                      | meaning                                                            |
> |---------------|-----------------------------------|---------------------------------------------------------------------|
> | `400`         | Event format incorrect        | Error interno del CES por formato incorrecto.   
> | `409`         | Event data signatura invalid or invalid issuer        | Error interno del CES por validez de la credencial.
> | `500`         | Technical error        | Error interno del CES.
> | `-`         | La credencial debe contener el campo data_base64 con el JSON Web Token        | Falta el campo data_base64 o se ha seleccionado como tipo Loire y se ha subido una credencial Tagus.
> | `-`         | Solo se admiten ficheros JSON       | Se ha subido un archivo de tipo diferente a JSON.

</details>

## Configuración:

El archivo `config.js` contiene la configuración para el certificado SSL y la ruta de la API de Credentials Event Service. La aplicación 
por defecto se despliega en un entorno HTTP, pero automáticamente cambia a HTTPS si se encuentran los archivos del certificado en el
directorio `/certs` de la aplicación.

En el directorio `/certs`, se deben incluir los dos archivos siguientes:
`fullchain.pem` (cadena del certificado entera, o concatenación de cert.pem y chain.pem) y `privkey.pem` (clave privada del certificado)

## Despliegue en Docker:

Para desplegar la aplicación con Docker, utilizar los siguientes comandos:
```sh
docker pull ghcr.io/cristiansarbu/catalogo-credenciales-ces:1.0.0

docker run --name catalogo-credenciales -p 443:443 -p 80:80 -d -v <DIRECTORIO QUE CONTIENE EL CERTIFICADO SSL>:/app/certs ghcr.io/cristiansarbu/catalogo-credenciales-ces:1.0.0
```

El comando de ejecución arranca el contenedor con los puertos 443 y 80 asignados, separado de la línea de comandos y con el directorio del certificado SSL del usuario asignado como volumen.

## Dependencias principales:
- express-validator 7.2.1 -> Validación y sanitización de los formularios, las query parameters y las route parameters.
- AxiosHTTP 1.8.4 -> Realización de solicitudes GET y POST a la API de credentials-events.
- Multer 2.0.0 -> Tratamiento del formulario y la subida de credenciales.
- Pug.js 2.0.0 -> Renderizado server-side de las vistas.
