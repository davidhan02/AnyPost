import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { link, overflow } from '../../../styles/helpers';
import Author from '../../shared/Author';

const Wrapper = styled.div`
  ${overflow}
  font-size: 13px;
  margin-top: auto;

  & > * {
    margin-right: 4px;
  }
  & > a {
    ${link};
  }
  & > span {
    color: ${props => props.theme.mutedText};
  }
`;

const PostContentDetail = ({ id, category, commentCount, author, created }) => (
  <Wrapper>
    <Link to={`/a/${category}/${id}`}>
      {commentCount} comment{commentCount !== 1 ? 's' : null}
    </Link>
    <Link to={`/a/${category}`}>/a/{category}</Link>
    <span>by</span>
    <Author author={author} />
    <span>{moment(created).fromNow()}</span>
  </Wrapper>
);

export default PostContentDetail;