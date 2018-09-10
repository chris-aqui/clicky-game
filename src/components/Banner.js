import React from 'react';

const style = {
  logoIcon: {
    width: 150,
    heigth: 100
  },
  bgDark: {
    backgroundColor: `rgb(1,0,1)`
  }
}

const Banner = props => (
  <article style={style.bgDark} className="mw7 center ph3 ph5-ns tc br2 pv5 bg-black-90 mb5">
    <img style={style.logoIcon} className='logoIcon' src="./img/pacman.gif" alt="pacman"/>
    <h1 className="fw6 f3 f2-ns lh-title mt0 mb3 white">
    The Game!
    </h1>
    <h2 className="fw2 f4 lh-copy mt0 mb3 white">
    Click on an image to earn points, but don't click on any more than once!
    </h2>
  </article>
);

export default Banner;