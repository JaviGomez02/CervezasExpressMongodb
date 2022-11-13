const db = require('../models/db');
const Bar = require('../models/bar');

function getBares(req, res){
    const bares=db.bares.find()
    res.json(bares)
}

function getBar(req, res){
    const id = req.params.id
    const item=db.bares.find({ _id: id})
    res.json(item)
}

// function addBar(req, res){
//     db.bares.save(req.body)
//     res.json(req.body)   
// }

async function addBar(req = request, res = response) {
    // Obtenemos los datos del body, pero usamos la desestructuración de objetos para obtener solo los que nos interesan
    const { Nombre, Descripción } = req.body;
    // Crearmos el objeto cerveza con el modelo importado
    const bar = new Bar({ Nombre, Descripción, Graduación, Envase, Precio });
    // Guardar en BD
    await bar.save();
    res.json({
        bar
    });
}

function deleteBar(req, res){
    const id = req.params.id
    db.bares.remove({_id: id})
    res.json({mensaje: "Elemento borrado"})
}

function editBar(req, res){
    const id = req.params.id
    db.bares.update({_id:id}, req.body)
    res.json(req.body)
}

module.exports = { getBares, getBar, addBar, deleteBar, editBar}