const { body, param } = require('express-validator');

// Validación para el formulario de búsqueda de credenciales por ID
// Escapar el input para prevenir la inserción de elementos HTML y recortar espacios al principio y final.
const credentialSearchFormValidator = [
    body('uuid', 'Formato incorrecto. La credencial debe tener formato UUID.').trim().isUUID().escape()
]

// Validación para el parámetro ID de la ruta /credential-by-id/{id} con trim y escape
const credentialRouteParamValidator = [
    param('id', 'Formato incorrecto. La credencial de la ruta debe tener formato UUID.').optional().trim().isUUID().escape()
]

module.exports = { credentialSearchFormValidator, credentialRouteParamValidator }