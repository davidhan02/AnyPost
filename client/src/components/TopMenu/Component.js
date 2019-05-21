import React from 'react';
import styled from 'styled-components/macro';
import { Route } from 'react-router-dom';
import TopMenuDropdown from './Dropdown';
import TopMenuCreateButton from './CreateButton';

const Menu = styled.nav`
  display: none;
  border: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const TopMenu = ({ auth }) => (
  <Menu>
    <Route
      path="/a/:category"
      children={({ match, history }) => (
        <TopMenuDropdown
          category={match ? match.params.category : 'all'}
          history={history}
        />
      )}
    />
    {auth.isAuthenticated && <TopMenuCreateButton />}
  </Menu>
);

export default TopMenu;
