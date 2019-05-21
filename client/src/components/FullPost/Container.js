import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import FullPost from './Component';

export const mapStateToProps = ({
  auth: { isAuthenticated },
  post: { post, postLoading }
}) => ({ post, postLoading, isAuthenticated });

const mapDispatchToProps = { getPost };

const FullPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FullPost);

export default FullPostContainer;
