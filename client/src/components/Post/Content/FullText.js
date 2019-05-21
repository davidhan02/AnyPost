import styled from 'styled-components/macro';

const PostContentFullText = styled.div`
  font-size: 15px;
  padding: 8px;
  margin: 8px -8px;
  border-left: none;
  border-right: none;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.inputBackground};
`;

export default PostContentFullText;
