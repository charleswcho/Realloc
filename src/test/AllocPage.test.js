import React from 'react'
import { shallow } from 'enzyme'
import AllocPage from '../js/components/AllocPage'

// Constants
import { ALLOC } from '../js/constants/contentConstants'


describe('AdjustPage', () => {
  it('renders without crashing', () => {
    shallow(<AllocPage />)
  });

  it('renders title', () => {
    const wrapper = shallow(<AllocPage />);

    const title = <h1>{ALLOC.title}</h1>;

    expect(wrapper.contains(title)).toEqual(true);
  });
})
