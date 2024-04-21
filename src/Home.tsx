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
                <img className="w-full h-100 pointer-events-none" src={image} alt="" />
                <p className="text-white absolute top-[16px] left-[16px] uppercase">XYZ Photography</p>
                <img 
                  className="absolute top-[16px] right-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black pointer-events-none" 
                  src={largeImages.length-1 === index ? `${smallImages[0]}` : `${smallImages[index+1]}`}
                  alt="" />
                <img 
                  className="absolute bottom-[16px] left-[16px] w-[248px] h-[330px] rounded-[10px] border-[1px] border-black pointer-events-none" 
                  src={index === 0 ? `${smallImages[smallImages.length-1]}` : `${smallImages[index-1]}`} 
                  alt="" />
                  <div className="absolute bottom-[16px] right-[16px]">
                    <p className="text-white uppercase">Johanna Hobel for CHanel</p>
                    <p className="text-white">FEB 2020</p>
                    <button className="text-black rounded-[24px] bg-white px-[16px] pt-[9px] pb-[8px] uppercase">
                      have a look
                    </button>
                  </div>
              </motion.div>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
