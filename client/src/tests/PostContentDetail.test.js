import React from 'react';
import moment from 'moment';
import { shallow, mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import PostContentDetail from '../components/Post/Content/Detail';
import Author from '../components/shared/Author';

it('renders without crashing', () => {
  shallow(<PostContentDetail />);
});

it('renders the information correctly', () => {
  const data = {
    category: 'test',
    commentCount: 0,
    author: 'John Doe',
    created: '2018-11-05T05:02:38.544Z'
  };

  const wrapper = mount(
    <MemoryRouter>
      <PostContentDetail {...data} />
    </MemoryRouter>
  );
  const links = wrapper.find('a');
  const timestamp = wrapper.find('span').at(2);

  expect(links.at(0).text()).toEqual(
    `Comment Icon${data.commentCount} comments`
  );
  expect(links.at(1).text()).toEqual(`/a/${data.category}`);
  expect(wrapper.contains(<Author author={data.author} />)).toEqual(true);
  expect(timestamp.text()).toEqual(moment(data.created).fromNow());
});
