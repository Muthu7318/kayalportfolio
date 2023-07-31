import React from 'react'
import { IconButton } from '@material-ui/core';
import { Element } from 'react-scroll';
import "./ContactConatiner.css";
import {Instagram,LinkedIn} from "@material-ui/icons"
const ContactConatiner = () => {
  return (
    <div>
    <Element className='contact' id ="contact">
    <h1>Contact</h1>
    <div className='ContactContainer'>
    <p>
    Email : <span>Kayalvizhium1412@gmail.com</span>
    </p>
    <p>
    Mobile No: <span>8072160410</span>
    </p>
    <div className='contact_icons'>
    <a href="https://www.linkedin.com/in/kayalvizhi-u-2659441a1">
    <IconButton>
    <LinkedIn/>
    </IconButton>
    </a>
    <a herf="https://instagram.com/kayalvizhiulaganathan?igshid=ZDc4ODBmNjlmNQ%3D%3D">
    <IconButton>
    <Instagram />
    </IconButton>
    </a>
    </div>
    </div>
    </Element>
    </div>
  )
}

export default ContactConatiner;
