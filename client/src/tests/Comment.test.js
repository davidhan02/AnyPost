import React from 'react';
import { shallow } from 'enzyme';
import Comment from '../components/Comment';
import CommentDetailContainer from '../components/Comment/Detail/Container';
import CommentContent from '../components/Comment/Content';

it('renders without crashing', () => {
  shallow(<Comment />);
});

it('renders comment details', () => {
  const wrapper = shallow(<Comment />);
  expect(wrapper.contains(<CommentDetailContainer />)).toEqual(true);
});

it('renders comment content', () => {
  const comment = 'test comment text';
  const wrapper = shallow(<Comment body={comment} />);
  expect(wrapper.find(CommentContent).exists()).toEqual(true);
  expect(
    wrapper
      .find(CommentContent)
      .children()
      .text()
  ).toEqual(comment);
});
