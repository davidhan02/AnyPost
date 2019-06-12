import React from 'react';
import { shallow } from 'enzyme';
import Author from '../components/shared/Author';
import CommentDetail from '../components/Comment/Detail/Component';
import CommentDetailTimestamp from '../components/Comment/Detail/Timestamp';

it('renders without crashing', () => {
  shallow(<CommentDetail auth author />);
});

it('renders the author', () => {
  const author = { name: 'John Doe' };
  const wrapper = shallow(<CommentDetail auth author={author} />);
  expect(wrapper.contains(<Author author={author} />)).toEqual(true);
});

it('renders the timestamp', () => {
  const wrapper = shallow(<CommentDetail auth author />);
  expect(wrapper.contains(<CommentDetailTimestamp />)).toEqual(true);
});
