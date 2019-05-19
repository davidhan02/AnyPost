import { connect } from 'react-redux';
import { getPosts, getPostsByUserId } from '../../actions/post';
import PostList from './Component';

export const mapStateToProps = ({ post }) => ({
  posts: post.postList,
  loading: post.postLoading
});

const mapDispatchToProps = { getPosts, getPostsByUserId };

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default PostListContainer;
