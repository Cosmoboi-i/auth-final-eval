const { createClient } = require('redis');
const dotenv = require('dotenv');

dotenv.config();

const host = process.env.REDIS_HOST;
const port = process.env.REDIS_PORT;
const exp = process.env.REDIS_EXP;

const client = createClient({ socket: { host, port } });

async function getRedisClient() {
  if (!client.isReady) {
    console.log('Connecting to redis...');
    await client.connect();
  }
  console.log(`Connected to redis at ${host}:${port}`);
  return client;
}

async function disconnectRedis() {
  if (client.isReady) {
    await client.disconnect();``
  }
}

async function storeToken(token) {
  const client = await getRedisClient();
  client.set(token, 1, 'EX', exp);
}

async function getToken(username) {
  const client = await getRedisClient();
  const token = await client.get(username);
  return token;
}

module.exports = {
  storeToken,
  getToken,
  disconnectRedis,
  getRedisClient,
};
