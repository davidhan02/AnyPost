import React from 'react';
import styled from 'styled-components/macro';
import Post from '../Post';

const Wrapper = styled.div`
  overflow: hidden;
  border-radius: 2px 2px 0 0;
  border: 1px solid ${props => props.theme.border};

  @media (max-width: 768px) {
    margin-top: 1px;
    margin-bottom: 0;
    border-radius: 0;
    border-left: none;
    border-right: none;
  }
`;

const FullPostContent = props => (
  <Wrapper>
    <Post {...props} full />
  </Wrapper>
);

export default FullPostContent;
