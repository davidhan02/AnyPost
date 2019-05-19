import styled from 'styled-components/macro';
import { smallFont } from '../../styles/helpers';

const ErrorBoxMessage = styled.div`
  ${smallFont};
  position: relative;
  padding: 12px 32px;
  display: inline-block;

  background-color: #fafafa;
  color: ${props => props.theme.error};

  border-radius: 2px;
  border: 1px solid ${props => props.theme.border};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);

  ::after {
    content: '';
    position: absolute;

    top: 0;
    left: 0;
    right: 0;

    border-radius: 2px 2px 0 0;
    border-top: 2px solid ${props => props.theme.error};
  }
`;

export default ErrorBoxMessage;
