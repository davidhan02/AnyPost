import React, { Component } from 'react';
import { Field } from 'redux-form';
import Form from '../shared/form/Form';
import OAuthButton from '../shared/OAuthButton';
import ServerError from '../shared/ServerError';
import renderField from '../shared/form/renderField';
import SubmitButton from '../shared/form/SubmitButton';
import { emailValidator, passwordValidator } from '../../utils/validators';

class Register extends Component {
  componentDidMount() {
    this.redirectIfLoggedIn();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    this.redirectIfLoggedIn();
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  redirectIfLoggedIn() {
    const { auth, history } = this.props;
    if (auth.isAuthenticated) history.push('/dashboard');
  }

  onSubmit = formValues => {
    this.props.submitRegister(formValues);
  };

  render() {
    const { auth, error, handleSubmit } = this.props;
    return (
      <Form loading={auth.loading} onSubmit={handleSubmit(this.onSubmit)}>
        <OAuthButton as="a" href="/auth/google">
          Register with Google
        </OAuthButton>
        <Field
          type="email"
          name="email"
          label="email"
          component={renderField}
          validate={emailValidator}
        />
        <Field
          type="password"
          name="password"
          label="password"
          component={renderField}
          validate={passwordValidator}
        />
        <Field
          type="password"
          name="password2"
          label="confirm password"
          component={renderField}
          validate={passwordValidator}
        />
        {error && <ServerError>{error.msg}</ServerError>}
        <SubmitButton type="submit">Register</SubmitButton>
      </Form>
    );
  }
}

export default Register;
