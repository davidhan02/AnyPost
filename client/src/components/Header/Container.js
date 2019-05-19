import { toggleTheme } from '../../actions/theme';
import { logoutUser } from '../../actions/auth';
import { connect } from 'react-redux';
import Header from './Component';

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = { toggleTheme, logoutUser };

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default AppContainer;
