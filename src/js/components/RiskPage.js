import React, { Component } from 'react';

// Components
import Slider from 'material-ui/Slider';
import RiskProfile from './RiskProfile';
// Actions
import { submitDesiredPortfolio } from '../actions/clientActions';
// Constants
import { RISK } from '../constants/contentConstants';

export default class RiskPage extends Component {
  state = {
    riskVal: 5
  };

  _sliderChanged = (e, value) => {
    this.setState({ riskVal: Math.floor(value * 10) });
  };

  render() {
    return (
      <div className="risk-page">
        <div className="intro">
          <h1>{RISK.title}</h1>
          <h4>{RISK.sub}</h4>
        </div>

        <RiskProfile
          riskVal={this.state.riskVal}
          submitDesiredPortfolio={submitDesiredPortfolio}
        />

        <div className="inputs">
          <Slider defaultValue={0.5} onChange={this._sliderChanged} />
        </div>
      </div>
    );
  }
}
