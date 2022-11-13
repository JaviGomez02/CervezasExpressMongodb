const db = require('../models/db')
const Cerveza = require('../models/cerveza');


function getBeers(req, res){
    const items=db.cervezas.find()
    res.json(items)
}

function getBeer(req, res){
    const id = req.params.id
    const item=db.cervezas.find({ _id: id})
    res.json(item)
}

//function addBeer(req, res){
//db.cervezas.save(req.body);
//    res.json(req.body)   
//}
async function addBeer(req = request, res = response) {
    // Obtenemos los datos del body, pero usamos la desestructuración de objetos para obtener solo los que nos interesan
    const { Nombre, Descripción, Graduación, Envase, Precio } = req.body;
    // Crearmos el objeto cerveza con el modelo importado
    const cerveza = new Cerveza({ Nombre, Descripción, Graduación, Envase, Precio });
    // Guardar en BD
    await cerveza.save();
    res.json({
        cerveza
    });
}
function deleteBeer(req, res){
    const id = req.params.id
    db.cervezas.remove({_id: id})
    res.json({mensaje: "Elemento borrado"})
}

function editBeer(req, res){
    const id = req.params.id
    db.cervezas.update({_id:id}, req.body)
    res.json(req.body)
}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer}