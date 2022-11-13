const express = require('express')
const router = express.Router()

const {addUsuario} = require('../controllers/usuarios')

router.post('/', addUsuario)



module.exports = router