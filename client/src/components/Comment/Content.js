import React from 'react';
import styled from 'styled-components/macro';
import Markdown from '../shared/Markdown';

const Content = styled.div`
  padding: 8px;
  background-color: ${props => props.theme.inputBackground};
`;

const CommentContent = props => (
  <Content>
    <Markdown>{props.children}</Markdown>
  </Content>
);

export default CommentContent;
