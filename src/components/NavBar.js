import React, { Component } from "react";
// import "tachyons";

const style = {
  bgDark: {
    backgroundColor: `rgb(1,0,1)`
  }
}

const NavBar = props => (
  <header style={style.bgDark} className=" w-100 ph3 pv3 pv2-ns ph4-m ph5-l tc">
    <nav className="f6 fw6 ttu tracked">
      <a className="link dim white dib mr3"  title="Home">The Game</a>
      <p className="link dim white dib mr3" >Status: {props.status}</p>
      <a className="link dim white dib mr3" title="Store">Score: {props.currentScore}</a>
      <a className="link dim white dib" title="Contact">Top Score: {props.topScore}</a>
    </nav>
  </header>
)

export default NavBar;