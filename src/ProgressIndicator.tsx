import { useLayoutEffect, useRef } from "react";
import "./ProgressIndicator.css";

type ProgressIndicatorProps = {
  progress?: number;
};

function ProgressIndicator({ progress }: ProgressIndicatorProps) {
  const progressRef = useRef<HTMLDivElement>(null);
  const radius = 20;
  const circumference = Math.ceil(Math.PI * (radius * 2));

  useLayoutEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const mouseY = e.clientY;
      const mouseX = e.clientX;

      if (progressRef.current) {
        progressRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  });

  return (
    <div
      ref={progressRef}
      className="absolute top-[-48px] left-[-48px] progres-wrapper z-10 pointer-events-none"
    >
      <div className="bg-white absolute w-1 h-1 rounded-full top-[48px] left-[48px]"></div>
      <svg
        className="-rotate-90"
        width="100"
        height="100"
        viewBox="0 0 100 100"
      >
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          pathLength="1"
          className="stroke-[#fafafa] stroke-[3%] opacity-[0.3]"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          className="stroke-[#fafafa] stroke-[3%]"
          strokeDasharray={circumference}
          strokeDashoffset={
            progress === 0
              ? circumference
              : progress && Math.ceil(circumference * (1 - progress))
          }
        />
      </svg>
    </div>
  );
}

export default ProgressIndicator;
