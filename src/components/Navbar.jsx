import React, { useState } from 'react'

const Navbar = () => {

    const [isActive, setActive] = useState(false);

    const toggleHamburger = () => {
        setActive(!isActive);
    };

    const toggleDropdown = () => {
        if(isActive)
            setActive(!isActive); 
    }

    return (
        <div className="navbar" onClick={toggleDropdown}>
            <div className="wrapper">
                <div className="nav-left">
                    <div className="logo">
                        <div className="left">K</div>
                        <div className="right">K</div>
                    </div>
                </div>
                <div className="nav-right">
                    <a href="#">
                        <div className="nav-item">About</div>
                    </a>
                    <a href="#">
                        <div className="nav-item">Skills</div>
                    </a>
                    <a href="#">
                        <div className="nav-item">Projects</div>
                    </a>
                    <a href="#">
                        <div className="nav-item">Contact</div>
                    </a>
                </div>
                <div className={isActive ? "nav-hamburger is-active" : "nav-hamburger"} id="hamburger" onClick={toggleHamburger}>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </div>
            </div>
            <div className={isActive ? "dropdown-menu is-active" : "dropdown-menu"}>
                <a href="#">
                    <div className="nav-item">About</div>
                </a>
                <a href="#">
                    <div className="nav-item">Skills</div>
                </a>
                <a href="#">
                    <div className="nav-item">Projects</div>
                </a>
                <a href="#">
                    <div className="nav-item">Contact</div>
                </a>
            </div>
        </div>
    )
}

export default Navbar