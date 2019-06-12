import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header/Component';
import HeaderLogo from '../components/Header/Logo';
import HeaderDarkButton from '../components/Header/DarkButton';
import HeaderUsername from '../components/Header/Username';

it('renders without crashing', () => {
  shallow(<Header auth />);
});

it('renders logo link', () => {
  const wrapper = shallow(<Header auth />);
  expect(wrapper.contains(<HeaderLogo />)).toEqual(true);
});

it('renders dark mode button', () => {
  const wrapper = shallow(<Header auth />);
  expect(wrapper.contains(<HeaderDarkButton />)).toEqual(true);
});

it('renders log in / register links when not logged in', () => {
  const wrapper = shallow(<Header auth />);
  const links = wrapper.find('NavLink__HeaderNavLink');

  expect(links).toHaveLength(2);
  expect(links.at(0).text()).toEqual('Login');
  expect(links.at(1).text()).toEqual('Register');
});

it('renders logout link when logged in', () => {
  const auth = { isAuthenticated: true };
  const wrapper = shallow(<Header auth={auth} />);
  const link = wrapper.find('NavLink__HeaderNavLink');
  expect(link.text()).toEqual('Logout');
});

it('renders username when logged in', () => {
  const auth = {
    isAuthenticated: true,
    user: { name: 'John Doe' }
  };
  const wrapper = shallow(<Header auth={auth} />);
  expect(wrapper.contains(<HeaderUsername user={auth.user} />)).toEqual(true);
});
