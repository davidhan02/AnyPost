import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { overflow, link } from '../../../styles/helpers';

const Wrapper = styled.div`
  display: flex;
  * {
    ${overflow};
    display: block;
    font-size: 15px;
    line-height: 21px;
    font-weight: 500;
    text-decoration: none;
    color: ${props => props.theme.normalText};
    ${props => props.full && 'white-space: unset'};
  }
  a {
    margin-right: 11px;
    ${link({ underline: true })};
  }
  span {
    font-size: 10px;
    color: ${props => props.theme.mutedText};
  }
`;

const renderTitle = ({ id, url, title, category }) => {
  if (url)
    return (
      <>
        <a href={url}>{title}</a>
        <span>[{url}]</span>
      </>
    );

  return <Link to={`/a/${category}/${id}`}>{title}</Link>;
};

const PostContentTitle = props => (
  <Wrapper full={props.full}>{renderTitle(props)}</Wrapper>
);

export default PostContentTitle;
