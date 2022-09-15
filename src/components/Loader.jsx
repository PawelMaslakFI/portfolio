import React from 'react'

const Loader = ({ state }) => {

    setTimeout(() => {
        state(false)
    }, 5000);

    return (
        <div className="container">
            <div className="logo">
                <div className="left">
                    <span>K</span>
                    <span>A</span>
                    <span>R</span>
                    <span>O</span>
                    <span>L</span>
                </div>
                <div className="right">
                    <span>K</span>
                    <span>R</span>
                    <span>Y</span>
                    <span>C</span>
                    <span>H</span>
                </div>
            </div>
        </div>
    )
}

export default Loader