import React, { Component } from 'react';
import './App.css';
//  my compoenent
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import IconCard from './components/IconCard';
import Icons from './icons.json';


class App extends Component {


  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        {Icons.map(icon => (
        <IconCard id={icon.id} image={icon.image}/>
        ))}
      </div>
    );
  }
}

export default App;
