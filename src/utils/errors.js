class HTTPError extends Error {
  constructor(message, status) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

class BadInputError extends HTTPError {
  constructor(message = 'Invalid Input') {
    super(message, 400);
  }
}
class NotFoundError extends HTTPError {
  constructor(message = 'Not found') {
    super(message, 404);
  }
}

class UnAuthError extends HTTPError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

class ForbiddenError extends HTTPError {
  constructor(message = 'Forbidden') {
    super(message, 403);
  }
}

module.exports = { HTTPError, BadInputError, NotFoundError, UnAuthError };
