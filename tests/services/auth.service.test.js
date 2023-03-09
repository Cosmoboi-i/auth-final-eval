const authService = require('../../src/services/auth.service.js');
const { User } = require('../../src/models');
const mockData = require('../__mocks__/mockData.service.js');
const redisClient = require('../../src/utils/redisClient');

describe('Login', () => {
  it('should return a token when correct username and password are passed', async () => {
    const mock = mockData.login;
    jest.spyOn(User, 'findOne').mockResolvedValue(mock.user);
    jest.spyOn(redisClient, 'storeToken');

    const matchPass = jest.fn().mockResolvedValue(true);
    const generateToken = jest.fn().mockReturnValue('token');

    await authService.login('username', 'password');

    expect(matchPass).toHaveBeenCalledWith('password', user.dataValues.password);
    expect(generateToken).toHaveBeenCalledWith('username');
  });
});