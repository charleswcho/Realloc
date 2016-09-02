import React, { Component } from 'react'
import { Link } from 'react-router'
// Components
import DonutChart from './DonutChart'
import Paper from 'material-ui/Paper'
// Constants
import { PROFILES } from '../constants/profileConstants'
// Actions
import { submitDesired } from '../actions/clientActions'

const PORTFOLIOS = ['Conservative', 'Moderate', 'Aggressive']

export default class RiskPage extends Component {
  switchProfile() {
    let riskVal = this.props.riskVal
    switch (true) {
      case (riskVal < 3):
        submitDesired(PORTFOLIOS[0])
        return PORTFOLIOS[0]
      case (riskVal >= 3 && riskVal <= 6):
        submitDesired(PORTFOLIOS[1])
        return PORTFOLIOS[1]
      case (riskVal > 6):
        submitDesired(PORTFOLIOS[2])
        return PORTFOLIOS[2]
      default:
        return;
    }
  }

  render() {
    let profile = this.switchProfile()
    return (
      <Paper className='risk-profile' zDepth={3}>
        <h1>{profile}</h1>

        <DonutChart data={PROFILES[profile]}/>

        <Link className='continue' to={"/alloc"}>Continue</Link>
      </Paper>
    );
  }
}
