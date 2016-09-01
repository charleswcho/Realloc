import React, { Component } from 'react'
import { Link } from 'react-router'

import DonutChart from './DonutChart'

const PROFILES = {
  Conservative: [
    {x: "Developed Markets", y: 15},
    {x: "Emerging Markets", y: 3},
    {x: "Municple Bonds", y: 32},
    {x: "US Total Stock Market", y: 8},
    {x: "US Large-Cap Value", y: 8}
  ],

  Moderate: [
    {x: "Developed Markets", y: 20},
    {x: "Emerging Markets", y: 5},
    {x: "Municple Bonds", y: 10},
    {x: "US Total Stock Market", y: 8},
    {x: "US Large-Cap Value", y: 8}
  ],

  Aggressive: [
    {x: "Developed Markets", y: 37},
    {x: "Emerging Markets", y: 11},
    {x: "Municple Bonds", y: 5},
    {x: "US Total Stock Market", y: 15},
    {x: "US Large-Cap Value", y: 15}
  ]
}


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
      <div className="risk-profile">
        <h1 className='label'>{profile}</h1>
        <DonutChart data={PROFILES[profile]}/>
        <Link className='continue' to={"/alloc"} onClick={this._handleSubmit}>
          Continue</Link>
      </div>
    );
  }
}
