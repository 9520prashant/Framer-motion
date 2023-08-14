import  { useState } from 'react'
import {motion} from "framer-motion"
const Box1 = () => {
  
  const [isAnimate, setIsAnimate]  = useState(false);
  const toggleAnimation = ()=>{
    setIsAnimate(!isAnimate);
  }
  return (
    <div>
        <div className="box-conntainer">
            <motion.div 
             className="box"
             animate={{
                x:isAnimate ? 850 : 0,
                opacity:isAnimate ? 1 : 0.5,
                rotate:isAnimate ? 360 : 0,
             }}
             initial={{
                opacity:0.1,
             }}
             transition={{
                type:"spring",
                stiffness:60,
             }}
             onClick={toggleAnimation}
            >
            </motion.div>
        </div>
    </div>
  )
}

export default Box1;
