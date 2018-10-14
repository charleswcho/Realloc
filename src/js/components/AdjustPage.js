import React, { Component } from 'react';
// Components
import DonutChart from './DonutChart';
import Paper from 'material-ui/Paper';
import Differences from './Differences';
// Constants
import { ADJUST } from '../constants/contentConstants';
// Stores
import ResultStore from '../stores/resultStore';

export default class AdjustPage extends Component {
  state = {
    desiredPortfolio: ResultStore.desiredPortfolio(),
    actualPortfolio: ResultStore.actualPortfolio(),
    diff: ResultStore.diff()
  };

  render() {
    return (
      <div className="adjust-page">
        <div className="intro">
          <h1>{ADJUST.title}</h1>
        </div>

        <Paper className="chart" zDepth={3}>
          {ADJUST.actual}
          <DonutChart data={this.state.actualPortfolio} />
        </Paper>

        <Differences diff={this.state.diff}/>

        <Paper className="chart" zDepth={3}>
          {ADJUST.target}
          <DonutChart data={this.state.desiredPortfolio} />
        </Paper>
      </div>
    );
  }
}
