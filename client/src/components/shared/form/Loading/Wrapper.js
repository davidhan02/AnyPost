import styled from 'styled-components/macro';

const SpinnerWrapper = styled.div`
  width: 72px;
  height: 72px;
  position: relative;
  margin: 48px auto 0;
  border-radius: 2px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};
`;

export default SpinnerWrapper;
