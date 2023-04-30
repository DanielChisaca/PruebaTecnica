const jwt = require('jsonwebtoken');
const secret = 'mysecretkey'; // Clave secreta para firmar los tokens JWT

// Genera un token JWT con el payload especificado
function generateToken(payload) {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
}

// Verifica si el token JWT es válido y decodifica su payload
function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (err) {
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
