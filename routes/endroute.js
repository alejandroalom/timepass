const express = require('express');
const router = express.Router();
const validarHora = require('../middlewares/validarHora');

router.get('/', validarHora, (req, res) => {
  res.send('<h1>¡Bienvenido a la ruta final!</h1>');
});

module.exports = router;
