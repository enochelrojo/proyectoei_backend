var express = require('express');
var router = express.Router();
var controlador = require('../app/controlador');

/* Listar todos los cursos */
router.get('/', controlador.getCurso);
router.post('/', controlador.setCurso);

module.exports = router;
