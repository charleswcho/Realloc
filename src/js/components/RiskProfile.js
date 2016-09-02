import React, { Component } from 'react'
import { Link } from 'react-router'

import DonutChart from './DonutChart'
import Paper from 'material-ui/Paper'

import { PROFILES } from '../constants/profileConstants'

export default class RiskPage extends Component {
  switchProfile() {
    let riskVal = this.props.riskVal
    switch (true) {
      case (riskVal < 3):
        return 'Conservative'
      case (riskVal >= 3 && riskVal <= 6):
        return 'Moderate'
      case (riskVal > 6):
        return 'Aggressive'
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
        <Link className='continue' to={"/alloc"} onClick={this._handleSubmit}>
          Continue</Link>
      </Paper>
    );
  }
}
