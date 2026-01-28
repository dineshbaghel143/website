import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ParallaxWaves = () => {
  const waveTop = useRef(null);
  const waveBottom = useRef(null);

  useEffect(() => {
    gsap.to(waveTop.current, {
      y: -120,
      scrollTrigger: {
        trigger: waveTop.current,
        start: "top bottom",
        scrub: true,
      },
    });

    gsap.to(waveBottom.current, {
      y: -200,
      scrollTrigger: {
        trigger: waveBottom.current,
        start: "top bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      {/* TOP WAVE */}
      <div
        ref={waveTop}
        className="absolute top-0 left-0 w-full h-64
                   bg-gradient-to-r from-purple-700/30 to-pink-600/30
                   blur-3xl pointer-events-none"
      />

      {/* BOTTOM WAVE */}
      <div
        ref={waveBottom}
        className="absolute bottom-0 left-0 w-full h-72
                   bg-gradient-to-r from-pink-600/20 to-purple-800/30
                   blur-3xl pointer-events-none"
      />
    </>
  );
};

export default ParallaxWaves;
