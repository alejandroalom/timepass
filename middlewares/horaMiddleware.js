module.exports = (req, res, next) => {
    const now = new Date()
    const horaActual = now.getHours()
    const minutosActual = now.getMinutes()
    const horaTotal = `${horaActual}:${minutosActual}`  
   
    req.horaTotal = horaTotal
    req.horaActual = horaActual
    next()
  }