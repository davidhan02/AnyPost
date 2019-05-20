import styled from 'styled-components/macro';
import PostVoteButton from './Button';

const PostVoteDownvote = styled(PostVoteButton)`
  --iconColor: ${props =>
    props.didVote ? props.theme.downvote : props.theme.vote};

  ::after {
    top: -2px;
    border-bottom: 2px solid var(--iconColor);
    border-left: 2px solid var(--iconColor);
  }
`;

export default PostVoteDownvote;
