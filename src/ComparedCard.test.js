import React from 'react';
import { shallow } from 'enzyme';
import ComparedCard from './ComparedCard';

describe('ComparedCard', () => {
  it('should render with all the appropriate elements', () => {

    const wrapper = shallow(<ComparedCard 
      comparedObject={{COLORADO: 0.53, 'ACADEMY 20': 0.407, compared: 1.302}}
  />);

    expect(wrapper).toMatchSnapshop();
  });
});