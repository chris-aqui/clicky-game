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


  render() {
    return (
      <div>
        <NavBar/>
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
