import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";

const topPath = `M33.4 8 c-2.2 1.1 -4.7 3.3 -5.7 4.9 -2.3 4.0 -2.2 11.2 0.3 14.3 l1.9 2.5
  -3.7 1.1 c-7.3 2.2 -11.7 6.6 -17.1 17.0 -2.7 5.4 -5.5 11.9 -6.1 14.5 -0.7 2.6 -1.6
  4.7 -2.1 4.7 -0.4 0 -0.7 2.7 -0.7 6.0 0 3.3 0.4 5.7 0.8 5.5 0.4 -0.3 1.7 2.3 2.9 5.6 
  2.7 7.3 4.2 8.1 15.8 8.1 11 0 13.6 -1.5 18.4 -10.7 2.9 -5.6 4.1 -7.1 6.2 -7.3 2.3 -0.3 
  3.0 0.4 6.2 6.7 1.9 3.9 4.7 7.8 6.1 8.8 5.6 3.6 23.4 3.4 26.1 -0.4 0.8 -0.9 2.1 -4.2 
  3.1 -7.3 0.9 -3.0 2.0 -5.6 2.4 -5.8 1.1 -0.5 1.0 -7.9 -0.2 -10.0 -0.5 -0.9 -1.8 -4.0 
  -2.9 -6.7 -1.0 -2.8 -4.1 -8.6 -6.8 -13.0 -5.3 -8.8 -11.3 -13.7 -19.0 -15.8 -3.3 -0.9 
  -4.2 -1.5 -3.7 -2.7 0.4 -0.8 1.1 -3.1 1.7 -5.0 3.0 -10.6 -12.8 -20.4 -23.9 -15.0z 
  m1.9 46.0 c3.1 1.7 6.4 3.0 7.2 3.0 0.9 0 4.4 -1.4 7.8 -3.1 8.0 -4.1 12.3 -4.2 16.8 -0.5 
  1.9 1.5 5.5 4.1 8.1 5.6 2.6 1.6 5.2 3.8 5.8 4.9 1.0 2.0 0.9 2.1 -7.3 2.1 -4.6 0 -13.0 
  0.7 -18.7 1.5 -9.3 1.4 -11.4 1.4 -21.4 0 -6.1 -0.8 -13.9 -1.6 -17.4 -1.8 l-6.3 -0.2 
  4.5 -6.4 c7.0 -10.1 9.9 -10.8 20.9 -5.1z m-5.1 15.0 c2.0 0.6 4.7 1.9 6.0 2.9 2.1 1.8 
  2.2 2.1 1.0 6.6 -2.4 9.0 -5.8 11.6 -15.7 12.3 -10.1 0.6 -13.8 -1.1 -15.4 -7.1 -1.3 -5.2 
  -1.4 -10.6 -0.3 -12.4 0.4 -0.7 1.9 -1.6 3.2 -2.2 3.3 -1.3 16.6 -1.3 21.2 -0.1z m49.5 0.1 
  c1.5 0.5 3.1 1.6 3.5 2.2 1.1 1.8 1.0 7.2 -0.3 12.4 -1.6 6.0 -5.3 7.7 -15.4 7.1 -8.5 -0.6 
  -11.6 -2.4 -14.5 -8.2 -3.6 -7.6 -2.6 -10.5 4.7 -13.2 4.6 -1.6 18.1 -1.8 22.0 -0.3z`;

export const Icon = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const controls = animate([
      ["path", { pathLength: 1 }, { duration: 2, ease: "easeInOut" }],
      [
        "path",
        { fill: "currentColor", fillOpacity: 1 },
        { duration: 1, ease: "easeInOut" },
      ],
    ]);
    return () => controls.stop();
  }, [scope, animate]);

  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 90 150"
      className="w-full h-full"
    >
      <motion.g ref={scope} fill="none" stroke="currentColor" strokeWidth="1">
        <motion.path
          d={topPath}
          initial={{ pathLength: 0, fill: "none", fillOpacity: 0 }}
        />
        <motion.path
          d="M70.1 96.8 c-0.4 0.9 -2.1 5.6 -3.6 10.4 l-2.7 8.7 -5.9 -3.9 c-5.9 -4.1 -9.6 -4.9 
  -11.7 -2.8 -0.9 0.9 -1.8 0.9 -3.7 0 -4.0 -1.9 -5.6 -1.5 -11.6 2.7 l-5.7 3.9 -1.5 -4.1 
  c-0.8 -2.3 -2.3 -6.6 -3.2 -9.5 -0.9 -2.8 -1.9 -5.2 -2.1 -5.2 -0.6 0 -6.2 4.9 -9.1 7.9 
  -1.3 1.3 -2.3 3.2 -2.3 4.2 0 2.2 13.0 18.0 18.6 22.7 2.1 1.8 4.6 3.9 5.5 4.7 0.9 0.8 
  2.0 1.5 2.6 1.5 0.6 0 2.4 0.7 3.9 1.5 3.6 1.9 10.1 1.9 13.4 0.1 1.4 -0.8 4.4 -2.4 6.8 
  -3.6 7.3 -3.8 22.8 -22.7 24.7 -30.2 1.0 -3.9 -0.8 -6.2 -6.4 -8.6 -4.7 -1.9 -5.2 -2.0 
  -6.0 -0.4z m-22.7 17.7 c1.1 0.8 3.5 1.5 5.3 1.5 3.8 0 4.1 1.2 1.6 6.5 -1.9 3.9 -3.7 4.5 
  -5.3 1.5 -0.8 -1.4 -2.1 -2.0 -4.5 -2.0 -2.4 0 -3.9 0.6 -4.7 2.0 -1.8 2.8 -3.5 2.5 -5.3 
  -1.0 -2.2 -4.2 -1.9 -5.9 1.3 -6.5 1.5 -0.4 3.8 -1.3 5.2 -2.0 3.1 -1.8 4.0 -1.8 6.4 0z"
          initial={{ pathLength: 0, fill: "none", fillOpacity: 0 }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
        />
      </motion.g>
    </svg>
  );
};
