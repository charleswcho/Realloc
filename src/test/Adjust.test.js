import React from 'react'
import { shallow } from 'enzyme'
import AdjustPage from '../js/components/AdjustPage'

// Constants
import { ACTIONS } from '../js/constants/actionConstants'
import { PROFILES } from '../js/constants/profileConstants'
import { ADJUST } from '../js/constants/contentConstants'

jest.mock('../js/dispatcher/dispatcher');

describe('AdjustPage', () => {

  let AppDispatcher;
  let ResultStore;
  let callback;

  it('renders title', () => {
    const wrapper = shallow(<AdjustPage />);

    const title = <h1>{ADJUST.title}</h1>;

    expect(wrapper.contains(title)).toEqual(true);
  });

  // mock actions inside dispatch payloads
  let submitDesiredPortfolio = {
    actionType: ACTIONS.SUBMIT_DESIRED_PORTFOLIO,
    portfolio: PROFILES.Moderate
  };
  let submitActualPortfolio = {
    actionType: ACTIONS.SUBMIT_ACTUAL_PORTFOLIO,
    portfolio: PROFILES.Moderate
  };

  beforeEach(() => {
     jest.resetModules();
     AppDispatcher = require('../js/dispatcher/dispatcher').default;
     ResultStore = require('../js/stores/resultStore').default;
     callback = AppDispatcher.register.mock.calls[0][0];
   });

   it('registers a callback with the dispatcher', function() {
     expect(AppDispatcher.register.mock.calls.length).toBe(1);
   });

  it('initializes with no portfolios', function() {
    let actual = ResultStore.actualPortfolio();

    expect(actual).toEqual([]);
  });

  it('stores portfolios', function() {
    callback(submitDesiredPortfolio);
    callback(submitActualPortfolio);

    let desired = ResultStore.desiredPortfolio(),
        actual = ResultStore.actualPortfolio();

    expect(desired.length).toBe(5);
    expect(actual.length).toBe(5);
  });

  it('calculates difference', function() {
    callback(submitDesiredPortfolio);
    callback(submitActualPortfolio);

    let diff = ResultStore.diff();

    expect(diff['Developed Markets'][0]).toBe(0);
  });
})
