const oauthModel = require('../utils/oauthModel');

exports.authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  console.log(authHeader);
  if (!authHeader) {
    return res.status(401).json({ error: 'No se proporcionó un token de acceso' });
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No se proporcionó un token de acceso' });
  }

  
    // Si el token es válido, se agrega el usuario al objeto de solicitud
    req.user = token.user;
    next();
};
