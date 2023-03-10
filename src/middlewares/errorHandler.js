const { HTTPError } = require('../utils/errors');

const errorHandler = (err, req, res, next) => {
  if (err instanceof HTTPError) {
    res.status(err.status).json({ message: err.message, success: false });
    next();
  }
  else res.status(500).json({ message: err, success: false });
  console.log(err)
  next();
};

module.exports = { errorHandler };
