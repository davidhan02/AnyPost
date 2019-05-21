import React from 'react';
import Markdown from '../../shared/Markdown';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  padding: 8px;
  margin: 8px -8px;
  border-left: none;
  border-right: none;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.inputBackground};
`;

const PostContentFullText = props => (
  <Wrapper>
    <Markdown>{props.children}</Markdown>
  </Wrapper>
);

export default PostContentFullText;
