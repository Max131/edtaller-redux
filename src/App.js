import React, { Component } from 'react';
import Calculator from './components/Calculator';
import History from './components/History'

class App extends Component {
  render() {
    return (
        <React.Fragment>
          <Calculator />
          <History />
        </React.Fragment>
    );
  }
}

export default App;
