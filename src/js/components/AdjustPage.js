import React, { Component } from 'react'
import ResultStore from '../stores/resultStore'

export default class AdjustPage extends Component {
  state = {
    riskLevel: ResultStore.riskLevel()
  }

  componentDidMount() {
    ResultStore.addChangeListener(this._resultsChanged);
  }

  componentWillUnmount()  {
    ResultStore.removeChangeListener(this._resultsChanged);
  }

  _resultsChanged = () => {
    this.setState({
      riskLevel: ResultStore.riskLevel()
    })
  }

  render() {
    return (
      <div className="adjust-page">
        <h1>AdjustPage</h1>
        <h2>{this.state.riskLevel}</h2>
      </div>
    );
  }
}
