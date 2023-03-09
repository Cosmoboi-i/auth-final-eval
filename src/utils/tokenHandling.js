const jwt = require('jsonwebtoken');

const generateToken = (email) => jwt.sign({ email }, 'foobar', { expiresIn: '1h' });

const verifyToken = (token) => jwt.verify(token, 'foobar');

module.exports = {
  generateToken,
  verifyToken,
};
