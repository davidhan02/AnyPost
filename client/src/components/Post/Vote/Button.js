import styled from 'styled-components/macro';
import { transition } from '../../../styles/helpers';

const PostVoteButton = styled.button`
  ${transition('background-color')};

  background-color: transparent;
  border-radius: 3px;
  border: 0;

  cursor: pointer;
  height: 22px;
  width: 22px;

  :focus {
    outline: 0;
  }
  :hover {
    background-color: ${props => props.theme.voteButtonHover};
  }
  ::after {
    ${transition('border')};

    content: '';
    display: block;
    position: relative;

    left: 6px;
    width: 8px;
    height: 8px;
    transform: rotate(-45deg);
  }

  ${props =>
    !props.canVote &&
    `
    cursor: default;
    pointer-events: none;
  `}
`;

export default PostVoteButton;
