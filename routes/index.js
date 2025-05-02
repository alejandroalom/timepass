const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const mensaje = req.query.mensaje || "";
  const hora = req.horaTotal || "desconocida";

  console.log(`Petición recibida a la ruta '/', hora: ${hora}`);

  res.json({
    title: "¡Bienvenido!",
    hora: hora,
    mensaje: mensaje,
    rutaFinal: "/endroute"
  });
});

module.exports = router;
