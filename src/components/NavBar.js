import React, { Component } from "react";
import "tachyons";

class NavBar extends Component {

  render() {
    return (
      <header className="bg-black-60 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <a className="link dim white dib mr3" href="#" title="Home">Game Name</a>
          <p className="link dim white dib mr3" href="#">Your answer state</p>
          <a className="link dim white dib mr3" href="#" title="Store">Score: </a>
          <a className="link dim white dib" href="#" title="Contact">Top Score: </a>
        </nav>
      </header>
    )
  }
}

export default NavBar;