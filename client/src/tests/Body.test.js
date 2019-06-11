import React from 'react';
import { shallow } from 'enzyme';
import Body from '../components/Body';

it('renders without crashing', () => {
  shallow(<Body />);
});
