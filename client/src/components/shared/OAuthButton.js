import styled from 'styled-components/macro';
import Button from './Button';

const OAuthButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px 30px;
  text-align: center;
  border: 1px solid ${props => props.theme.mutedText};
  color: ${props => props.theme.mutedText};
  background-color: transparent;

  :hover {
    border: 1px solid ${props => props.theme.accent};
  }
`;

export default OAuthButton;
