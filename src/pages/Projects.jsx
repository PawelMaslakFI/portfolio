import { motion } from 'framer-motion';
import React from 'react';
import Slider from '../components/Slider';
import GitHubIcon from '@mui/icons-material/GitHub';
import data from '../assest/data/projects';

const Projects = () => {

    return (
        <motion.div className='projects'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
        >
            <div className='wrapper'>
                <div className='top'>
                    <div className='title'>
                        Projects
                    </div>
                    <div className='content'>
                        Some things that I built.
                    </div>
                </div>
                <div className='projects-list'>
                    {data?.map((project, index) => (
                        <div className='project' key={index}>
                            <div className='title'>
                                {project.title}
                            </div>
                            <div className='content'>
                                <div className='text'>
                                    <span className='general'>
                                        {project.general}
                                    </span>
                                    <span className='desc'>
                                        {project.desc} 
                                    </span>
                                    <span className='techstack'>
                                        {project.techstack}
                                    </span>
                                    <div className='links'>
                                        <a href={project.github} target='_blank' rel='noopener noreferrer'>
                                            <GitHubIcon className='icon' />
                                        </a>
                                        {project.demo &&
                                            <a href={project.demo} target='_blank' rel='noopener noreferrer' onClick={() => alert('This project is deployed on free heroku server which cause long loading time for the first time. Try to refresh if any error appears. :)')}>
                                                <span>Live demo</span>
                                            </a>
                                        }
                                    </div>
                                </div>
                                <div className='img'>
                                    <Slider slides={project.img} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </motion.div>
    )
}

export default Projects