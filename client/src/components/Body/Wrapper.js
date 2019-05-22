import styled from 'styled-components/macro';

const BodyWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  margin: 0 auto;
  width: 100%;
  max-width: 1150px;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default BodyWrapper;
