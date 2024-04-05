import { React, useState } from "react";
import { motion } from "framer-motion";

function Anim6() {

    const [open, setOpen] = useState(false)

    const variants ={
       hidden: {opacity: 0, transition: {duration: 3}},
       visible: {opacity: 1, x:300, y: 500, transition: {duration: 3, delay: 2}},
       
    }

    return (
        <div className="">
            <motion.div className="m-24 p-6 font-bold bg-yellow-600 w-24 text-pink-600 flex justify-center align-center"
            variants={variants}
              animate={open ? "visible" : "hidden"}
            >
                <p>i am an animation</p>
            </motion.div>

            <button onClick={() => setOpen(prev=>!prev)} className="bg-blue-600 p-4 rounded">Click</button>
        </div>
    )
}

export default Anim6;