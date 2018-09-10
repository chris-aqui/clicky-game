import React, { Component } from 'react';
// import "./IconCard.css";


// const shuffleArray = (array) => {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// };
const IconCard = props => (
  <section id={props.id} className="tc pa3" value={props.id} onClick={props.clickedPlayer}>
    <article className="w4 pa2 ba bb b--black-10">
      <img src={props.image} className="db" alt="Photo" />
    </article>
  </section>
)


  // render(){
  //   return (
      // <section id={this.props.id} className="tc pa3" value={this.props.id} onClick={this.props.clickedPlayer(this.props.id)}>
      //   <article className="w4 pa2 ba bb b--black-10">
      //     <img src={this.props.image} className="db" alt="Photo" />
      //   </article>
      // </section>
//     )
//   }
// }

export default IconCard;