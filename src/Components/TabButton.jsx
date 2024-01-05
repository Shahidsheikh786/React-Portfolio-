
import "./styles/TabButton.scss"
import {motion} from "framer-motion"


const TabButton = ({active , selectTab , children}) => {
  
  const buttonClasses = active ? "active" : "" ;
  const variants = {
   default : {width: 0} ,
   active : {width : "80%"} ,
  }
  
  return (
  <div className="TabButton">
  <button onClick={selectTab}>
  <p className={`${buttonClasses}`} >
  {children}
  </p>
  <motion.div variants={variants}
  animate={active ? "active" : "default" } className="border-btm-animate"
  >  </motion.div>
  </button>
  </div>
  )
}

export default TabButton;