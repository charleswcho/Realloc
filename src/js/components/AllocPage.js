import React, { Component } from 'react'
import AssetInput from './AssetInput'
import DonutChart from './DonutChart'

import { Link } from 'react-router'

const ASSETS = [
  "Developed Markets",
  "Emerging Markets",
  "Municipal Bonds",
  "US Total Stock Market",
  "US Large-Cap Value",
]

export default class AllocPage extends Component {
  state = {
    devMark: 5,
    emergMark: 5,
    MunicipalBond: 5,
    ustsm: 5,
    uslcv: 5
  }

  calcData = () => {
    let stateKeys = Object.keys(this.state)

    // Filter data to exclude asset categories with a value of 0
    let filtered = ASSETS.filter((asset, idx) => {
      let val = this.state[stateKeys[idx]]
      return (val !== '0' && val !== 0) ? asset : false
    })

    // Transform assests into objects readable by chart
    return filtered.map((asset, idx) => {
      let val = this.state[stateKeys[idx]]
      return {x: asset, y: val}
    })
  }

  _inputChanged = (e) => {
    console.log(typeof e.target.value)
    const val = parseInt(e.target.value, 10)

    switch (e.target.name) {
      case ASSETS[0]:
        this.setState({ devMark: val })
        break;
      case ASSETS[1]:
        this.setState({ emergMark: val })
        break;
      case ASSETS[2]:
        this.setState({ MunicipalBond: val })
        break;
      case ASSETS[3]:
        this.setState({ ustsm: val })
        break;
      case ASSETS[4]:
        this.setState({ uslcv: val })
        break;
      default:
        return;
    }
  }

  render() {
    return (
      <div className="alloc-page">
        <h1>Enter your current Allocation of assets</h1>
        <div className='display'>
          <div className='chart'><DonutChart data={this.calcData()}/></div>
          <ul className='inputs'>
            {ASSETS.map((asset, idx) => {
              return <AssetInput key={idx} name={asset} inputChanged={this._inputChanged}/>
            })}
          </ul>
        </div>
        <div className='buttons'>
          <Link className='back' to={"/"}>Back</Link>
          <Link className='continue' to={"/adjust"}>Continue</Link>
        </div>
      </div>
    );
  }
}
