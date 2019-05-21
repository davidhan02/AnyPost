import React from 'react';
import styled from 'styled-components/macro';
import SubmitButton from '../shared/form/SubmitButton';

const StyledSubmitButton = styled(SubmitButton)`
  margin: 4px;
  padding: 8px 10px;
`;

const CommentFormSubmitButton = () => (
  <StyledSubmitButton type="submit">comment</StyledSubmitButton>
);

export default CommentFormSubmitButton;
