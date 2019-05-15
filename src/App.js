import React, { Component } from 'react';

import './App.css';

import AboutMe from './module/AboutMe';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <AboutMe />
      </div>
    );
  }
}

export default App;
