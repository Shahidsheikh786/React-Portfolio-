
import "./styles/ProjectTag.scss"

const ProjectTag = ({name, onClick, isSelected}) => {
  
  const buttonClass = isSelected ? "active": "";
  
  
  return (
   <button className={`tagItem ${buttonClass}`} onClick={()=>onClick(name)}> {name} </button>
  )
}

export default ProjectTag;