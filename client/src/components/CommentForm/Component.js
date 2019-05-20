import React from 'react';
import styled from 'styled-components/macro';
import Form from '../shared/form/Form';
import { transition } from '../../styles/helpers';
import CommentFormTextArea from './TextArea';
import CommentFormSubmitButton from './SubmitButton';

const StyledForm = styled(Form)`
  padding: 0;
  margin-top: -1px;
  max-width: none;

  ${transition('border', 'box-shadow')};
  border: 1px solid ${props => props.theme.border};
  border-radius: 0 0 2px 2px;

  @media (hover: hover) {
    :hover {
      border: 1px solid ${props => props.theme.accent};
    }
  }
  :focus-within {
    border: 1px solid ${props => props.theme.accent};
    box-shadow: 0 0 0 2px ${props => props.theme.accent + '4d'};
  }

  @media (max-width: 768px) {
    margin-top: -1px;
    border-radius: 0;
    border-left: none;
    border-right: none;

    :hover,
    :focus-within {
      border-left: none;
      border-right: none;
    }
  }
`;

const CommentForm = ({ submitComment, handleSubmit }) => {
  const onSubmit = comment => submitComment(comment);
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <CommentFormTextArea name="comment" onSubmit={handleSubmit(onSubmit)} />
      <CommentFormSubmitButton />
    </StyledForm>
  );
};

export default CommentForm;
