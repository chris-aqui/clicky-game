import React from 'react';


const IconCard = props => (
  <section id={props.id} className="tc pa3 hvr-float-shadow animated zoomInUp" value={props.id} onClick={() =>
  props.clickedPlayer(props.id)
  }>
    <article className="w4 pa2 ">
      <img src={props.image} className="db" alt="game-char" />
    </article>
  </section>
)

export default IconCard;