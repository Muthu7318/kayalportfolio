import React from 'react'
import { Element } from 'react-scroll';
import skilling from "../../assets/imagesn.jpg";
import { LinearProgress } from '@material-ui/core'
import "./SkillContainer.css";
const SkillContainer = () => {
  return (
    <div>
      <Element className='skillContainer' id='skils'>
       <div className='skillContainer__image'>
       <img src={skilling} alt='skills'/>
       </div>
       <div className='skillContainer__text'>
       <h2>SKILLSET</h2>

       <div className='skillContainer__skillset'>
          <h5>React</h5>
       </div>
       <div className='skillContainer__slider skillContainer__slider1'>
           <LinearProgress variant='determinate' value={90} />
       </div>
       
       <div className='skillContainer__skillset'>
          <h5>Javascript</h5>
       </div>
       <div className='skillContainer__slider skillContainer__slider2'>
           <LinearProgress variant='determinate' value={85} />
       </div>
       
       <div className='skillContainer__skillset'>
          <h5>HTML</h5>
       </div>
       <div className='skillContainer__slider skillContainer__slider3'>
           <LinearProgress variant='determinate' value={70} />
       </div>
       
       <div className='skillContainer__skillset'>
          <h5>CSS</h5>
       </div>
       <div className='skillContainer__slider skillContainer__slider4'>
           <LinearProgress variant='determinate' value={68} />
       </div>
       </div>

       
       

      </Element> 
      
    </div>
  )
}

export default SkillContainer
