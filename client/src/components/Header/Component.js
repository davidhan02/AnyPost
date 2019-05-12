import React from 'react';
import HeaderLogo from './Logo';
import styled from 'styled-components/macro';
import HeaderDarkButton from './DarkButton';
import HeaderNavLink from './NavLink';
import HeaderUsername from './Username';

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;

  display: flex;
  align-items: stretch;
  margin-bottom: 20px;

  box-shadow: 0 4px 12px ${props => props.theme.shadow};
  border-bottom: 1px solid ${props => props.theme.border};

  height: 48px;
  padding: 0 10vw;
  background-color: ${props => props.theme.foreground};
  user-select: none;

  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = ({ auth, logout, toggleTheme }) => (
  <Wrapper>
    <HeaderLogo />
    <HeaderDarkButton toggle={toggleTheme} />
    {auth.isAuthenticated ? (
      <>
        <HeaderUsername user={auth.user} />
        <HeaderNavLink as="span" onClick={logout}>
          Logout
        </HeaderNavLink>
      </>
    ) : (
      <HeaderNavLink as="a" href="/auth/google">
        Login
      </HeaderNavLink>
    )}
  </Wrapper>
);

export default Header;
