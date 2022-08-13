import React from 'react'
import { useState, useEffect } from 'react';

const Background = () => {

    //set new width on resize
    const [width, setWidth] = useState(window.innerWidth);
    const [element, setElement] = useState(document.querySelector('.points'));

    const updateSize = () => {
        setWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateSize);

    //generete n numbers of points depending on the width
    useEffect(() => {
        if (element) {
            element.innerHTML = '';
            for (let i = 0; (width / 40) > i; i++) {
                let span = document.createElement("span");
                span.style.animationDelay = (Math.random() * 15)+ 's';
                span.style.animationDuration = (Math.random() * (20 - 10) + 10)+ 's';
                element.appendChild(span)
            }
        }
        else {
            setElement(document.querySelector('.points'));
        }
    }, [width, element])

    return (
        <div className="background">
            <div className="points">
            </div>
        </div>

    )
}

export default Background