import React, { Component } from 'react'
import ResultStore from '../stores/resultStore'

import DonutChart from './DonutChart'

export default class AdjustPage extends Component {
  state = {
    desiredPortfolio: ResultStore.desiredPortfolio(),
    actualPortfolio: ResultStore.actualPortfolio()
  }

  componentDidMount() {
    ResultStore.addChangeListener(this._resultsChanged);
  }

  componentWillUnmount()  {
    ResultStore.removeChangeListener(this._resultsChanged);
  }

  _resultsChanged = () => {
    this.setState({
      desiredPortfolio: ResultStore.desiredPortfolio(),
      actualPortfolio: ResultStore.actualPortfolio()
    })
  }

  render() {
    return (
      <div className="adjust-page">
        <h1>AdjustPage</h1>
        <DonutChart data={    this.state.desiredPortfolio
}/>
        <DonutChart data={    this.state.actualPortfolio
}/>

      </div>
    );
  }
}
