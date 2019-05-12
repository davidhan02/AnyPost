import styled from 'styled-components/macro';
import { wideFont, overflow } from '../../../styles/helpers';

const HeaderUsernameText = styled.span`
  ${wideFont};
  ${overflow};

  color: ${props => props.theme.mutedText};
`;

export default HeaderUsernameText;
