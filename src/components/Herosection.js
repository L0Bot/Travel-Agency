import React from 'react'
import Button from './Button'
import './Herosection.css'
import '../App.css';


function Herosection() {
  return (
    <div className="hero-container">
      <video src="../../public/videos/waterfall.mp4" autoPlay loop muted/>
      <h1>L'aventure vous attends !</h1>
      <p>Qu'attendez-vous ?</p>
      <div className="hero-btns">
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Commencer</Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Regarder <i className="far fa-play-circle"></i></Button>
      </div>
    </div>
  )
}

export default Herosection;
