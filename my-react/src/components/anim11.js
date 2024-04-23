import { React } from "react";
import { motion } from "framer-motion";


function anim11() {
    
    const variants={
        visible: {
            opacity: 1,
            delay: 2
        },
        hidden:{opacity: 0}
    }

    return(
        <div className="flex align-center justify-between bg-gray-500 text-white p-6 rounded-lg text-2xl">
            <motion.h1 className="" initial={{opacity: 0.5, scale: 0.8}} animate={{opacity: 1, scale:1}}>Hello</motion.h1>
            <ul className="flex align-center justify-rouund">
                <li className="mx-2">Welcome</li>
                <li className="mx-2">Welcome</li>
                <li className="mx-2">Welcome</li>
            </ul>
        </div>
    )
}

export default anim11;