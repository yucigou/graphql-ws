import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'

const HelloQuery = gql`
  query Hello {
    message
  }
`;

class App extends Component {
  render() {
    const { helloQuery } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Message from GraphQL Websocket backend 
          <string>{ helloQuery.message }</string>
        </p>
      </div>
    );
  }
}

export default graphql(HelloQuery, { name: 'helloQuery' })(App);