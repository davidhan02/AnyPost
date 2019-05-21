import React from 'react';
import styled from 'styled-components/macro';
import SidebarCreateButton from './CreateButton';
import SidebarCategoryList from './CategoryList';

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;

  flex-basis: 240px;
  margin-left: 24px;

  border-radius: 2px;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.foreground};

  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = ({ isAuthenticated }) => (
  <Wrapper>
    {isAuthenticated && <SidebarCreateButton />}
    <SidebarCategoryList />
  </Wrapper>
);

export default Sidebar;
