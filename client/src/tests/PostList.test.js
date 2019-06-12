import React from 'react';
import { shallow } from 'enzyme';
import PostList from '../components/PostList/Component';
import PostListItem from '../components/PostList/Item';
import NotFound from '../components/shared/NotFound';
import Loading from '../components/shared/Loading';

it('renders without crashing', () => {
  shallow(<PostList getPosts={fn => fn} />);
});

it('renders list of posts', () => {
  const posts = [{}, {}, {}];
  const wrapper = shallow(<PostList getPosts={fn => fn} posts={posts} />);
  expect(wrapper.children()).toHaveLength(posts.length);
  expect(wrapper.contains(<PostListItem />)).toEqual(true);
});

it('renders loading indicator if loading', () => {
  const wrapper = shallow(<PostList getPosts={fn => fn} loading />);
  expect(wrapper.contains(<Loading />)).toEqual(true);
});

it('renders message if there are no posts', () => {
  const wrapper = shallow(<PostList getPosts={fn => fn} />);
  expect(wrapper.contains(<NotFound />)).toEqual(true);
});
