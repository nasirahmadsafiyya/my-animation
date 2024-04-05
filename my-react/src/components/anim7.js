import  {React, useState } from "react";
import {motion} from "framer-motion"

function anim7 () {

    const [open, setOpen] = useState(false)

    const variants ={
        hidden:{opacity: 0},
        visible:{opacity: 1, rotate: 360, scale: 3}
    }

    return(
            <div className="flex align-center justify-between m-28">
        <motion.div className="bg-cyan-500 p-6 m-4 w-28 text-pink-600 font-bold text-2xl flex align-center justify-center rounded-xl"
        variants={variants}
        animate={open ? "visible" : "hidden"}
        transition={{duration: 2, delay: 1}}
        >
                <h1 className="">I am coming soon</h1>
        </motion.div>
        <button onClick={() => setOpen(prev => !prev)} className="bg-pink-600 text-cyan-500 font-bold w-10 h-10 inline-block rounded m-4 ">Hey</button>
            </div>
    )
}

export default anim7;