import { motion, MotionValue } from 'framer-motion';
import { useLayoutEffect, useRef } from 'react';


function ProgressIndicator({scrollYProgress}: {scrollYProgress: MotionValue<number>}) {    
    const progressRef = useRef<HTMLDivElement>(null);

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
        <div ref={progressRef}  className="relative progres-wrapper z-10 pointer-events-none">
            <svg
                className="absolute top-[-48px] left-[-48px]" 
                id="progress" 
                width="100" 
                height="100" 
                viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="20" pathLength="1" className="bg" />
                <motion.circle
                    cx="50"
                    cy="50"
                    r="20"
                    pathLength="1"
                    className="indicator"
                    style={{ pathLength: scrollYProgress }}
                />
        </svg>
       </div>
    )
}

export default ProgressIndicator;