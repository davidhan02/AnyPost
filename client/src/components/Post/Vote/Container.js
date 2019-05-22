import { compose } from 'redux';
import { connect } from 'react-redux';
import { submitVote, commentVote } from '../../../actions/post';
import PostVote from './Component';

const mapStateToProps = ({ auth }) => ({
  user: auth.user,
  isAuthenticated: auth.isAuthenticated
});

const mapDispatchToProps = { submitVote, commentVote };

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
);

const PostVoteContainer = enhance(PostVote);

export default PostVoteContainer;
