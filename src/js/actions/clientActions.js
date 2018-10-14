import AppDispatcher from '../dispatcher/dispatcher'
import { ACTIONS } from '../constants/actionConstants'

export function submitDesiredPortfolio(portfolio) {
  AppDispatcher.dispatch({
    actionType: ACTIONS.SUBMIT_DESIRED_PORTFOLIO,
    portfolio: portfolio
  });
}

export function submitActualPortfolio(portfolio) {
  AppDispatcher.dispatch({
    actionType: ACTIONS.SUBMIT_ACTUAL_PORTFOLIO,
    portfolio: portfolio
  });
}

export function clearData() {
  AppDispatcher.dispatch({
    actionType: ACTIONS.CLEAR_DATA
  });
}
