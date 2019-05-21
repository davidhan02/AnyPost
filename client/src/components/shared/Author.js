import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { link } from '../../styles/helpers';

const StyledLink = styled(Link)`
  ${link};
  font-weight: 500;
  color: ${props => props.theme.normalText};
`;

const Author = ({ author }) =>
  author ? <StyledLink to={`/u/${author.id}`}>{author.name}</StyledLink> : null;

export default Author;
