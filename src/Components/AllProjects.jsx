
import ProjectItem from "./ProjectItem"
import ProjectsData from "../assets/ProjectsData"


const AllProjects = () => {
  return (

  <div className="AllProjects">
  <div className="projects-group"> 
  {ProjectsData.map((e)=>{ 
  return <ProjectItem  item={e}/> 
  })}
  </div>
  </div>
  )
}

export default AllProjects;