const bcrypt = require('bcrypt');

const salt = 10;

const hashPass = async pass => {
  const hash = await bcrypt.hash(pass, salt);
  return hash;
};

const matchPass = async (pass, hash) => {
  const match = await bcrypt.compare(pass, hash);
  if (match) return true;
  else return false;
};

module.exports = { hashPass, matchPass };
