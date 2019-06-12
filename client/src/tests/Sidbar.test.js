import React from 'react';
import { shallow } from 'enzyme';
import Sidebar from '../components/Sidebar/Component';
import SidebarCategoryList from '../components/Sidebar/CategoryList';
import SidebarCreateButton from '../components/Sidebar/CreateButton';

it('renders without crashing', () => {
  shallow(<Sidebar />);
});

it('renders list of categories', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper.contains(<SidebarCategoryList />)).toEqual(true);
});

it('renders create post button if user is logged in', () => {
  const wrapper = shallow(<Sidebar isAuthenticated />);
  expect(wrapper.contains(<SidebarCreateButton />)).toEqual(true);
});

it('does not render create post button if user is not logged in', () => {
  const wrapper = shallow(<Sidebar />);
  expect(wrapper.contains(<SidebarCreateButton />)).toEqual(false);
});
