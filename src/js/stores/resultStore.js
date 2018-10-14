import AppDispatcher from '../dispatcher/dispatcher';
import { ACTIONS } from '../constants/actionConstants';

let _desiredPortfolio = [];
let _actualPortfolio = [];
let _actualSum = 0;
let _diff = {};

class ResultStore {
  desiredPortfolio() {
    return [..._desiredPortfolio];
  }

  actualPortfolio() {
    return [..._actualPortfolio];
  }

  actualSum() {
    return _actualSum;
  }

  diff() {
    return { ..._diff };
  }
}

function calculatePorfolioDiff() {
  _desiredPortfolio.forEach((asset, idx) => {
    // Calculate the target value and find the difference and percent difference
    // with the actual value of the user's asset
    const desired = (asset.y / 100) * _actualSum;
    const actual = _actualPortfolio[idx].y;
    const percentDiff = ((desired - actual) / actual) * 100;

    _diff[asset.x] = {
      desired,
      actual,
      difference: desired - actual,
      percentDiff
    }
  });
}

const resultStore = new ResultStore();

AppDispatcher.register(action => {
  switch (action.actionType) {
    case ACTIONS.SUBMIT_DESIRED_PORTFOLIO:
      _desiredPortfolio = action.portfolio;
      break;
    case ACTIONS.SUBMIT_ACTUAL_PORTFOLIO:
      _actualPortfolio = action.portfolio;
      _actualSum = action.portfolio.reduce((acc, curr) => acc + curr.y, 0); // Sum value of actual Portfo
      // Parse data only after we have both portfolios and the sum of the actual
      calculatePorfolioDiff();
      break;
    case ACTIONS.CLEAR_DATA:
      _desiredPortfolio = [];
      _actualPortfolio = [];
      _actualSum = 0;
      _diff = {};
      break;
    default:
      return;
  }
});

export default resultStore;
