import AppDispatcher from '../dispatcher/dispatcher'
import { ACTIONS } from '../constants/actionConstants'

export function submitRisk(riskLevel) {
  console.log('dispatching ' + riskLevel)
  AppDispatcher.dispatch({
    actionType: ACTIONS.SUBMIT_RISK,
    riskLevel: riskLevel
  });
}
