import { connect } from 'react-redux';
import ErrorBox from './Component';

const mapStateToProps = ({ error }) => ({ error });

const ErrorBoxContainer = connect(mapStateToProps)(ErrorBox);

export default ErrorBoxContainer;
