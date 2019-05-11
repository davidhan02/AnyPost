import React from 'react';
import styled from 'styled-components/macro';

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  height: 48px;
  padding: 0 10vw;
  background-color: #d3d3d3;
  user-select: none;

  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = props => (
  <Wrapper>
    <h3>CompanyName</h3>
    <a href="/auth/google">Log in</a>
  </Wrapper>
);

export default Header;
