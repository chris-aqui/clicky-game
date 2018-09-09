import React, { Component } from 'react';
import "./IconCard.css";


class IconCard extends Component {
  render(){
    return (
      <section className="tc pa3 pa5-ns mainStyle">
        <article className="hide-child relative ba b--black-20 mw5 center">
          <img src={this.props.image} className="db" alt="Photo" />
        </article>
      </section>
    )
  }
}

export default IconCard;