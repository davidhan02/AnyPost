import React from 'react';
import { shallow } from 'enzyme';
import PostForm from '../components/PostForm/Component';

it('renders without crashing', () => {
  const form = { values: {} };

  shallow(<PostForm handleSubmit={fn => fn} form={form} />);
});
