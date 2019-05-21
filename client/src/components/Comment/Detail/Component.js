import React from 'react';
import styled from 'styled-components/macro';
import Author from '../../shared/Author';
import CommentDetailTimestamp from './Timestamp';
import DeleteButton from '../../shared/DeleteButton';

const Wrapper = styled.div`
  display: flex;
  padding: 8px;
  font-size: 13px;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const CommentDetail = ({ id, auth, author, created, deleteComment }) => {
  return (
    <Wrapper>
      <Author author={author} />
      <CommentDetailTimestamp created={created} />
      {auth.isAuthenticated &&
        (auth.user.id === author.id || auth.user.admin) && (
          <DeleteButton onClick={() => deleteComment(id)} />
        )}
    </Wrapper>
  );
};

export default CommentDetail;
