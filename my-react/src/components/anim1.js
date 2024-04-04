import { React } from "react";
import { motion } from "framer-motion";

function Anim1() {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    return (
        <div className="">
            <motion.div className="m-24 p-6 font-bold bg-yellow-600 w-24 text-pink-600 flex justify-center align-center"
                variants={variants}
                transition={{ duration: 2, scale: 2 }}
                animate={{ duration: 2, scale: 2, x: 250, y: 300, rotate: 360 }}

            >
                <p>i am an animation</p>
            </motion.div>
        </div>
    )
}

export default Anim1;
