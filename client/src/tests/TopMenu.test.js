import React from 'react';
import { shallow } from 'enzyme';
import TopMenu from '../components/TopMenu/Component';
import TopMenuCreateButton from '../components/TopMenu/CreateButton';

it('renders without crashing', () => {
  shallow(<TopMenu auth />);
});

it('renders a create post button if user is logged in', () => {
  const auth = { isAuthenticated: true };
  const wrapper = shallow(<TopMenu auth={auth} />);
  expect(wrapper.contains(<TopMenuCreateButton />)).toEqual(true);
});

it("doesn't render a create post button if user is not logged in", () => {
  const wrapper = shallow(<TopMenu auth />);
  expect(wrapper.contains(<TopMenuCreateButton />)).toEqual(false);
});
