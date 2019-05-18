import styled from 'styled-components/macro';
import Button from '../shared/Button';

const OAuthButton = styled(Button)`
  width: 100%;
  margin-bottom: 20px;
  padding: 12px 30px;
  text-align: center;
  border: 1px solid ${props => props.theme.accent};
  color: ${props => props.theme.accent};
  background-color: transparent;
`;

export default OAuthButton;
