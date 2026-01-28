import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FinalScrollSection = () => {
  const sectionRef = useRef(null);
  const blob1 = useRef(null);
  const blob2 = useRef(null);
  const content = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=120%",
          scrub: true,
          pin: true,
        },
      });

      tl.fromTo(
        blob1.current,
        { scale: 0.8, x: -200, opacity: 0.4 },
        { scale: 1.4, x: 0, opacity: 0.7 }
      )
        .fromTo(
          blob2.current,
          { scale: 0.6, x: 200, opacity: 0.3 },
          { scale: 1.2, x: 0, opacity: 0.6 },
          "<"
        )
        .fromTo(
          content.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1 }
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[#0b0217]" />

      {/* MOVING BLOBS */}
      <div
        ref={blob1}
        className="absolute w-[520px] h-[520px] rounded-full
        bg-purple-700/30 blur-[120px]"
      />
      <div
        ref={blob2}
        className="absolute w-[420px] h-[420px] rounded-full
        bg-pink-600/30 blur-[120px]"
      />

      {/* CONTENT */}
      <div
        ref={content}
        className="relative z-10 text-center text-white px-6 max-w-3xl"
      >
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Let’s Build What’s Next
        </h2>

        <p className="text-gray-300 mb-10">
          From strategy to scale, we help brands turn ideas into
          powerful digital experiences.
        </p>

        <button className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition">
          Start a Project
        </button>
      </div>
    </section>
  );
};

export default FinalScrollSection;
