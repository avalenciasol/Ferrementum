import React, { useState, useEffect } from 'react';

import "../../styles/extra.css"

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () =>  {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };


    const ScrollToTop = () =>  {
        window.scrollTo({
            top:0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className='back-to-top'>
            {isVisible && (
                <button onClick={ScrollToTop} className='back-to-top-btn'>
                    <span className="material-icons">arrow_upward</span>
                </button>
            )}
        </div>
    );
};

export default BackToTop;   