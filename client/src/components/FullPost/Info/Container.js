import { connect } from 'react-redux';
import { deletePost } from '../../../actions/post';
import FullPostInfo from './Component';

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = { deletePost };

const FullPostInfoContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullPostInfo);

export default FullPostInfoContainer;
