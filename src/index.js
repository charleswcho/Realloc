import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Page components
import RiskPage from './js/components/RiskPage'
import AllocPage from './js/components/AllocPage'
import AdjustPage from './js/components/AdjustPage'

import Navbar from './js/components/Navbar'

// CSS
import './css/App.css'
import './css/RiskPage.css'
import './css/AllocPage.css'
import './css/AdjustPage.css'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  slider: {
    selectionColor: '#2f97eb'
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <Navbar/>
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

const Routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={RiskPage}/>
      <Route path='alloc' component={AllocPage}/>
      <Route path='adjust' component={AdjustPage}/>
    </Route>
  </Router>
);

ReactDOM.render(
  Routes,
  document.getElementById('root')
);
