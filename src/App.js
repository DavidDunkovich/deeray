import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Pagination } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pagination defaultActivePage={5} totalPages={10} />
      </div>
    );
  }
}

export default App;
