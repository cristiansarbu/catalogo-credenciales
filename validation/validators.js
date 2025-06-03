const { body, param, query } = require('express-validator');

// Validación y sanitización para el formulario de búsqueda de credenciales por ID
// Escapar el input para prevenir la inserción de elementos HTML y recortar espacios al principio y final.
const credentialSearchFormValidator = [
    body('uuid', 'Formato incorrecto. La credencial debe tener formato UUID.').trim().isUUID().escape()
]

// Validación y sanitización para el parámetro ID de la ruta /credential-by-id/{id} y query parameter ?detailed=true 
const credentialRouteParamQueryParamValidator = [
    param('id', 'Formato incorrecto. La credencial de la ruta debe tener formato UUID.').optional().trim().isUUID().escape(),
    query('detailed', 'Enlace incorrecto.').optional().trim().isIn(['true']).escape()
]


const credentialsPageQueryParamValidator = [
    query('page', 'Enlace incorrecto.').optional().trim().isNumeric().escape(),
    query('type', 'Tipo incorrecto').optional().trim().isString().escape()
]

module.exports = { credentialSearchFormValidator, credentialRouteParamQueryParamValidator, credentialsPageQueryParamValidator }