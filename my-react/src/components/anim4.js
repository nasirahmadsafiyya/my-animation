import { React } from "react";
import { motion } from "framer-motion";

function Anim4() {

   
    return (
        <div className="">
            <motion.div className="m-24 p-6 font-bold bg-yellow-600 w-24 text-pink-600 flex justify-center align-center"
              initial={{scale: 0, opacity: 1}}  
                animate={{scale: 1, delay: 1,}}
                transition={{scale: 1, delay: 3}}
                drag
            >
                <p>i am an animation</p>
            </motion.div>
        </div>
    )
}

export default Anim4;