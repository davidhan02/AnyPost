import React from 'react';
import styled from 'styled-components/macro';
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  font-size: 13px;

  padding: 8px;
  margin-top: -1px;

  color: ${props => props.theme.mutedText};
  background-color: ${props => props.theme.foreground};

  border: 1px solid ${props => props.theme.border};
  ${props => props.round && 'border-radius: 0 0 2px 2px'};

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
  }
`;

const PostDetailInfo = ({
  id,
  auth,
  views,
  author,
  upvotePercentage,
  deletePost
}) => (
  <Wrapper round={!auth.isAuthenticated}>
    <span>{views} views</span>
    <span>&nbsp;|&nbsp;</span>
    <span>{upvotePercentage}% upvoted</span>
    {auth.isAuthenticated &&
      (auth.user.id === author.id || auth.user.admin) && (
        <DeleteButton onClick={() => deletePost(id)} />
      )}
  </Wrapper>
);

export default PostDetailInfo;
