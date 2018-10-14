import React from 'react';
import TextField from 'material-ui/TextField';

const STYLES = {
  floatingLabelStyle: {
    color: '#2f97eb'
  },
  floatingLabelFocusStyle: {
    color: '#2f97eb'
  },
  underlineStyle: {
    borderColor: '#2f97eb'
  }
};

const AssetInput = ({ name, value, inputChanged }) => (
  <TextField
    type="text"
    name={name}
    value={value}
    floatingLabelText={name}
    floatingLabelStyle={STYLES.floatingLabelStyle}
    floatingLabelFocusStyle={STYLES.floatingLabelFocusStyle}
    underlineFocusStyle={STYLES.underlineStyle}
    onChange={inputChanged}
  />
)

export default AssetInput;
