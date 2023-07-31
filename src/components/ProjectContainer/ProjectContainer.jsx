import React from 'react';
import { LinearProgress } from '@material-ui/core'
import { Element } from 'react-scroll';
import "./ProjectContainer.css";
import Projects from "../Project/Project";
const ProjectContainer = () => {
  const projects =[
    {
      img:"https://t3.ftcdn.net/jpg/02/94/21/86/360_F_294218689_yJZmTdwqM4Yez5bAPPGnXulyhlfTeaUT.jpg",
      title: "k360",
      desc:"Online Food ordering system is a process in which one can order various foods and beverages from some local restaurant and hotels through the use of internet, just by sitting at home or any place. And the order is delivered to the told location.The Online Food Order System In ReactJs , JavaScript, HTML and CSS." ,
      link:"www.google.com"
    },
    {
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQfPFqCX0RX2PN_tVTv91bHKnUPBMIJP9pgQ&usqp=CAU",
      title: "Airlines",
      desc:"Singapore airlines provides an seamless online booking experience.our airlines is recoginzed as one of the leading airlines in the world. In our system used to book a tour anywhere in the world by a single dynamic website which help the user to know all about the places and tour details in a single website. In this website Front-End we used Reactjs , javascript and Back-End we used Node JS" ,
      link:"www.google.com"
    },
    
  ];
  return (
    <div>
    <Element className='ProjectContainer' id ="projects">
    <h1>Projects</h1>
    <p>Here some projects which i done for making lives of people easy</p>
    <div className='ProjectContainer__projects'>
     {

      projects.map((project, index) => {
        return (
          <Projects 
          key ={index} 
          img ={project.img} 
          title={project.title}
          desc ={project.desc} 
          link ={project.link} 
          />
     ); })}
    </div>
    </Element>
     </div>
  );
}

export default ProjectContainer
