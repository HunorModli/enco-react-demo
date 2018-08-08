import React, { Component } from 'react';

class Counter extends Component {

  state = { count: 0 }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  }

  render() {

    return (
      <div className="container">
        <div className="row">
          <div className="col-12 text-center pt-5">
            <h2>Current Count: </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-5 text-right pt-5">
            <button className="btn btn-lg btn-outline-primary" onClick={this.decrement}>-</button>
          </div>
          <div className="col-2 text-center pt-4">
            <h1 className="display-1">{this.state.count}</h1>
          </div>
          <div className="col-5 pt-5">
            <button className="btn btn-lg btn-outline-primary" onClick={this.increment}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Counter;