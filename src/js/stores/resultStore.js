import AppDispatcher from '../dispatcher/dispatcher'
import { ACTIONS } from '../constants/actionConstants'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change';

let _riskLevel;

class ResultStore extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  riskLevel() {
    return _riskLevel;
  }

  // all() {
  //   return _results.slice(0, 9);
  // }
}

function _resetRisk (riskLevel) {
  _riskLevel = riskLevel;
}

const resultStore = new ResultStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ACTIONS.SUBMIT_RISK:
      _resetRisk(action.riskLevel)
      resultStore.emit(CHANGE_EVENT);
      break;
    default:
      return;
  }
})

export default resultStore;
