import { delay, motion } from "framer-motion"
import React from "react"

export default function AnimationComponent(props){
    return(
        <div>
        <motion.div animate={{ 
            scale: [1, 2, 10, 1, 1],
            rotate: [0, 360, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"],
            
            }}
            transition={{ease: "linear",
            duration: 10,
            x: { duration: 1 }}} >
        <h1>HELLO</h1>

        </motion.div>
    


        </div>
      
    )

    } 
