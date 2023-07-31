import React from 'react'
import {Link} from 'react-scroll'
import "./TopContent.css";
const TopContent = () => {
  return (
    <div className='topContent'>
    <div className='topContent__conatiner'>
    <h1>Miss. Kayalvizhi U</h1>
    <h4>
    A proffesional Front-End Developer
    </h4>
    <p>
    M.SC IT, graduate with 2+ years of experience as a Front-End Developer who has  <br />
    extensively worked with ReactJS in an agile development environment  <br />
    to realize various features from concept to reality.</p>
    <a href="https://drive.google.com/file/d/1-bBZFt4mL17i4Ft0GztIhpMkLYqDb15v/view?usp=drive_link">
    <button className='topContent__downloadButton'>
    Download CV
    </button>
    </a>
    <Link to ="projects" smooth ={true} duration={500}>
    <button className='topContent__workButton'>My Work</button>
    </Link>
    </div>
    </div>
  )
}

export default TopContent
