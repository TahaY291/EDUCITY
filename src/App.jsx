import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {
  const [videoHide, setVideoHide] = useState(true)
  function videoDisplay() {
    setVideoHide(prev => !prev)
  }
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='Our PROGRAM' title='What we Offer' />
        <Programs />
        <About videoDisplay={videoDisplay} />
        <Title subTitle='Gallery' title='Campus Photo' />
        <Campus />
        <Title subTitle='Testimonials' title='What Students Says' />
        <Testimonials />
        <Title subTitle='Contact Us' title='Get in touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer videoDisplay={videoDisplay} videoHide={videoHide} />
    </div>
  )
}

export default App
