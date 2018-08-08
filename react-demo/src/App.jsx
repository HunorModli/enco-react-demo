//? from node_modlules:
import React, { Component } from 'react';

//? styles:
import './styles/bootstrap.min.css';

//? components:
import Navbar from './components/Navbar';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
