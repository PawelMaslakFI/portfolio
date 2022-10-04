import { motion } from 'framer-motion';
import React from 'react';

const Contact = () => {
    return (
        <motion.div className='contact'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
        >
            <div className='wrapper'>
                <div className="contact-me">
                    <div className="title">
                        Contact Me
                    </div>
                    <div className="subtitle">
                        Get In Touch.
                    </div>
                    <div className="text">
                        You can reach me via email. If you want to get in touch or just say Hi, please click below to contact me. I would love to hear from you!
                    </div>
                    <a href="mailto:krych.karol.93@gmail.com">
                        <button>Contact Me</button>
                    </a>
                </div>
            </div>
        </motion.div>
    )
}

export default Contact