import React from 'react'
import { shallow } from 'enzyme'
import RiskPage from '../js/components/RiskPage'

// Constants
import { RISK } from '../js/constants/contentConstants'

describe('RiskPage', () => {
  it('renders without crashing', () => {
    shallow(<RiskPage />)
  });

  it('renders title and subtitle', () => {
    const wrapper = shallow(<RiskPage />);

    const title = <h1>{RISK.title}</h1>;
    const sub = <h4>{RISK.sub}</h4>

    expect(wrapper.contains(title)).toEqual(true);
    expect(wrapper.contains(sub)).toEqual(true);
  });
})
