import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const industries = [
  { x: 120,  y: 34,  label: "Healthcare",       dotOffsetY: -3 },  
  { x: 300,  y: 34,  label: "E-learning",       dotOffsetY: 10 }, 
  { x: 385,  y: 260, label: "SAAS",             dotOffsetY: 0 },
  { x: 600,  y: 275, label: "Ecommerce",        dotOffsetY: 6 },  
  { x: 770,  y: 372, label: "Social platforms", dotOffsetY: 0 },
  { x: 910,  y: 455, label: "Fashion",          dotOffsetY: -6 },
  { x: 1150, y: 457, label: "Real Estate",      dotOffsetY: -5 }, 
  { x: 1350, y: 435, label: "Eyewear",          dotOffsetY: -5 }, 
];

const IndustriesSection = () => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);
  const dotsRef = useRef([]);

  useLayoutEffect(() => {
    if (!sectionRef.current || !pathRef.current) return;

    const ctx = gsap.context(() => {
      const dots = dotsRef.current.filter(Boolean);
      if (!dots.length) return;

      gsap.set(pathRef.current, {
        strokeDasharray: 2000,
        strokeDashoffset: 2000,
      });

      gsap.set(dots, {
        scale: 1,
        opacity: 0.4,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=1200",        // scroll distance (animation length)
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });


      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1,
      });

      dots.forEach((dot, i) => {
        tl.to(
          dot,
          {
            scale: 1.8,
            opacity: 1,
            filter: "drop-shadow(0 0 8px rgba(255,148,210,0.9))",
            duration: 0.2,
          },
          0.2 + i * 0.15
        ).to(
          dot,
          {
            scale: 1,
            opacity: 0.5,
            filter: "drop-shadow(0 0 0 rgba(0,0,0,0))",
            duration: 0.2,
          },
          0.35 + i * 0.15
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 overflow-hidden text-white"
      style={{ backgroundColor: "#120b21" }}
    >
      {/* RIGHT TEXT */}
      <div className="relative z-10 lg:absolute lg:right-[10%] lg:top-[18%] lg:w-[30%] px-6">
        <h2 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
          <span className="text-[#ff6fae]">Industries </span>
          we have <br className="hidden lg:block" />
          worked with
        </h2>

        <p className="text-gray-300 max-w-sm text-sm leading-relaxed">
          We use the latest and most reliable technologies to deliver scalable,
          secure, and high-performing solutions tailored to your needs.
        </p>
      </div>

      {/* DESKTOP SVG */}
            <div className="relative h-[300px] lg:h-[540px]">
            <svg
                className="hidden lg:block absolute inset-0 w-full h-full"
                viewBox="0 0 1434 540"
                preserveAspectRatio="xMidYMid meet"
                fill="none"
            >
                <path
                ref={pathRef}
                d="
                    M0 42
                    C 300 -60, 420 140, 385 260
                    C 350 360, 650 180, 770 372
                    C 860 510, 1150 440, 1434 424
                "
                stroke="rgba(255,255,255,0.6)"
                strokeWidth="2"
                fill="none"
                />

                {industries.map((item, i) => {
                    const dotY = item.y + (item.dotOffsetY || 0);    // adjusted dot
                    const lineY1 = dotY + 5;                         // line dot ke thoda niche se
                    const lineY2 = dotY + 265;
                    const textY  = dotY - 20;                        // label dot ke thoda upar

                    return (
                        <g key={item.label}>
                        <line
                            x1={item.x}
                            y1={lineY1}
                            x2={item.x}
                            y2={lineY2}
                            stroke="rgba(255,255,255,0.12)"
                            strokeWidth="1"
                        />

                        <circle
                            ref={(el) => {
                            if (el) dotsRef.current[i] = el;
                            }}
                            cx={item.x}
                            cy={dotY}
                            r="4.5"
                            fill="#f5e5ff"
                        />

                        <text
                            x={item.x}
                            y={textY}
                            fontSize="16"
                            fontWeight="600"
                            textAnchor="middle"
                            fill="rgba(255,255,255,0.85)"
                        >
                            {item.label}
                        </text>
                        </g>
                    );
                    })}

            </svg>

        {/* MOBILE */}
        <div className="lg:hidden flex gap-8 overflow-x-auto py-10 px-6 snap-x snap-mandatory">
          {industries.map((item) => (
            <div key={item.label} className="flex-shrink-0 snap-center text-center">
              <p className="text-sm mb-3 text-gray-200">{item.label}</p>
              <div className="w-px h-20 bg-white/20 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
