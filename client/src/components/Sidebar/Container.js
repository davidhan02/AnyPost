import { connect } from 'react-redux';
import Sidebar from './Component';

const mapStateToProps = ({ auth: { isAuthenticated } }) => ({
  isAuthenticated
});

const SidebarContainer = connect(mapStateToProps)(Sidebar);

export default SidebarContainer;
