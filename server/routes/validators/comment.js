const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function commentValidator(data) {
  let errors = {};

  data.comment = !isEmpty(data.comment) ? data.comment : '';

  if (!Validator.isLength(data.comment, { min: 3, max: 300 })) {
    errors.msg = 'Comment must be between 3 and 300 characters';
  }

  if (Validator.isEmpty(data.comment)) {
    errors.msg = 'Comment field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
