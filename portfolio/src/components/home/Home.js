import React from 'react'
import './home.css';
import Skills from '../skills/Skills'
import Projects from '../projects/Projects';
import Contact from '../contact/Contact'
const Home = () => {
  return (
    <section >
      <div className="home-container">
        <div className="home-text">
          <h3>Hello, my name is</h3>
          <h1>Jorigala Ruthik</h1>
          <div className="text-amimate">
            <span >I'm a </span>
            <span className='text-role'>Full Stack Developer.</span>
          </div>
        </div>
        <div className="home-pic">
          <img src='./Images/profilePic.png' alt='profile pic' className='homeProfilePic'/>
          <div className='image-background'></div>
        </div>
      </div>
      <Skills/>
      <Projects/>
      <Contact/>
    </section>
  )
}

export default Home
