import React, { Component } from 'react'
import Slider from 'material-ui/Slider'
import RiskProfile from './RiskProfile'

import { submitRisk } from '../actions/clientActions'

export default class RiskPage extends Component {
  state = {
    riskVal: 5
  }

  _sliderChanged = (e, value) => {
    this.setState({riskVal: Math.floor(value * 10)})
  }

  _handleSubmit = (e) => {
    submitRisk(this.state.riskVal)
  }

  render() {
    return (
      <div className='risk-page'>
        <div className='intro'>
          <h1>Start by selecting a risk profile</h1>
          <h4 className='subtitle'>Don't worry, you call always come back and change it</h4>
        </div>
        <RiskProfile riskVal={this.state.riskVal}/>
        <div className='inputs'>
          <Slider defaultValue={0.5} onChange={this._sliderChanged}/>
        </div>
      </div>
    );
  }
}
