const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
  const token = req.body.token || req.param('token') || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, process.env.SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          status: 403,
          message: 'Failed to authenticate token.'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else if (req.originalUrl === '/login') {
    next();
  } else {
    return res.status(403).json({
      status: 403,
      message: 'No token provided.'
    });

  }
};