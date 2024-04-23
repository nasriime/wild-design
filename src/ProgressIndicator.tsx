import { useLayoutEffect, useRef } from 'react';

function ProgressIndicator({scrollYProgress}: {scrollYProgress: number}) {    
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
        <div 
          ref={progressRef} 
          className="absolute top-[-48px] left-[-48px] progres-wrapper z-10 pointer-events-none">
            <div className="bg-white absolute w-1 h-1 rounded-full top-[48px] left-[48px] "></div>
            <svg
                className="" 
                id="progress" 
                width="100" 
                height="100" 
                viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="20" pathLength="1" className="bg" />
                <circle
                    cx="50"
                    cy="50"
                    r="20"
                    className="indicator"
                    pathLength={scrollYProgress}
                    // style={{ pathLength: scrollYProgress }}
                />
        </svg>
       </div>
    )
}

export default ProgressIndicator;