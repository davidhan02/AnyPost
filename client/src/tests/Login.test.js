import React from 'react';
import { shallow } from 'enzyme';
import Login from '../components/Login/Component';

it('renders without crashing', () => {
  shallow(<Login handleSubmit={fn => fn} />);
});
