import React, { Component } from 'react'
import { Link } from 'react-router'

// Components
import AssetInput from './AssetInput'
import DonutChart from './DonutChart'
import Paper from 'material-ui/Paper'

// Actions
import { submitActual } from '../actions/clientActions'

export default class AllocPage extends Component {
  state = {
    "Developed Markets": 5,
    "Emerging Markets": 5,
    "Municipal Bonds": 5,
    "US Total Stock Market": 5,
    "US Large-Cap Value": 5
  }

  calcData = () => {
    // Transform state into object readable by chart
    return Object.keys(this.state)
      .filter(asset => {
        let val = this.state[asset]
        return (val > 0 && !Number.isNaN(val) )})
      .map(asset => { return { x: asset, y: this.state[asset], label: asset } })
  }

  _inputChanged = (e) => {
    const val = parseInt(e.target.value, 10)

    // Dynamically set state with computed property
    this.setState({ [e.target.name]: val })
  }

  _handleSubmit = (e) => {

    submitActual(this.calcData())
  }

  render() {
    return (
      <div className="alloc-page">
        <div className='intro'>
          <h1>Enter your current Allocation of assets</h1></div>

        <div className='display'>
          <Paper className='chart' zDepth={3}>
            <DonutChart data={this.calcData()}/></Paper>

          <ul className='inputs'>
            {Object.keys(this.state).map((asset, idx) => {
              return (<AssetInput key={idx} name={asset}
                                  inputChanged={this._inputChanged}/>)
            })}
          </ul>
        </div>

        <div className='buttons'>
          <Link className='back' to={"/"}>Back</Link>
          <Link className='continue' to={"/adjust"} onClick={this._handleSubmit}>
            Continue</Link>
        </div>
      </div>
    );
  }
}
