import React from 'react';
import { shallow } from 'enzyme';
import Register from '../components/Register/Component';

it('renders without crashing', () => {
  shallow(<Register handleSubmit={fn => fn} />);
});
