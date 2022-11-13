const { Schema, model } = require('mongoose');

const BarSchema = Schema({
    Nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    Descripción: {
        type: String,
        required: [true, 'La descripción es obligatoria'],
        
    },
});

module.exports = model( 'Bar', BarSchema );