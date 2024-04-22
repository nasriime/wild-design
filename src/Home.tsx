import { useState, useLayoutEffect, useCallback, useRef} from 'react';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import SingleSlide from './SingleSlide';
import './Home.css';
import { smallImages } from './sliderContent';
function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef && scrollRef.current && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver(entries => onResize(entries))
    ghostRef.current && resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useViewportScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)

  return (
    <div className="">
      <motion.div className="fixed overflow-hidden">
        <motion.div 
          ref={scrollRef} 
          style={{ x: spring }}
          className="w-max flex">
            {smallImages.map((image, index) => (
             <SingleSlide key={index} image={image} index={index}/>
            ))}
        </motion.div>
      </motion.div>
      <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
    </div>
  );
}

export default Home;
