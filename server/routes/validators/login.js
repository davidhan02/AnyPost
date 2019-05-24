const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function loginValidator(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';

  if (!Validator.isEmail(data.email)) {
    errors.msg = 'Email is invalid';
  }

  if (Validator.isEmpty(data.email)) {
    errors.msg = 'Email field is required';
  }

  if (Validator.isEmpty(data.password)) {
    errors.msg = 'Password field is required';
  }

  if (!Validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.msg = 'Password must be between 6 and 32 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
