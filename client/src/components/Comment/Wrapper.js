import styled from 'styled-components/macro';

const CommentWrapper = styled.div`
  flex: 1;
  min-width: 0;
  border-left: 1px solid ${props => props.theme.border};
`;

export default CommentWrapper;
