import {React, useState} from "react";
import { motion } from "framer-motion"

function Anim9() {

        const [open, setOpen] = useState(false);

    const variants = {
        visible: {opacity: 1, x:500, //rotate:360, 
        delay: 2, transition:{typeof:"spring", stiffness: 300, damping:100}},
        hidden: {opacity: 0}
    }

    return(
        <div className="flex align-center justify-between m-6">
            <motion.div className="bg-cyan-500 p-5 w-40 m-12 rounded-full text-center font-extrabold whitespace-nowrap"
            variants={variants}
            animate={open ? "visible" : "hidden"}
            >
                <h1>its sunny today</h1>
            </motion.div>

            <button onClick={() => setOpen(prev => !prev)}className="bg-blue-600 p-5 m-12 h-10  rounded-full text-center inline-block font-bold hover:p-6">Click</button>
        </div>
    )
}

export default Anim9;