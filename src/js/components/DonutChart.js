import React, { Component } from 'react'
import { VictoryPie } from 'victory'

export default class DonutChart extends Component {
  render() {
    return (
      <VictoryPie style={{
          labels: {
            fill: 'black',
            fontSize: 12
          }
      }}
      data={this.props.data}
      innerRadius={125}
      colorScale={[
        "rgb(3, 93, 14)",
        "rgb(12, 57, 17)",
        "rgb(92, 170, 249)",
        "rgb(188, 229, 119)",
        "rgb(150, 211, 99)",
      ]}
      animate={{
          duration: 1000,
          onEnter: {
            duration: 500,
            before: () =>
              ({y: 0, label: " "}),
            after: (datum) =>
              ({y: datum.y})
          }
        }}
      />
    );
  }
}
