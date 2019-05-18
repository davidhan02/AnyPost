import { compose } from 'redux';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { submitRegister, clearError } from '../../actions/auth';
import Register from './Component';
import validate from './validate';

const mapStateToProps = ({ auth, error }) => ({ auth, error });

const mapDispatchToProps = { submitRegister, clearError };

const enhance = compose(
  reduxForm({ form: 'register', validate }),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const RegisterContainer = enhance(Register);

export default RegisterContainer;
