/**
 * Scroll Progress Indicator component
 *
 * Displays a progress bar showing scroll position on the page
 */

import React, { useEffect, useState } from "react";

const ScrollProgressIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="scroll-progress"
      style={{
        width: `${progress}%`,
      }}
    />
  );
};

export default ScrollProgressIndicator;
