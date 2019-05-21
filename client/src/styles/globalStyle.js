import { createGlobalStyle } from 'styled-components';
import { link } from './helpers';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.pageBackground};
  }
`;

export default GlobalStyle;
