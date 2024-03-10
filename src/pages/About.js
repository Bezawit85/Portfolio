import React from 'react'
import './about.css';
import Navbar from './Navbar';
import me from '../assets/me.jpg';

const About = () => {
  return (
    <div className='about'>
<div id='about' className='section'>
      <Navbar transparent/>
      <div className='section1'>
      <h1 className='abouth1'>About me</h1>
      <div className='text'>
          <p>I'm Bezawit Eshetu. I am a passionate website designer, driven to discover innovative solutions.
             Furthermore, I am committed to personal and professional growth. I bring a range of relevant skills
              and experience to the table. Let's connect and explore the possibilities together!</p>
        </div>
        </div>
        </div>
        <br />
      <div className='section'>
         <div className='profile'> <img className='img' src={me} alt='Profile' /> </div>
         <div>
          <p className='skills'>Skills</p>
          <ul className='skill'>
            <li>Problem solving</li>
            <li>Canva Design</li>
            <li>Web Design</li>
          </ul>
          <ul className='skill'>
            <li>Interpersonal Skill</li>
            <li>Figma Design</li>
            <li>Coding</li>
          </ul>
          </div>
        </div>
    </div>
  )
}

export default About