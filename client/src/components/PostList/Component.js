import React, { Component } from 'react';
import styled from 'styled-components/macro';
import Loading from '../shared/form/Loading';
import NotFound from '../shared/NotFound';
import PostListItem from './Item';

const List = styled.ul`
  list-style: none;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.border};

  @media (max-width: 768px) {
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-right: none;
  }
`;

class PostList extends Component {
  componentDidMount() {
    this.loadPosts();
  }

  componentDidUpdate(prevProps) {
    const { userId, category } = this.props;
    if (category !== prevProps.category || userId !== prevProps.userId)
      this.loadPosts();
  }

  loadPosts = () => {
    const { userId, category, getPostsByUserId } = this.props;
    if (userId) return getPostsByUserId(userId);
    return this.props.fetchPosts(category);
  };

  mapPosts = () =>
    this.props.posts.map((post, index) => (
      <PostListItem key={index} {...post} />
    ));

  render() {
    const { posts, loading } = this.props;
    if (loading) return <Loading />;
    if (!posts || posts.length === 0) return <NotFound />;
    return <List>{this.mapPosts()}</List>;
  }
}

export default PostList;
