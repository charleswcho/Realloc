import React, { Component } from 'react'
import { Link } from 'react-router'
// Components
import AssetInput from './AssetInput'
import DonutChart from './DonutChart'
import Paper from 'material-ui/Paper'
// Actions
import { submitActual } from '../actions/clientActions'
// Constants
import  { STATE, ASSETS } from '../constants/profileConstants'
import { ALLOC, BUTTON } from '../constants/contentConstants'

// ASSUMPTION - Everyone has some money in every asset

// TODO: Add handling for missing asset types
// TODO: Need to add valications to inputs

export default class AllocPage extends Component {
  componentWillMount() {
    this.setState(STATE)
  }

  calcData = () => {
    // Transform state into object readable by chart
    return Object.keys(this.state)
      .filter(asset => {
        let val = this.state[asset]
        return (val > 0 && !Number.isNaN(val) )})
      .map(asset => { return { x: asset, y: this.state[asset] } })
  }

  _inputChanged = (e) => {
    const val = parseInt(e.target.value, 10)

    // Dynamically set state with computed property
    this.setState({ [e.target.name]: val })
  }

  render() {
    return (
      <div className="alloc-page">
        <div className='intro'>
          <h1>{ALLOC.title}</h1></div>

        <div className='display'>
          <Paper className='chart' zDepth={3}>
            <DonutChart data={this.calcData()}/></Paper>

          <ul className='inputs'>
            {ASSETS.map((asset, idx) => {
              return (<AssetInput key={idx} name={asset}
                                  inputChanged={this._inputChanged}/>)
            })}
          </ul>
        </div>

        <div className='buttons'>
          <Link className='back' to={"/"}>Back</Link>
          <Link className='continue' to={"/adjust"}
                onClick={e => submitActual(this.calcData())}>{BUTTON.name}</Link>
        </div>
      </div>
    );
  }
}
