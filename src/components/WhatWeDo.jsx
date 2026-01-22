import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ---------------- CONSTANTS ----------------
const CARD_WIDTH = 260;
const CARD_GAP = 32;

// ---------------- DATA ----------------
const services = [
  {
    title: "Web Development",
    desc: "We build responsive, user-friendly websites that elevate your brand and drive results.",
    image: "/service/icon1.png",
  },
  {
    title: "App Development",
    desc: "We build high-performance mobile apps tailored to your business needs and user expectations.",
    image: "/service/icon2.png",
  },
  {
    title: "Custom Software Solutions",
    desc: "We build tailored software to enhance efficiency, scalability, and performance.",
    image: "/service/icon7.png",
  },
  {
    title: "UI/UX Design",
    desc: "Design systems focused on usability and visual impact.",
    image: "/service/icon3.png",
  },
  {
    title: "Cloud & DevOps",
    desc: "Scalable cloud solutions & DevOps for faster, secure, and efficient delivery.",
    image: "/service/icon4.png",
  },
  {
    title: "IT Consulting",
    desc: "We help align technology with your business goals, improve efficiency, and support smarter digital decision-making.",
    image: "/service/icon5.png",
  },
  {
    title: "AI/ML Integration",
    desc: "We integrate AI and machine learning to automate processes, gain insights, and enable smarter business outcomes.",
    image: "/service/icon6.png",
  },
  {
    title: "ERP Development",
    desc: "We build custom ERP systems to streamline operations, manage data, and support scalable business growth.",
    image: "/service/icon8.png",
  },
];

// ---------------- CARD ----------------
const ServiceCard = ({ item }) => {
  return (
    <motion.div
      className="wwd-card relative w-[260px] h-[300px] rounded-2xl
                 overflow-hidden cursor-pointer group"
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.06 },
      }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
    >
      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0 rounded-2xl
                   bg-gradient-to-br from-[#850063] to-[#B80089]"
        variants={{
          hover: {
            boxShadow: "0 0 45px rgba(184,0,137,0.55)",
          },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* CONTENT */}
      <div className="relative z-10 h-full p-6">
        {/* TOP ROW */}
        <div className="flex justify-between items-start">
          <h3 className="text-white text-2xl font-bold leading-tight">
            {item.title.split(" ").map((w, i) => (
              <div key={i}>{w}</div>
            ))}
          </h3>

          {/* ARROW */}
          <motion.img
            src="/service/arrowicon.png"
            alt="arrow"
            className="w-8 h-8 opacity-50 group-hover:opacity-100"
            animate={{ x: [0, 6, 0] }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* SLIDE TEXT (CENTERED) */}
        <div className="absolute inset-0 flex items-center px-6 pointer-events-none">
          <motion.p
            className={`text-white text-sm sm:text-base
              ${
                item.title === "Custom Software Solutions"
                  ? "mt-8"
                  : ""
              }`}
            variants={{
              rest: { x: -120, opacity: 0 },
              hover: { x: 0, opacity: 1 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {item.desc}
          </motion.p>
        </div>
      </div>

      {/* ICON IMAGE */}
      {/* ICON IMAGE */}
      <motion.div
        className="absolute -bottom-[15%] -right-[15%]
                  w-[240px] h-[240px] pointer-events-none"
        variants={{
          rest: { scale: 1, x: 0, y: 0 },
          hover: {
            scale: 0.78, // ~80% visible
            x: 60,       // right move
            y: 60,       // bottom move (cut)
          },
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </motion.div>


    </motion.div>
  );
};

// ---------------- MAIN ----------------
const WhatWeDo = () => {
  const pinRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) return;

    const track = document.querySelector(".wwd-track");
    if (!track || !pinRef.current) return;

    const totalWidth =
      services.length * (CARD_WIDTH + CARD_GAP);

    const scrollDistance =
      totalWidth -
      window.innerWidth +
      (window.innerWidth / 2 - CARD_WIDTH / 2);

    const tween = gsap.to(track, {
      x: -scrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: pinRef.current,
        start: "top top",
        end: `+=${scrollDistance}`,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.refresh();

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="relative bg-white overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 pt-20 pb-8">
        <h2 className="text-7xl font-bold text-[#2b0030]">
          What We Do
        </h2>

        <p className="text-[34px] font-bold text-[#2b0030] leading-tight">
          Digital solutions{" "}
          <span className="text-pink-600">crafted with precision.</span>
          <br />
          We build, design, and optimize to elevate your brand.
        </p>
      </div>

      {/* CARDS */}
      <div
        ref={pinRef}
        className="wwd-wrapper min-h-[60vh] flex items-center overflow-hidden"
      >
        <div
          className="wwd-track flex gap-8 px-20"
          style={{ width: "max-content" }}
        >
          {services.map((item, i) => (
            <ServiceCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
