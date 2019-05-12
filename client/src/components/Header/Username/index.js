import React from 'react';
import HeaderNavLink from '../NavLink';
import HeaderUsernameText from './Text';
import styled from 'styled-components/macro';

const Wrapper = styled(HeaderNavLink)`
  min-width: 0;
  flex-shrink: 1;
  border-left: 1px solid ${props => props.theme.border};
  border-right: 1px solid ${props => props.theme.border};
`;

const HeaderUsername = ({ user }) => (
  <Wrapper to="/dashboard">
    <HeaderUsernameText>{user.name}</HeaderUsernameText>
  </Wrapper>
);

export default HeaderUsername;
