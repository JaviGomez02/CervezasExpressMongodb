const db = require('../models/db');
const Usuario = require('../models/usuario');




async function addUsuario(req = request, res = response) {
    // Obtenemos los datos del body, pero usamos la desestructuración de objetos para obtener solo los que nos interesan
    const { Nombre, Apellidos, Nick, Email, Contrasena } = req.body;
    // Crearmos el objeto cerveza con el modelo importado
    const usuario = new Usuario({ Nombre, Apellidos, Nick, Email, Contrasena });
    // Guardar en BD
    await usuario.save();
    res.json({
        usuario
    });
}



module.exports = {addUsuario}