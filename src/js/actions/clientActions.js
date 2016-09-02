import AppDispatcher from '../dispatcher/dispatcher'
import { ACTIONS } from '../constants/actionConstants'

export function submitDesired(portfolio) {
  console.log('dispatching ' + portfolio)
  AppDispatcher.dispatch({
    actionType: ACTIONS.SUBMIT_DESIRED,
    portfolio: portfolio
  });
}

export function submitActual(portfolio) {
  console.log('dispatching ' + portfolio)
  AppDispatcher.dispatch({
    actionType: ACTIONS.SUBMIT_ACTUAL,
    portfolio: portfolio
  });
}
