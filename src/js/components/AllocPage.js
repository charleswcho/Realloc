import React, { Component } from 'react';
import { Link } from 'react-router';
// Components
import AssetInput from './AssetInput';
import DonutChart from './DonutChart';
import Paper from 'material-ui/Paper';
// Actions
import { submitActualPortfolio } from '../actions/clientActions';
// Constants
import { STATE, ASSETS } from '../constants/profileConstants';
import { ALLOC, BUTTON } from '../constants/contentConstants';

// ASSUMPTION - Everyone has some money in every asset

// TODO: Add handling for missing asset types

export default class AllocPage extends Component {
  componentWillMount() {
    this.setState(STATE);

    this.formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
  }

  calcData = () => {
    // Transform state into object readable by chart
    return Object.keys(this.state).map(asset => ({
      x: asset,
      y: this.state[asset],
      label: asset
    }));
  };

  _handleSubmit = e => {
    submitActualPortfolio(this.calcData());
  };

  _inputChanged = e => {
    let val = parseInt(e.target.value.replace(/[^0-9]/g, ''), 10);

    if (Number.isNaN(val)) {
      val = 0;
    }

    // Dynamically set state with computed property
    this.setState({ [e.target.name]: val });
  };

  render() {
    return (
      <div className="alloc-page">
        <div className="intro">
          <h1>{ALLOC.title}</h1>
        </div>

        <div className="display">
          <Paper className="chart" zDepth={3}>
            <DonutChart data={this.calcData()} />
          </Paper>

          <ul className="inputs">
            {ASSETS.map((asset, idx) => (
              <AssetInput
                key={idx}
                name={asset}
                value={this.formatter.format(this.state[asset])}
                inputChanged={this._inputChanged}
              />
            ))}
          </ul>
        </div>

        <div className="buttons">
          <Link className="back" to={'/'}>
            Back
          </Link>

          <Link
            className="continue"
            to={'/adjust'}
            onClick={this._handleSubmit}>
            {BUTTON.name}
          </Link>
        </div>
      </div>
    );
  }
}
