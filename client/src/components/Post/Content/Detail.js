import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Link } from 'react-router-dom';
import { link, overflow } from '../../../styles/helpers';
import CommentIcon from '../../shared/CommentIcon';
import Author from '../../shared/Author';

const Wrapper = styled.div`
  ${overflow}
  font-size: 13px;
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & > span > * {
    margin-right: 4px;
  }
  & > span > a {
    ${link};
  }
  & > a {
    ${link};
  }
  & > span {
    color: ${props => props.theme.mutedText};
  }
  @media (hover: hover) {
    :hover path {
      fill: ${props => props.theme.accent};
    }
  }
`;

const PostContentDetail = ({ id, category, commentCount, author, created }) => (
  <Wrapper>
    <Link to={`/a/${category}/${id}`}>
      <CommentIcon />
      {commentCount} comment{commentCount !== 1 ? 's' : null}
    </Link>
    <span>
      <Link to={`/a/${category}`}>/a/{category}</Link>
      <span>by</span>
      <Author author={author} />
      <span>{moment(created).fromNow()}</span>
    </span>
  </Wrapper>
);

export default PostContentDetail;
