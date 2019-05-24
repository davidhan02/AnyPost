const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function postValidator(data) {
  let errors = {};

  data.url = !isEmpty(data.url) ? data.url : '';
  data.text = !isEmpty(data.text) ? data.text : '';
  data.title = !isEmpty(data.title) ? data.title : '';

  if (!Validator.isEmpty(data.url) && !Validator.isURL(data.url)) {
    errors.msg = 'Given link must be a valid URL';
  }

  if (Validator.isEmpty(data.title)) {
    errors.msg = 'Title field is required';
  }

  if (!Validator.isLength(data.title, { min: 3, max: 100 })) {
    errors.msg = 'Post must be between 3 and 100 characters';
  }

  if (Validator.isEmpty(data.text)) {
    errors.msg = 'Post text field is required';
  }

  if (!Validator.isLength(data.text, { min: 3, max: 300 })) {
    errors.msg = 'Post must be between 3 and 300 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
