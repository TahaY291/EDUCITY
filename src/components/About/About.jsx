import React from 'react'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
 import './About.css'
const About = ({videoDisplay}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt=""  className='play-icon' onClick={videoDisplay} />
        </div>
        <div className="about-right">
            <h3>About University </h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark ona transformative educational journey with our universtiy comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experience needed to excel in the dynamic field of education.</p>
            <p>
                With a focus on innovation, hands on learning, and personalized mentorship, our program prepare aspiring aducators to make a meaningful impact in classrooms, scholls and communities.
            </p>
            <p>
                Whatever you aspire to become a teacher administrator , counsler , or educational leader , our diverse range of programs offer the perfect pathway to achieve your goals and unlock your full potential in shapping the future of education.
            </p>
        </div>
    </div>
  )
}

export default About
