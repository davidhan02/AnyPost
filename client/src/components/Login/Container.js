import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { postLogin } from '../../actions/auth';
import Login from './Component';

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  isAuthenticated: auth.isAuthenticated
});

const mapDispatchToProps = { postLogin };

const enhance = compose(
  reduxForm({ form: 'login' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const LoginContainer = enhance(Login);

export default LoginContainer;
