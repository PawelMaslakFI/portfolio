import { motion } from 'framer-motion';
import React from 'react';

const Home = () => {
    return (
        <motion.div className='home'
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0, scale: 0, transition: { duration: 1 }}}
            >
            <div className='wrapper'>
                <div className='content'>
                    <p className='p1'>
                        Hello, my name is
                    </p>
                    <p className='p2'>
                        Karol Krych.
                    </p>
                    <p className='p3'>
                        I'm a web developer.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}

export default Home