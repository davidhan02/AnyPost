import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitRegister } from '../../actions/auth';
import Register from './Component';
import validate from './validate';

const mapStateToProps = ({ auth: { user, loading, isAuthenticated } }) => ({
  user,
  loading,
  isAuthenticated
});

const mapDispatchToProps = { submitRegister };

const enhance = compose(
  reduxForm({ form: 'register', validate }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const RegisterContainer = enhance(Register);

export default RegisterContainer;
