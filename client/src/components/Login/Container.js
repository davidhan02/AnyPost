import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitLogin } from '../../actions/auth';
import Login from './Component';

const mapStateToProps = ({ auth: { user, loading, isAuthenticated } }) => ({
  user,
  loading,
  isAuthenticated
});

const mapDispatchToProps = { submitLogin };

const enhance = compose(
  reduxForm({ form: 'login' }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const LoginContainer = enhance(Login);

export default LoginContainer;
