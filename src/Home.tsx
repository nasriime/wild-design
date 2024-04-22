import { useState, useEffect, useRef} from 'react';
import { motion } from 'framer-motion';
import SingleSlide from './SingleSlide';
import './Home.css';
import { smallImages } from './sliderContent';
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
            {smallImages.map((image, index) => (
             <SingleSlide key={index} image={image} index={index}/>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
