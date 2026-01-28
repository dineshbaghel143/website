import { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";

const useMagnetic = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const strength = 0.35;

    x.set((e.clientX - rect.left - rect.width / 2) * strength);
    y.set((e.clientY - rect.top - rect.height / 2) * strength);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return { x, y, handleMouseMove, reset };
};

/* ================= ANIMATION VARIANTS ================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= TESTIMONIAL DATA ================= */

const testimonials = [
  {
    quote: "Truly impressed with the outcome.",
    author: "Grassberry",
    rating: "★ ★ ★ ★ ★",
  },
  {
    quote: "Exceptional work, exceeded expectations.",
    author: "TechNova",
    rating: "★ ★ ★ ★ ★",
  },
  {
    quote: "Transformed our brand completely.",
    author: "DesignHub",
    rating: "★ ★ ★ ★ ★",
  },
];

/* ================= COMPONENT ================= */

const ServicesHero = () => {
  const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
      const checkDevice = () => setIsDesktop(window.innerWidth >= 1024);
      checkDevice();
      window.addEventListener("resize", checkDevice);
      return () => window.removeEventListener("resize", checkDevice);
    }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const magneticPrimary = useMagnetic();
  const magneticSecondary = useMagnetic();


  const rotateXText = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateYText = useTransform(mouseX, [-300, 300], [-4, 4]);

  const rotateXCard = useTransform(mouseY, [-300, 300], [8, -8]);
  const rotateYCard = useTransform(mouseX, [-300, 300], [-8, 8]);


  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const resetMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrent((prev) => (prev + 1) % testimonials.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section
      onMouseMove={isDesktop ? handleMouseMove : undefined}
      onMouseLeave={isDesktop ? resetMouse : undefined}
      className="min-h-screen flex items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 py-12 lg:py-20 overflow-hidden perspective-[1200px]"
    >


      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-20 items-center w-full">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 lg:space-y-8"
          style={{
            rotateX: isDesktop ? rotateXText : 0,
            rotateY: isDesktop ? rotateYText : 0,
            transformStyle: "preserve-3d",
          }}


        >
          <motion.p
            variants={item}
            className="text-xs lg:text-sm uppercase tracking-[0.3em] text-gray-400 font-medium"
          >
            Services
          </motion.p>

          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-tight"
          >
            Helping Brands <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-violet-500 bg-clip-text text-transparent drop-shadow-lg">
              Achieve More
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-lg leading-relaxed font-light"
          >
            Big visions. Clever design. Real impact. Let’s bring your brand to life
            and take it to the next level.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6"
          >
           <motion.button
              onMouseMove={isDesktop ? magneticPrimary.handleMouseMove : undefined}
              onMouseLeave={isDesktop ? magneticPrimary.reset : undefined}

              style={{
                x: magneticPrimary.x,
                y: magneticPrimary.y,
              }}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="px-8 py-4 sm:px-10 sm:py-5 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-violet-600 text-base sm:text-lg font-semibold hover:shadow-2xl hover:shadow-pink-500/25"
            >
              Start a Project
            </motion.button>


            <motion.button
                onMouseMove={isDesktop ? magneticSecondary.handleMouseMove : undefined}
                onMouseLeave={isDesktop ? magneticSecondary.reset : undefined}

                style={{
                  x: magneticSecondary.x,
                  y: magneticSecondary.y,
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                className="px-8 py-4 sm:px-10 sm:py-5 rounded-2xl border-2 border-white/20 hover:border-white/40 hover:bg-white/10 backdrop-blur-sm text-base sm:text-lg font-semibold"
              >
                See Our Work
              </motion.button>

          </motion.div>
        </motion.div>

        {/* ================= TESTIMONIAL CAROUSEL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="w-full flex flex-col items-center md:items-end max-w-sm lg:max-w-lg relative"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          style={{
            rotateX: isDesktop ? rotateXCard : 0,
            rotateY: isDesktop ? rotateYCard : 0,
            transformStyle: "preserve-3d",
          }}

        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{
                opacity: 1,
                x: 0,
                scale: 1,
                y: [0, -10, 0],
              }}
              exit={{ opacity: 0, x: -40, scale: 0.95 }}
              transition={{
                duration: 0.6,
                ease: "easeInOut",
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="bg-gradient-to-b from-white/5 to-transparent backdrop-blur-xl p-4 sm:p-6 lg:p-8 rounded-3xl border border-white/10 shadow-2xl w-full max-w-md"
            >
              <div className="flex justify-center md:justify-end gap-1 text-yellow-400 text-sm sm:text-lg lg:text-xl mb-4 lg:mb-6">
                {testimonials[current].rating}
              </div>

              <p className="text-lg sm:text-xl lg:text-2xl italic text-white/90 font-light leading-tight text-center md:text-right mb-3 lg:mb-4">
                "{testimonials[current].quote}"
              </p>

              <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium text-center md:text-right">
                — {testimonials[current].author}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* ================= DOTS ================= */}
          <div className="flex gap-2 mt-4 lg:mt-6 w-full justify-center md:justify-start">
            {testimonials.map((_, i) => (
              <motion.button
                key={i}
                onClick={() => setCurrent(i)}
                animate={{
                  width: current === i ? 32 : 10,
                  backgroundColor:
                    current === i
                      ? "#ec4899"
                      : "rgba(255,255,255,0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-2.5 rounded-full"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesHero;
