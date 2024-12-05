"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type Props = React.PropsWithChildren<{
  initialX?: number;
  initialY?: number;
  duration?: number;
  delay?: number;
}>;

const Reveal = ({
  children,
  initialX = 0,
  initialY = 0,
  duration = 1,
  delay = 0,
}: Props) => {
  // Move the useRef hook inside the functional component
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  // React hook to trigger animation when the element is in view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.span
      ref={ref} // Attach ref to the DOM element
      initial="hidden"
      variants={{
        hidden: { opacity: 0, x: initialX, y: initialY },
        visible: { opacity: 1, x: 0, y: 0 },
      }}
      transition={{ duration, delay }}
      animate={controls}
    >
      {children}
    </motion.span>
  );
};

export default Reveal;
