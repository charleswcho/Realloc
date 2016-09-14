import React from 'react'
import { shallow } from 'enzyme'
import AdjustPage from '../js/components/AdjustPage'

// Constants
import { ACTIONS } from '../js/constants/actionConstants'
import { ADJUST } from '../js/constants/contentConstants'

jest.dontMock('../js/stores/resultStore')

describe('AdjustPage', () => {
  it('renders title', () => {
    const wrapper = shallow(<AdjustPage />);

    const title = <h1>{ADJUST.title}</h1>;

    expect(wrapper.contains(title)).toEqual(true);
  });

  // mock actions inside dispatch payloads

  let submitDesired = {
    source: 'VIEW_ACTION',
    action: {
      actionType: ACTIONS.SUBMIT_DESIRED,
      text: 'foo'
    }
  };
  let submitActual = {
    source: 'VIEW_ACTION',
    action: {
      actionType: ACTIONS.SUBMIT_ACTUAL,
      id: 'replace me in test'
    }
  };

  let AppDispatcher;
  let TodoStore;
  let callback;

  beforeEach(function() {
    AppDispatcher = require('../js/dispatcher/dispatcher');
    console.log(AppDispatcher.register)
    TodoStore = require('../js/stores/resultStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });

  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  });
  //
  // it('initializes with no to-do items', function() {
  //   var all = TodoStore.getAll();
  //   expect(all).toEqual({});
  // });
  //
  // it('creates a to-do item', function() {
  //   callback(actionTodoCreate);
  //   var all = TodoStore.getAll();
  //   var keys = Object.keys(all);
  //   expect(keys.length).toBe(1);
  //   expect(all[keys[0]].text).toEqual('foo');
  // });
  //
  // it('destroys a to-do item', function() {
  //   callback(actionTodoCreate);
  //   var all = TodoStore.getAll();
  //   var keys = Object.keys(all);
  //   expect(keys.length).toBe(1);
  //   actionTodoDestroy.action.id = keys[0];
  //   callback(actionTodoDestroy);
  //   expect(all[keys[0]]).toBeUndefined();
  // });

})
