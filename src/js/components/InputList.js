import React, { Component } from 'react'

// Components
import AssetInput from './AssetInput'

// Actions
import { submitActual } from '../actions/clientActions'

export default class InputList extends Component {
  state = {
    "Developed Markets": 5,
    "Emerging Markets": 5,
    "Municipal Bonds": 5,
    "US Total Stock Market": 5,
    "US Large-Cap Value": 5
  }

  calcData = () => {
    // Transform assests into objects readable by chart
    return Object.keys(this.state).map((asset) => {
      return { x: asset, y: this.state[asset] }
    })
  }

  _inputChanged = (e) => {
    const val = parseInt(e.target.value, 10)

    this.setState({ [e.target.id]: val })
    submitActual(this.calcData())
  }

  render() {
    return (
      <ul className='inputs'>
        {Object.keys(this.state).map((asset, idx) => {
          return (
            <AssetInput id={asset} key={idx} name={asset}
                        inputChanged={this._inputChanged}/>
          )
        })}
      </ul>
    );
  }
}
