import { React } from "react"
import { motion } from "framer-motion";

function anim10() {

    const items = ["item1", "item2", "item3", "item4"]

    const variants = {
        visible: {
            opacity: 1, 
            x: 30,
            transition: { staggerChildren: 0.5 }
        },
        hidden: { opacity: 0 }
    }

    return (
        <div>
            <motion.ul initial="hidden" animate="visible" variants={variants}>
                {items.map((item) => (
                    <motion.li variants={variants} key={item}>{item}</motion.li>
                ))}
            </motion.ul>

        </div>
    )
}

export default anim10;