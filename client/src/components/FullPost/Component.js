import React from 'react';
import FullPostContent from './Content';
import NotFound from '../shared/NotFound';
import Loading from '../shared/form/Loading';
import FullPostComments from '../FullPost/Comments';
import FullPostInfoContainer from './Info/Container';
import CommentFormContainer from '../CommentForm/Container';

class FullPost extends React.Component {
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
    const { post, postLoading, isAuthenticated } = this.props;
    if (postLoading) return <Loading />;
    if (!post) return <NotFound />;
    return (
      <>
        <FullPostContent {...post} />
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

export default FullPost;
