import React from 'react';
import styled from 'styled-components/macro';
import PostContentTitle from './Title';
import PostContentPreview from './Preview';
import PostContentFullText from './FullText';
import PostContentDetail from './Detail';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  flex: 1;
  min-width: 0;
  padding: 8px;
  border-left: 1px solid ${props => props.theme.border};
`;

const renderContent = ({ url, text, showFullPost }) => {
  if (showFullPost) {
    return (
      <>
        {url && <PostContentPreview>{url}</PostContentPreview>}
        <PostContentFullText>{text}</PostContentFullText>
      </>
    );
  }
  return (
    <PostContentPreview>
      {url && `${url} • `}
      {text}
    </PostContentPreview>
  );
};

const PostContent = ({
  url,
  title,
  text,
  commentCount,
  showFullPost,
  ...details
}) => (
  <Wrapper>
    <PostContentTitle
      url={url}
      title={title}
      full={showFullPost}
      {...details}
    />
    {renderContent({ url, text, showFullPost })}
    <PostContentDetail commentCount={commentCount} {...details} />
  </Wrapper>
);

export default PostContent;
