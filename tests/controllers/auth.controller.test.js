const authController = require('../../src/controllers/auth.controller.js');
const authService = require('../../src/services/auth.service.js');
const mockData = require('../__mocks__/mockData.controller'); //

describe('Auth Controller', () => {
  describe('login', () => {

    it('should return a token when received correct username and password in request body', async () => {
      const mock = mockData.login;
      jest.spyOn(authService, 'login').mockResolvedValue('token');

      await authController.login(mock.req, mock.res, mock.next);

      expect(mock.res.status).toBeCalledWith(201);
      expect(mock.res.json).toBeCalledWith({ token: 'token', success: true })

    });

    it('should throw an error when received incorrect username and password in request body', async () => {
      const mock = mockData.login;
      jest.spyOn(authService, 'login').mockRejectedValue('error');

      await authController.login(mock.req, mock.res, mock.next);

      expect(mock.next).toBeCalledWith('error');
    });
  });

  describe('Register', () => {

    it('should return a user object when received correct username and password in request body', async () => {
      const mock = mockData.register;
      jest.spyOn(authService, 'register').mockResolvedValue(mock.user);

      await authController.register(mock.req, mock.res, mock.next);

      expect(mock.res.status).toBeCalledWith(201);
      expect(mock.res.json).toBeCalledWith({ user: mock.user, success: true })

    });

    it('should throw an error when received incorrect username and password in request body', async () => {
      const mock = mockData.register;
      jest.spyOn(authService, 'register').mockRejectedValue('error');

      await authController.register(mock.req, mock.res, mock.next);

      expect(mock.next).toBeCalledWith('error');
    });

  });

  describe('Validate', () => {

    it('should return a user object when received correct token in request header', async () => {
      const mock = mockData.validate;
      jest.spyOn(authService, 'validate').mockResolvedValue(mock.result);

      await authController.validate(mock.req, mock.res, mock.next);

      expect(mock.res.status).toBeCalledWith(200);
      expect(mock.res.json).toBeCalledWith({ user: mock.result, success: true });
    });

    it('should throw an error when received incorrect token in request header', async () => {
      const mock = mockData.validate;
      jest.spyOn(authService, 'validate').mockRejectedValue('error');

      await authController.validate(mock.req, mock.res, mock.next);

      expect(mock.next).toBeCalledWith('error');
    });
  });
});
