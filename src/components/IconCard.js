import React, { Component } from 'react';
// import "./IconCard.css";


class IconCard extends Component {
  render(){
    return (
      <section className="tc pa3">
        <article className="w5 pa2 bb b--black-10">
          <img src={this.props.image} className="db" alt="Photo" />
        </article>
      </section>
    )
  }
}

export default IconCard;