import { React } from "react";
import { motion } from "framer-motion";

function Anim2() {


    return (
        <div className="">
            <motion.div className="m-24 p-6 font-bold bg-yellow-600 w-24 text-pink-600 flex justify-center align-center"
                initial={{ opacity: 0.5, scale: 1 }}
                animate={{ opacity: 1, scale: 2 }}
                transition={{ duration: 2, delay: 2 }}
            >
                <p>i am an animation</p>
            </motion.div>
        </div>
    )
}

export default Anim2;