const hora = 21

module.exports = (req, res, next) => {
  if(req.horaActual < hora) {
    res.locals.mensaje = `Aún no es la hora, espera hasta las ${hora}:00 para entrar`;
    return res.redirect('/?mensaje=' + encodeURIComponent(res.locals.mensaje));
  }

  next()
}