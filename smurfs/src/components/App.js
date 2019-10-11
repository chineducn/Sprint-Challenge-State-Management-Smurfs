import React, { Component } from "react";
import { connect } from 'react-redux';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

import "./App.css";
import * as actionCreators from '../state/actionCreators';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <button
          onClick={this.props.getSmurfs}
        >
          Get Smurfs
  
        </button>
        <SmurfForm
          onSubmit={this.props.addSmurf}
        />
        <SmurfList
          smurfList={this.props.smurfList}
        />
      </div>
    );
  }
}

export default connect(state => state, actionCreators, )(App);
