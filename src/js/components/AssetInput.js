import React, { Component } from 'react';
import TextField from 'material-ui/TextField'

export default class AssetInput extends Component {
  render() {
    return (
      <TextField type='number'
                 name={this.props.name}
                 floatingLabelText={this.props.name}
                 onChange={this.props.inputChanged}/>
    );
  }
}
