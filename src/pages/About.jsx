import { motion } from 'framer-motion';
import React from 'react';

const About = () => {
    return (
        <motion.div className="about"
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, scale: 0, transition: { duration: 1 }}}
            >
            <div className="wrapper">
                <div className="title">
                    About Me
                </div>
                <div className="content">
                    Hello ! My name is Karol and I like to build things for the web. 
                    I am fascinated by latest technologies and web development.
                    I am at the beginning of my journey with programming,
                    and so far I gained front-end skills that I want to constantly improve.
                </div>
            </div>
        </motion.div>
    )
}

export default About