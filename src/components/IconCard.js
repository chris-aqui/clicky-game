import React, { Component } from 'react';
// import "./IconCard.css";


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};
class IconCard extends Component {

  state = {
    click: false,
    clicked: [],
  }

  handleClick = (id) => {
    console.log(`Picture clicked with id: ${this.props.id}`);
    this.setState({
      click: true,
      clicked: id
    })
  }


  render(){
    return (
      <section id={this.props.id} className="tc pa3" onClick={this.handleClick}>
        <article className="w4 pa2 ba bb b--black-10">
          <img src={this.props.image} className="db" alt="Photo" />
        </article>
      </section>
    )
  }
}

export default IconCard;