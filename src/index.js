import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Page components
import RiskPage from './js/components/RiskPage'
import AllocPage from './js/components/AllocPage'
import AdjustPage from './js/components/AdjustPage'

// CSS
import './css/App.css';
import './css/RiskPage.css';
import './css/AllocPage.css';
import './css/AdjustPage.css';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
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
