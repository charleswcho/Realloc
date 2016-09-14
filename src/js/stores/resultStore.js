import AppDispatcher from '../dispatcher/dispatcher'
import { ACTIONS } from '../constants/actionConstants'
import { PROFILES } from '../constants/profileConstants'
import { EventEmitter } from 'events'

const CHANGE_EVENT = 'change';

let _desiredPortfolio,
    _actualPortfolio = [],
    _actualSum = 0,
    _diff = {};

class ResultStore extends EventEmitter {
  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  desiredPortfolio() {
    return PROFILES[_desiredPortfolio];
  }

  actualPortfolio() {
    return _actualPortfolio;
  }

  actualSum() {
    return _actualSum;
  }

  diff() {
    return _diff
  }
}

function sumActual() {
  if (_actualSum === 0) { // Only sum if not calculated before
    _actualPortfolio.forEach((asset) => {
      _actualSum += asset.y
    })
  }
}

function parseDiff() {
  PROFILES[_desiredPortfolio].forEach((asset, idx) => {
    // Calculate the target value and find the difference and percent difference with the actual value of the user's asset

    let desiredVal = (asset.y / 100) * _actualSum,
        actualVal = _actualPortfolio[idx].y,
        percentDelta = ((desiredVal - actualVal) / actualVal) * 100;

    _diff[asset.x] = [desiredVal - actualVal, percentDelta]
  })
}

const resultStore = new ResultStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ACTIONS.SUBMIT_DESIRED:
      _desiredPortfolio = action.portfolio
      resultStore.emit(CHANGE_EVENT);
      break;
    case ACTIONS.SUBMIT_ACTUAL:
      _actualPortfolio = action.portfolio
      sumActual()
      // Parse data only after we have both portfolios and the sum of the actual
      parseDiff()
      resultStore.emit(CHANGE_EVENT);
      break;
    case ACTIONS.CLEAR_DATA:
      _desiredPortfolio = []
      _actualPortfolio = []
      _actualSum = 0
      _diff = {}
      resultStore.emit(CHANGE_EVENT);
      break;
    default:
      return;
  }
})

export default resultStore;
