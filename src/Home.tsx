import React, { useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';

import './Home.css';
import { smallImages, largeImages } from './images';
function Home() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current && carousel.current.offsetParent) {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetParent.clientWidth);
    }
  }, [])

  return (
    <div className="">
      <motion.div className="cursor-grab overflow-hidden">
        <motion.div 
          ref={carousel} 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }}
          className="w-max flex">
            {largeImages.map((image, index) => (
              <motion.div
                className="w-svw h-svh relative"
                key={index}
              >
                <img className="absolute top-0 right-0 pointer-events-none" 
                  src={largeImages.length-1 === index ? `${smallImages[0]}` : `${smallImages[index+1]}`}
                  alt="" />
                <img className="w-full h-100 pointer-events-none" src={image} alt="" />
                <img className="absolute bottom-0 left-0 pointer-events-none" 
                  src={index === 0 ? `${smallImages[smallImages.length-1]}` : `${smallImages[index-1]}`} 
                  alt="" />
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
