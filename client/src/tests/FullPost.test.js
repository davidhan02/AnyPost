import React from 'react';
import { shallow } from 'enzyme';
import FullPost from '../components/FullPost/Component';
import Loading from '../components/shared/Loading';
import FullPostContent from '../components/FullPost/Content';
import FullPostComments from '../components/FullPost/Comments';
import NotFound from '../components/shared/NotFound';

it('renders without crashing', () => {
  shallow(<FullPost getPost={fn => fn} />);
});

it('renders post and comment section', () => {
  const wrapper = shallow(<FullPost getPost={fn => fn} post />);
  expect(wrapper.contains(<FullPostContent />)).toEqual(true);
  expect(wrapper.contains(<FullPostComments />)).toEqual(true);
});

it('renders loading indicator if loading', () => {
  const wrapper = shallow(<FullPost getPost={fn => fn} postLoading />);
  expect(wrapper.contains(<Loading />)).toEqual(true);
});

it('renders message if post does not exist', () => {
  const wrapper = shallow(<FullPost getPost={fn => fn} />);
  expect(wrapper.contains(<NotFound />)).toEqual(true);
});
