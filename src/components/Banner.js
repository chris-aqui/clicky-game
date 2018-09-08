import React from 'react';

const Banner = props => (
  <article class="mw7 center ph3 ph5-ns tc br2 pv5 bg-black-90 mb5">
  <img src="./img/pacman.gif" alt="pacman"/>
    <h1 class="fw6 f3 f2-ns lh-title mt0 mb3 white">
    The Game!
    </h1>
    <h2 class="fw2 f4 lh-copy mt0 mb3 white">
    Click on an image to earn points, but don't click on any more than once!
    </h2>
  </article>
);

export default Banner;