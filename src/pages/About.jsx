import { motion } from 'framer-motion';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import avatar from '../assest/img/avatar.png';
import cssLogo from '../assest/img/CSS3_logo.png';
import HtmlLogo from '../assest/img/HTML5_logo.png';
import JavascriptLogo from '../assest/img/JavaScript_logo.png';
import MongodbLogo from '../assest/img/Mongodb_logo.png';
import NodejsLogo from '../assest/img/Nodejs_logo.png';
import ReactLogo from '../assest/img/React_logo.png';
import SassLogo from '../assest/img/Sass_logo.png';

const About = () => {

    const [list, setList] = useState(document.getElementsByClassName('list-item'));
    const [logos, setLogos] = useState(document.getElementsByClassName('logo'));
    const skillLogos = [cssLogo, HtmlLogo, JavascriptLogo, MongodbLogo, NodejsLogo, ReactLogo, SassLogo];

    useEffect(() => {
        if (list) {
            for (let i = 0; i < list.length; i++) {
                list[i].style.animationDelay = 3 + (i * 0.2) + 's';
            }
        }
        else {
            setList(document.getElementsByClassName('list-item'));
        }

        if (logos) {
            for (let i = 0; i < logos.length; i++) {
                logos[i].style.animationDelay = 3.5 + (i * 0.2) + 's';
            }
        }
        else {
            setLogos(document.getElementsByClassName('logo'));
        }
    }, [list, logos]);

    return (
        <motion.div className="about"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0, transition: { duration: 1 } }}
        >
            <div className="wrapper">
                <div className="about-me">
                    <div className="left">
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
                    <div className="right">
                        <div className="img">
                            <img src={avatar} alt="" />
                        </div>
                    </div>
                </div>
                <div className="skills">
                    <div className="left">
                        <div className="logos">
                            {skillLogos.map((logo, index) =>
                                <div className="img logo" key={index}>
                                    <img src={logo} alt="" />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="right">
                        <div className="title">
                            Skills
                        </div>
                        <div className="content">
                            <div className="text">
                            Here are the technologies I have been working with
                            </div>
                            <div className="list">
                                <ul>
                                    <li className="list-item">HTML</li>
                                    <li className="list-item">CSS</li>
                                    <li className="list-item">JavaScript</li>
                                    <li className="list-item">React</li>
                                    <li className="list-item">Node.js</li>
                                    <li className="list-item">MongoDB</li>
                                    <li className="list-item">SCSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default About