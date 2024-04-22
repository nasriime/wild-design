import { motion, MotionValue } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';


function ProgressIndicator({scrollYProgress}: {scrollYProgress: MotionValue<number>}) {    
    const progressRef = useRef<SVGSVGElement>(null);

    useLayoutEffect(() => {
        const onMouseMove = (e: MouseEvent) => {
          const mouseY = e.clientY;
          const mouseX = e.clientX;
          
          if(progressRef.current) {
            progressRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
          }
        }
      
        window.addEventListener("mousemove", onMouseMove);
      
        return () => {
          window.removeEventListener("mousemove", onMouseMove);
        };
      })

    return (
        <svg
            ref={progressRef} 
            className="absolute z-10 top-[-48px] left-[-48px] pointer-events-none" 
            id="progress" 
            width="100" 
            height="100" 
            viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
            <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollYProgress }}
            />
       </svg>
    )
}

export default ProgressIndicator;