import React, { Component } from 'react';
import { connect } from 'react-redux';
import { COUNTER_INCREMENT } from "../actions/counter-increment";
import { COUNTER_DECREMENT } from "../actions/counter-decrement";


class Counter extends Component {

  increment = () => {
    this.props.dispatch({ type: COUNTER_INCREMENT });
  }

  decrement = () => {
    this.props.dispatch({ type: COUNTER_DECREMENT });
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
            <h1 className="display-1">{this.props.count}</h1>
          </div>
          <div className="col-5 pt-5">
            <button className="btn btn-lg btn-outline-primary" onClick={this.increment}>+</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);