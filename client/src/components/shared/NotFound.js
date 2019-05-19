import React from 'react';
import styled from 'styled-components/macro';
import { smallFont } from '../../styles/helpers';

const Wrapper = styled.div`
  ${smallFont};
  padding: 48px 0;
  border-radius: 2px;
  text-align: center;

  ${props => props.comments && 'margin-top: 16px'};
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};
  color: ${props => props.theme.mutedText};

  @media (max-width: 768px) {
    border-radius: 0;
    border-left: none;
    border-right: none;
    ${props => !props.comments && 'margin-top: -1px'};
  }
`;

const NotFound = ({ comments }) => {
  const message = comments ? 'no comments found' : 'no posts found';
  return <Wrapper comments={comments}>{message}</Wrapper>;
};

export default NotFound;
