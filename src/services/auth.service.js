const { User } = require('../models');
const { BadInputError, UnAuthError } = require('../utils/errors');
const { hashPass, matchPass } = require('../utils/encryption');
const { generateToken } = require('../utils/tokenHandling');
const redisClient = require('../utils/redisClient');
const { verifyToken } = require('../utils/tokenHandling');

const login = async (email, password) => { // config
  const user = await User.findOne({ where: { email } });
  if (!user) throw new BadInputError('User not found');
  userData = user.dataValues;

  const match = await matchPass(password, userData.password);
  if (!match) throw new BadInputError('Incorrect password');

  const token = generateToken(email);
  await redisClient.storeToken(token);
  return token;
};

const register = async (email, password) => { // config
  const user = await User.findOne({ where: { email } });
  if (user) throw new BadInputError('User already exists');

  const hashedPassword = await hashPass(password);
  const newUser = await User.create({ email, password: hashedPassword }); // config
  return newUser;
};

const validate = async (token) => {
  if (!token) throw new UnAuthError('Sign in to continue');

  const result = verifyToken(token);
  console.log(result);
  const isTokenPresent = await redisClient.getToken(token);
  if (!isTokenPresent) throw new UnAuthError('Invalid token');

  const user = await User.findOne({ where: { email: result.email } });
  if (!user) throw new UnAuthError('User not found');

  return user;
};

module.exports = {
  login,
  register,
  validate,
};
