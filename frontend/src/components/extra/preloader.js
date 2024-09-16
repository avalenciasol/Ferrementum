import { useEffect } from 'react';

import "../../styles/extra.css"

const PreloaderComponent = () => {
    useEffect(() => {
      const preloader = document.querySelector('.preloader');
      if (preloader) {
        preloader.style.opacity = '1'; 
        preloader.style.visibility = 'visible'; 
        setTimeout(() => {
          preloader.style.opacity = '0'; 
          preloader.style.visibility = 'hidden'; 
          preloader.style.transition = 'opacity 0.5s ease-out';
        }, 500);
      }
    }, []);
  
    return null;
}; 

export default PreloaderComponent;