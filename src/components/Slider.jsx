import React, { useEffect, useState } from 'react';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Slider = ({ slides }) => {

    const [active, setActive] = useState(0);

    const next = () => {
        setActive(active === slides.length - 1 ? 0 : active + 1);
    };
    const prev = () => {
        setActive(active === 0 ? slides.length - 1 : active - 1)
    }

    useEffect(() => {
        const slide = setInterval(() => next(), 5000)
        return () => {
            clearInterval(slide)
        }// eslint-disable-next-line react-hooks/exhaustive-deps
    }, [active])


    return (
        <div className='slider'>
            {slides?.map((item, index) => (
                <div className={index === active ? 'images active' : 'images'} key={index}>
                    {index === active && (
                        <img src={item} alt='#' />
                    )}
                </div>
            ))}
            <div className="panel">
                <KeyboardDoubleArrowLeftIcon className='arrow' onClick={prev} />
                {slides?.map((item, index) => (
                    <div className={index === active ? 'select active' : 'select'} key={index} onClick={() => setActive(index)}></div>
                ))}
                <KeyboardDoubleArrowRightIcon className='arrow' onClick={next} />
            </div>
        </div>
    )
}

export default Slider
