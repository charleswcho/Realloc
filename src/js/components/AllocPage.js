import React, { Component } from 'react';
import { Link } from 'react-router'

export default class AllocPage extends Component {
  render() {
    return (
      <div className="alloc-page">
        <h1>AllocPage</h1>
        <h2><Link to={'/adjust'}>Continue</Link></h2>
      </div>
    );
  }
}
