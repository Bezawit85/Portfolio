import React from 'react'
import './navigation.css';

const Navbar = ({ transparent }) => {
  return (
    <div className={`navigation ${transparent ? 'transparent' : ''}`}>
        <h2 className='logo'>Resume</h2>
        <ul className='navlist'>
            <li className='navitem'>
              <a href="/" className='lists'>
              Home
            </a>
            </li>
            <li className='navitem'>
            <a href="/about"  className='lists'>
              About
            </a>
            </li>
            <li className='navitem'>
            <a href="/projects"  className='lists'>
              Projects
            </a>
            </li>
            <li className='navitem'>
            <a href="/blog"  className='lists'>
              Blog
            </a>
            </li>
            <li className='navitem'>
            <a href="/contact"  className='lists'>
              Contact
            </a>
            </li>
        </ul>
    </div>
  )
}

export default Navbar