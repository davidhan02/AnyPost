import { connect } from 'react-redux';
import { deleteComment } from '../../../actions/post';
import CommentDetail from './Component';

const mapStateToProps = ({ auth }) => ({ auth });

const mapDispatchToProps = { deleteComment };

const CommentDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDetail);

export default CommentDetailContainer;
