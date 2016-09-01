import React, { Component } from 'react';
import { Link } from 'react-router'

import Slider from 'material-ui/Slider'

export default class RiskPage extends Component {
  state = {
    sliderVal: 0
  }

  _sliderChanged = (e, value) => {
    this.setState({sliderVal: Math.floor(value * 100)})
  }

  render() {
    return (
      <div className="risk-page">
        <h1>RiskPage</h1>
        <Slider defaultValue={0.5} onChange={this._sliderChanged}/>
        <button><Link to={'/alloc'}>Continue</Link></button>
      </div>
    );
  }
}
