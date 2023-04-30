const validUsers = [
  { username: "user1", password: "pass1" },
  { username: "user2", password: "pass2" },
  { username: "user3", password: "pass3" },
];

exports.authenticateUser = (req, res) => {
  const { username, password } = req.body;

  // Buscamos el usuario y comprobamos si la contraseña es correcta
  const user = validUsers.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    // Si no encontramos el usuario o la contraseña es incorrecta, devolvemos un error 401 Unauthorized
    res.status(401).json({ error: "Credenciales inválidas" });
  } else {
    // Si las credenciales son correctas, generamos un token y lo devolvemos en la respuesta
    const token = generateToken(user);
    res.json({ token });
  }
};

const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = { username: user.username };
  const secretKey = "mysecretkey";
  const token = jwt.sign(payload, secretKey);
  return token;
}


