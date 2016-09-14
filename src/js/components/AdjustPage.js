import React, { Component } from 'react'
// Components
import DonutChart from './DonutChart'
import Paper from 'material-ui/Paper'
// Constants
import { ADJUST } from '../constants/contentConstants'
// Stores
import ResultStore from '../stores/resultStore'

export default class AdjustPage extends Component {
  state = {
    desiredPortfolio: ResultStore.desiredPortfolio(),
    actualPortfolio: ResultStore.actualPortfolio(),
    diff: ResultStore.diff()
  }

  componentDidMount() {
    ResultStore.addChangeListener(this._resultsChanged);
  }

  componentWillUnmount()  {
    ResultStore.removeChangeListener(this._resultsChanged);
  }

  renderDiff() {
    let diff = this.state.diff,
        val;

    return (
      <ul className='diffs'>
        {
          Object.keys(diff).map((asset, idx) => {
            val = diff[asset];
            return (
              <li key={idx}>
                <span>{asset + ' '}</span>
                <span className={(val[0] < 0) ? 'negative' : 'positive'}>
                  {val[1].toFixed(2) + '% | $ ' + val[0].toFixed(2)}</span></li>)
          })
        }
      </ul>
    )
  }

  _resultsChanged = () => {
    this.setState({
      desiredPortfolio: ResultStore.desiredPortfolio(),
      actualPortfolio: ResultStore.actualPortfolio(),
      diff: ResultStore.diff()
    })
  }

  render() {
    return (
      <div className="adjust-page">
        <div className='intro'>
          <h1>{ADJUST.title}</h1></div>

        <Paper className='chart' zDepth={3}>{ADJUST.actual}
          <DonutChart data={this.state.actualPortfolio}/></Paper>

        {this.renderDiff()}

        <Paper className='chart' zDepth={3}>{ADJUST.target}
          <DonutChart data={this.state.desiredPortfolio}/></Paper>
      </div>
    );
  }
}
