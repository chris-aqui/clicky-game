import React, { Component } from 'react';
import './App.css';
//  my compoenent
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import IconCard from './components/IconCard';
import Icons from './icons.json';
//
import "./components/IconCard.css";


class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    status: "try again",
    clicked: [],
    touch: 0
  };

  // handleClick = id => {
  //   this.setState.touch
  // }


  render() {
    return (
      <div>
        <NavBar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.status}/>
        <Banner />
        <div className='mainStyle'>
        {Icons.map(icon => (
        <IconCard id={icon.id} image={icon.image}/>
        ))}
        </div>
      </div>
    );
  }
}

export default App;
