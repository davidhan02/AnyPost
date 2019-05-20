import React, { Component } from 'react';
import styled from 'styled-components/macro';
import { Field } from 'redux-form';
import Input from '../shared/form/Input';

const TextArea = styled(Input)`
  margin: 0;
  border: none;
  resize: none;

  border-radius: 0;
  border-bottom: 1px solid ${props => props.theme.border};

  :hover,
  :focus {
    border: none;
    box-shadow: none;
    border-bottom: 1px solid ${props => props.theme.border};
  }
`;

class CommentFormTextArea extends Component {
  onKeyDown = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSubmit();
    }
  };

  renderField = field => (
    <TextArea
      as="textarea"
      {...field.input}
      rows="2"
      placeholder="write your comment"
      onKeyDown={this.onKeyDown}
    />
  );

  render() {
    return <Field name={this.props.name} component={this.renderField} />;
  }
}

export default CommentFormTextArea;
