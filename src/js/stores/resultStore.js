import AppDispatcher from '../dispatcher/dispatcher'
import { ACTIONS } from '../constants/actionConstants'
import { PROFILES } from '../constants/profileConstants'

let _desiredPortfolio,
    _actualPortfolio = [],
    _actualSum = 0,
    _diff = {};

class ResultStore {
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
      break;
    case ACTIONS.SUBMIT_ACTUAL:
      _actualPortfolio = action.portfolio
      _actualPortfolio.forEach(asset => _actualSum += asset.y) // Sum value of actual Portfo
      // Parse data only after we have both portfolios and the sum of the actual
      parseDiff()
      break;
    case ACTIONS.CLEAR_DATA:
      _desiredPortfolio = []
      _actualPortfolio = []
      _actualSum = 0
      _diff = {}
      break;
    default:
      return;
  }
})

export default resultStore;
