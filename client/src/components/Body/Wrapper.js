import styled from 'styled-components/macro';

const BodyWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  margin: 0 auto;
  width: 100%;
  max-width: 1190px;

  padding: 0 20px;

  @media (max-width: 768px) {
    display: block;
    padding: 0;
  }
`;

export default BodyWrapper;
