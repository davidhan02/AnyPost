import React from 'react';
import NotFound from '../shared/NotFound';
import CommentList from '../CommentList';

const FullPostComments = ({ comments }) => (
  <>
    {!comments || comments.length === 0 ? (
      <NotFound comments />
    ) : (
      <CommentList comments={comments} />
    )}
  </>
);

export default FullPostComments;
