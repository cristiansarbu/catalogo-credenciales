const { body } = require('express-validator');


const credentialSearchValidator = [
    body('uuid', 'El id de la credencial debe ser un valor alfanumérico.').escape()
]

module.exports = credentialSearchValidator;