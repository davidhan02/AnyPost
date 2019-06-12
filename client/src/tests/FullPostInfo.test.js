import React from 'react';
import { shallow } from 'enzyme';
import FullPostInfo from '../components/FullPost/Info/Component';
import DeleteButton from '../components/shared/DeleteButton';

it('renders without crashing', () => {
  shallow(<FullPostInfo auth />);
});

it('renders the information correctly', () => {
  const data = {
    views: 10,
    upvotePercentage: 50
  };

  const wrapper = shallow(<FullPostInfo auth {...data} />);
  const details = wrapper.find('span');

  expect(details.at(0).text()).toEqual(`${data.views} views`);
  expect(details.at(2).text()).toEqual(`${data.upvotePercentage}% upvoted`);
});

it('does not render delete post button if user is not author', () => {
  const data = {
    auth: {
      isAuthenticated: true,
      user: { id: '12345' }
    },
    author: { id: '54321' }
  };

  const wrapper = shallow(<FullPostInfo {...data} />);
  expect(wrapper.contains(<DeleteButton />)).toEqual(false);
});

it('does not render delete post button if user is not logged in', () => {
  const wrapper = shallow(<FullPostInfo auth />);
  expect(wrapper.contains(<DeleteButton />)).toEqual(false);
});
