import React, { Component } from 'react'
import ResultStore from '../stores/resultStore'

import DonutChart from './DonutChart'

export default class AdjustPage extends Component {
  state = {
    desiredPortfolio: ResultStore.desiredPortfolio(),
    actualPortfolio: ResultStore.actualPortfolio(),
    actualSum: ResultStore.actualSum()
  }

  componentDidMount() {
    ResultStore.addChangeListener(this._resultsChanged);
  }

  componentWillUnmount()  {
    ResultStore.removeChangeListener(this._resultsChanged);
  }

  parseDiff() {
    let diff = {},
        desiredPort = this.state.desiredPortfolio,
        actualPort = this.state.actualPortfolio,
        actualSum = this.state.actualSum

    desiredPort.forEach((asset, idx) => {
      // Calculate the target value and find the difference and percent difference with the actual value of the user's asset

      let desiredVal = (asset.y / 100) * actualSum,
          actualVal = actualPort[idx].y,
          percentDelta = ((desiredVal - actualVal) / actualVal) * 100;

      diff[asset.x] = [desiredVal - actualVal, percentDelta]
    })

    // Format of diff object { assetName: [diff, percent diff] }
    return diff
  }

  renderDiff() {
    let diff = this.parseDiff();

    return (
      <ul className='diffs'>
        {
          Object.keys(diff).map((asset, idx) => {
            return <li key={idx}><span>{asset + ' '}</span>
              {this.formatAssetVal(asset, diff[asset])}</li>
          })
        }
      </ul>
    )
  }

  formatAssetVal(asset, val) {
    return (
      <span className={(val[0] < 0) ? 'negative' : 'positive'}>
         {val[1] + '% ($ ' + val[0] + ')'}
      </span>
    )
  }

  _resultsChanged = () => {
    this.setState({
      desiredPortfolio: ResultStore.desiredPortfolio(),
      actualPortfolio: ResultStore.actualPortfolio(),
      actualSum: ResultStore.actualSum()
    })
  }

  render() {
    return (
      <div className="adjust-page">
        <div className='intro'>
          <h1>See what you need to change to achieve your goal</h1></div>

        <div className='chart'>Actual
          <DonutChart data={this.state.actualPortfolio}/></div>

        {this.renderDiff()}

        <div className='chart'>Desired
          <DonutChart data={this.state.desiredPortfolio}/></div>
      </div>
    );
  }
}
