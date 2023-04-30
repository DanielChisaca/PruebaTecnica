const jwt = require('jsonwebtoken');

const model = {
  // Define la clave secreta que se usará para firmar los tokens JWT
  jwtSecret: 'secreto',

  // Función para generar un token JWT a partir del username del usuario
  generateToken: function(username) {
    return jwt.sign({ username }, this.jwtSecret, { expiresIn: '1h' });
  },

  // Función para verificar si un token JWT es válido y extraer el username del usuario
  verifyToken: function(token) {
    try {
      const decodedToken = jwt.verify(token, this.jwtSecret);
      return decodedToken.username;
    } catch (err) {
      return err;
    }
  },  

  // Función para verificar si las credenciales de usuario son válidas
  checkUserCredentials: function(req, res, next) {
    const { username, password } = req.body;

    // Comprobar que se han enviado username y password
    if (!username || !password) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Comprobar que el usuario y la contraseña son correctos
    if (username !== 'usuario' || password !== 'contraseña') {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Si las credenciales son válidas, continuar con la siguiente función de middleware
    next();
  }
};

module.exports = model;
