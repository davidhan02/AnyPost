import { connect } from 'react-redux';
import TopMenu from './Component';

const mapStateToProps = ({ auth }) => ({ auth });

const TopMenuContainer = connect(mapStateToProps)(TopMenu);

export default TopMenuContainer;
