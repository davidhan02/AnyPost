import React from 'react';
import { shallow } from 'enzyme';
import FullPostComments from '../components/FullPost/Comments';
import CommentList from '../components/CommentList';
import NotFound from '../components/shared/NotFound';

it('renders without crashing', () => {
  shallow(<FullPostComments post />);
});

it('renders list of comments', () => {
  const comments = [{}];
  const wrapper = shallow(<FullPostComments comments={comments} />);
  expect(wrapper.contains(<CommentList comments={comments} />)).toEqual(true);
});

it('renders message if there are no comments', () => {
  const wrapper = shallow(<FullPostComments post />);
  expect(wrapper.contains(<NotFound comments />)).toEqual(true);
});
