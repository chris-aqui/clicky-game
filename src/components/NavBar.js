import React, { Component } from "react";
import "tachyons";

class NavBar extends Component {

  render() {
    return (
      <header className="bg-black-60 w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc">
        <nav className="f6 fw6 ttu tracked">
          <a className="link dim white dib mr3"  title="Home">Game Name</a>
          <p className="link dim white dib mr3" >Status: {this.props.result}</p>
          <a className="link dim white dib mr3" title="Store">Score: {this.props.currentScore} </a>
          <a className="link dim white dib" title="Contact">Top Score: {this.props.topScore} </a>
        </nav>
      </header>
    )
  }
}

export default NavBar;