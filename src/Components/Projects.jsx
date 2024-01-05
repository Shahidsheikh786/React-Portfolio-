import "./styles//Projects.scss"
import { useState, useRef } from "react";
import AllProjects from "./AllProjects"
import ProjectTag from "./ProjectTag"
import AllProject_Data from "../assets/ProjectsData"
import ProjectItem from "./ProjectItem"

import {motion , useInView} from "framer-motion"

const Projects = () => {
  
 
  const [projectsData, setProjectsData] = useState("All");
   
   const ref = useRef(null)

  const isInView = useInView( ref, {once : true})
  
  const cardVeriants = {
    initial : {y:70 , opacity : 0},
    animate : {y:0 , opacity : 1},
    
  }
  const handleTagChange  = (tag) =>{
    setProjectsData(tag)
  }
 
  
  const filterdData = AllProject_Data.filter((project)=>{
  return project.tag.includes(projectsData)
  })
 
  
  return (
  <div className="Projects" ref={ref}>
 <h1 className="heading">My Projects </h1>
 
 
 <div className="handle-projcets">
 
<ProjectTag
name="All" 
onClick={handleTagChange}
isSelected={projectsData === "All"}
/>
<ProjectTag
name="Mejor" 
onClick={handleTagChange}
isSelected={projectsData === "Mejor"}
/>
<ProjectTag
name="Minor" 
onClick={handleTagChange}
isSelected={projectsData === "Minor"}
/>


 </div>
 
 <ul className="projects-content" >

  {filterdData.map((project,index)=>{
   return <motion.li 
   key={index}
   transition={{duration: index  }}
   variants={cardVeriants} 
   initial="initial"
   animate={isInView
   ? "animate" : "initial"} > 
   
   <ProjectItem item={project}/>
   </motion.li>
 })}
 
 </ul>
 
  </div>
  )
}

export default Projects;