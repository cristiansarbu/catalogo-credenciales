const { body } = require('express-validator');

// Escapar el input para prevenir que el usuario inserte elementos HTML
const credentialSearchValidator = [
    body('uuid', 'error').escape()
]

module.exports = credentialSearchValidator;