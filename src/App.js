import React, { Component } from 'react';
import './App.css';
//  my compoenent
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import IconCard from './components/IconCard';
import Icons from './icons.json';
//
import "./components/IconCard.css";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
class App extends Component {

  state = {
    currentScore: 0,
    topScore: 0,
    result: "",
    gameOver: false,
    clicked: [],
    Icons
  };

  // When the page loads and the component mounts,
  // display starting message
  componentDidMount() {
    this.setState({result: "Click a player to get started"})
  }
  //
  // When a player gets clicked,
  // increase points and add id of element to array.
  clickedPlayer = (id) => {
    console.log(`Picture clicked with id: ${this.id}`);
    if(!this.state.clicked.includes(id)){
      this.state.clicked.push(id);
      this.pointIncrease();
    } else {
      // this.resetGame();
    }
  }

  // When the user makes a new click, increment the points by 1 and check if the user has won
  pointIncrease = () => {
    let score = this.state.currentScore + 1;
    if (score === this.state.Icons.length) {
      this.setState({
        result: "You win! Start clicking to play again!",
        topScore: score,
        currentScore: 0,
        clicked: [],
        Icons,
        gameOver: false
      })
    } else if (score > this.state.topScore) {
      this.setState({
      topScore: score,
      currentScore: score,
      result: "Correct! New high score!",
    })
    } else {
      this.setState({
        currentScore: score,
        result: "Correct!"
      });
    }
    this.resetIconArray();
  }

  // reset the game when the user chooses a duplicate
  resetGame = () => {
    this.setState({
      points: 0,
      topScore: this.state.topScore,
      result: "You Loss!",
      clicked: [],
      Icons,
      gameOver: true
    });
    this.resetIconArray();
  }

  // set the array to be mapped to a new scrambled version using shuffle algorithm
  resetIconArray = () => {
    let newScramble = shuffleArray(Icons);
    this.setState({Icons: newScramble})
  }

  render() {
    return (
      <div>
        <NavBar topScore={this.state.topScore} currentScore={this.state.currentScore} status={this.state.result}/>
        <Banner />
        <div className='mainStyle'>
        {Icons.map(icon => (
        <IconCard
          id={icon.id}
          image={icon.image}
          clickedPlayer={this.clickedPlayer}
        />
        ))}
        </div>
      </div>
    );
  }
}

export default App;
