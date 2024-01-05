import "./styles/About.scss"
import { useState, useTransition} from "react";

import TabButton from "./TabButton"
import { Routes ,Route , Link} from "react-router-dom"

import {motion , useInView} from "framer-motion"

const About = () => {
  
  const [aboutData, setAboutData] = useState("Skills");
  const [isPending , startTransition] = useTransition();
  
  const TAB_DATA =[
    {
      id : "Skills",
      title : "Skills",
      content : (
        <ul>
       <li>Html</li>
       <li>Css</li>
       <li>Javascript</li>
       <li>React js </li>
       <li>Bootstrap</li>
       <li>Firebase</li>
       </ul>
        )
    },
    {
      id : "Educations",
      title : "Educations",
      content : (
        <ul>
       <li>12th pass from science </li>
       </ul>
        )
    },
    {
      id : "Certificates",
      title : "Certificates",
      content : (
        <ul>
       <li>Don have Certificates </li>
       </ul>
        )
    },
    ]
  
  
  const handleTabChange = (id) =>{
    startTransition(()=>{
      setAboutData(id);
    })
  }
  
  return (
    <div className="About">
      <div className="image">
        <img src="about-image.png" />
      </div>
      <div className="content">
        <h1>About Me </h1>
        <p className="content-text"> i am Mohammad shahid from achalpur i am
        18 year old and i am independent learning ardent fan of React with an impressive
        portfolio of worthwhile projects demonstrating expertise in frontend
        development. I have practical experience designing captivating user
        interfaces and am dedicated to lifelong learning. looking for chances to
        bring my enthusiasm and expertise to exciting projects in a team
        setting.


        </p>
        
     <div  className="SEC-area">
    
        <TabButton
        selectTab = {()=>handleTabChange("Skills")}
        active={aboutData === "Skills"} 
        > Skills </TabButton>
        
        <TabButton
        selectTab = {()=>handleTabChange("Educations")}
        active={aboutData === "Educations"} 
        > Educations </TabButton>
        <TabButton 
        initial={{background:"red"}}
        animate={{background:"yellow"}}
        selectTab = {()=>handleTabChange("Certificates")}
        active={aboutData === "Certificates"} 
        > Certificates </TabButton>

     </div>
     
     <div 
     
     transition={{duration:2}}
     className="dataContent">{TAB_DATA.find((t)=> t.id ===
     aboutData).content} </div>
        
      </div>
      
      <div>
     
      
      
      </div>

    </div>
  )
}

export default About;