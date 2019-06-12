import React from 'react';
import { shallow } from 'enzyme';
import PostContent from '../components/Post/Content';
import PostContentTitle from '../components/Post/Content/Title';
import PostContentPreview from '../components/Post/Content/Preview';
import PostContentDetail from '../components/Post/Content/Detail';
import PostContentFullText from '../components/Post/Content/FullText';

it('renders without crashing', () => {
  shallow(<PostContent />);
});

it('renders post title, content preview, and details', () => {
  const wrapper = shallow(<PostContent />);
  expect(wrapper.find(PostContentTitle).exists()).toEqual(true);
  expect(wrapper.find(PostContentPreview).exists()).toEqual(true);
  expect(wrapper.contains(<PostContentDetail />)).toEqual(true);
});

it('renders the full text of a text post', () => {
  const text = 'test post text';
  const wrapper = shallow(<PostContent text={text} showFullPost />);
  expect(wrapper.find(PostContentFullText).exists()).toEqual(true);
  expect(
    wrapper
      .find(PostContentFullText)
      .children()
      .text()
  ).toEqual(text);
});
