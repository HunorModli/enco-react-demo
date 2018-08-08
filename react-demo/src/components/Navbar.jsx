import React, { Component } from 'react';

export default class Navbar extends Component {

  render() {

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="./index.html">En-Co React Demo App</a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item pl-4">
              <a className="nav-link active" href="./counter.html">Counter</a>
            </li>
            <li className="nav-item pl-4">
              <a className="nav-link" href="./posts.html">Posts</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#dropdown" role="button" aria-haspopup="true" aria-expanded="false">Módli Hunor Dániel</a>
              <div className="dropdown-menu" x-placement="bottom-start">
                <a className="dropdown-item" href="./profile.html">Profile</a>
                <a className="dropdown-item" href="#logout">Logout</a>
                <a className="dropdown-item" href="#settings">Settings</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
