import React from 'react';
import styled from 'styled-components/macro';
import CommentDetailContainer from './Detail/Container';
import PostVoteContainer from '../Post/Vote/Container';
import CommentWrapper from './Wrapper';
import CommentContent from './Content';

const Wrapper = styled.div`
  display: flex;
  border-radius: 2px;
  margin-bottom: 8px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};

  @media (max-width: 768px) {
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
`;

const Comment = ({ body, ...details }) => (
  <Wrapper>
    <PostVoteContainer {...details} comment full />
    <CommentWrapper>
      <CommentDetailContainer {...details} />
      <CommentContent>{body}</CommentContent>
    </CommentWrapper>
  </Wrapper>
);

export default Comment;
