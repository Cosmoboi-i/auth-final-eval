const login = {
  req: {
    body: {
      username: 'username',
      password: 'password',
    },
  },
  res: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  next: jest.fn(),
}

const register = {
  req: {
    body: {
      username: 'username',
      password: 'password',
      role: 'role',
    },
  },
  res: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  next: jest.fn(),
  user: {
    username: 'username',
    password: 'password',
    role: 'role',
  },
}

const validate = {
  req: {
    headers: {
      authorization: 'Bearer token',
    },
  },
  res: {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  },
  next: jest.fn(),
  result: {
    username: 'username',
  }
}

module.exports = {
  login,
  register,
  validate,
}