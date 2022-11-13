const express = require('express')
const app = express()
require('dotenv').config();
const {dbConnection}=require('./database/config')

// DATABASE CONNECTION

async function connectAtlas(){
    await dbConnection()
}
connectAtlas()

require('./models/db');


const cervezas = require('./routes/cervezas')
const bares = require('./routes/bares')
const usuarios=require('./routes/usuarios')

//MIDDLEWARE
app.use(express.json())

//ROUTES
app.use('/cervezas', cervezas)
app.use('/bares',bares)
app.use('/usuarios',usuarios)

app.listen(process.env.PORT)