import React from 'react';
import FullPost from './Post';
import NotFound from '../shared/NotFound';
import FullPostComments from './Comments';
import Loading from '../shared/form/Loading';
import FullPostInfoContainer from './Info/Container';
import CommentFormContainer from '../CommentForm/Container';

class PostDetail extends React.Component {
  componentDidMount() {
    this.props.getPost(this.props.id);
  }

  componentDidUpdate(prevProps) {
    const { post, history } = this.props;
    if (post !== prevProps.post && post === null) {
      history.goBack();
    }
  }

  render() {
    const { post, loading, isAuthenticated } = this.props;
    if (loading) return <Loading />;
    if (!post) return <NotFound />;
    return (
      <>
        <FullPost {...post} />
        <FullPostInfoContainer
          id={post.id}
          views={post.views}
          author={post.author}
          upvotePercentage={post.upvotePercentage}
        />
        {isAuthenticated && <CommentFormContainer id={post.id} />}
        <FullPostComments comments={post.comments} />
      </>
    );
  }
}

export default PostDetail;
