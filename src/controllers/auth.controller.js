const authService = require('../services/auth.service.js');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body; // config
    const token = await authService.login(email, password); // config
    res.status(201).json({ token, success: true });
  } catch (e) {
    next(e);
  }
};

const register = async (req, res, next) => {
  try {
    const { email, password } = req.body; // config
    const user = await authService.register(email, password); // config
    res.status(201).json({ user, success: true });
  } catch (e) {
    next(e);
  }
};

const validate = async (req, res, next) => {
  try {
    console.log(req.headers)
    const token = req.headers.authorization?.split(' ')[1];
    const result = await authService.validate(token);
    res.status(200).json({ user: result, success: true });
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
  register,
  validate,
};