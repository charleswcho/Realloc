import React, { Component } from 'react'
import { Link } from 'react-router'

import Slider from 'material-ui/Slider'
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
      <div className="risk-page">
        <h1>RiskPage</h1>
        <Slider defaultValue={0.5} onChange={this._sliderChanged}/>
        <button><Link to={"/alloc"} onClick={this._handleSubmit}>Submit</Link></button>
      </div>
    );
  }
}
