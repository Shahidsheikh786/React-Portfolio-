
import "./styles/Home.scss"
import { TypeAnimation } from 'react-type-animation';
import {motion } from "framer-motion"
import resume from "../../public/resume.png"

const Home = () => {
  return (
  <div className="Home">
  
  <motion.div className="content" 
  
  initial={{scale:0}}
  transition={{ 
    
    type: "spring",
    stiffness: 260,
    damping: 20,
    speed:.5,
    
  }}
    
  animate={{ scale:1}}
  >
  
  
  <div
  className="main-line">Hello, I'm  <br/>
  <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        " Mohammad Shahid  ",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        "Frontend Developer",
        1000,
        "React Developer",
        1000,
       
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '40px', display: 'inline-block' }}
      repeat={Infinity}
    />
  
  </div>
  
  <p> Dedicated, ambitious React developer ready to learn and grow.</p>
  
  <button id="hireMe-btn">Hire me</button>
   <a href={resume} download >  <button id="CV-btn">Download CV </button> </a> 
  </motion.div>
  
  <motion.div initial={{scale:0}}
  transition={{ type: "spring",
    stiffness: 260,
    damping: 20}}
  animate={{ scale:1}}
  className="image"><img src="shahid.jpg"/> </motion.div>
  
  </div>
  
  )
}

export default Home;
