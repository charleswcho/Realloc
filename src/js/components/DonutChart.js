import React, { Component } from 'react'
import { VictoryPie } from 'victory'

const COLORS = [
  "rgb(3, 93, 14)",
  "rgb(12, 57, 17)",
  "rgb(92, 170, 249)",
  "rgb(188, 229, 119)",
  "rgb(150, 211, 99)",
]

const STYLES = {
  labels: {
    fill: 'black',
    fontSize: 12
  }
}

const ANIMATE = {
  duration: 1000,
  onEnter: {
    duration: 250,
    before: (datum) =>
      ({y: 0, label: " "}),
    after: (datum) =>
      ({y: datum.y})
  }
}

export default class DonutChart extends Component {
  render() {
    return (
      <VictoryPie data={this.props.data}
                  innerRadius={125}
                  colorScale={COLORS}
                  style={STYLES}
                  animate={ANIMATE}/>
    );
  }
}
