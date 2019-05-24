import React from 'react';
import Markdown from '../../shared/Markdown';
import styled from 'styled-components/macro';

const Wrapper = styled.div`
  padding: 8px;
  margin: 8px -8px;
  border: 1px solid ${props => props.theme.border};
  border-left: none;
  border-right: none;
  background-color: ${props => props.theme.inputBackground};
`;

const PostContentFullText = props => (
  <Wrapper>
    <Markdown>{props.children}</Markdown>
  </Wrapper>
);

export default PostContentFullText;
