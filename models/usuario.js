const { Schema, model } = require('mongoose');

const UsuarioSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    Apellidos: {
        type: String,
        required: [true, 'Los Apellidos es obligatorio'],       
    },
    Nick: {
        type: String,
        required: [true, 'El Nick es obligatorio'],
    },
    Email: {
        type: String,
        required: [true, 'El Email es obligatorio'],
    },
    Contrasena: {
        type: String,
        required: [true, 'La contrasena es obligatoria'],
    },
});



module.exports = model( 'Usuario', UsuarioSchema );