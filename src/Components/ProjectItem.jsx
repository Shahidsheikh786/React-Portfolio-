
import "./styles/ProjectItem.scss"

const ProjectItem = ({item}) => {
  return (
    
  <div className="ProjectItem">
  
  <div className="overly">
  <a href={item.diployedUrl} > <i class="fa-solid fa-eye"></i> </a>
  
  <a href="#"> <i class="fa-solid fa-code"></i> </a>
  </div>
  
  
  <img src={item.imageUrl} />
  <div className="itemName">{item.name}</div>
  </div> 
  )
}

export default ProjectItem;