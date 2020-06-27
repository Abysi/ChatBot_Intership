const { JsonWebTokenError } = require('jsonwebtoken');

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.header('authorization');
  const token = authHeader && authHeader.split(' ')[1];
  if (token === null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, err => {
    if (err) return res.status(403).send(err);
    next();
  });
};

module.exports = authenticateToken;
