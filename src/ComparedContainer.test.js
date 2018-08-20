import React from 'react';
import { shallow } from 'enzyme';
import ComparedContainer from './ComparedContainer';

describe('ComparedContainer', () => {
  it('should render with all of the appropriate elements', () => {
    const wrapper = shallow(
      <ComparedContainer 
        compareObject={[]}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});