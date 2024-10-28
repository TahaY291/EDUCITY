import React from 'react'
import dark_arrow from '../../assets/dark-arrow.png'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>We Ensure better eduction for a better world</h1>
        <p>Our cutting edge curriculum is designed to empower students with the knowledge, skills, and the experiences needed to excek in the dynamic field of education</p>
        <button className='btn'>Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </div>
  )
}

export default Hero