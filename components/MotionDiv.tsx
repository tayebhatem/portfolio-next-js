import React, { ReactNode } from 'react'
import {Variants, motion} from "framer-motion"
const MotionDiv = ({children}:{children:ReactNode}) => {
    const divVariants: Variants = {
        offscreen: {
          opacity:0,
          y:100
        },
        onscreen: {
         opacity:1,
         y:0,
         transition: {
          duration: 0.5
        }
    
        }
    }
  return (
    <motion.div
    layout
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
    
    >
     <motion.div variants={divVariants} >
        {
        children
        }
    </motion.div>   
    </motion.div>
  )
}

export default MotionDiv