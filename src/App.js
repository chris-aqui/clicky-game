import React, { Component } from 'react';
import './App.css';
//  my compoenent
import NavBar from './components/NavBar'
import Banner from './components/Banner'


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
      </div>
    );
  }
}

export default App;
