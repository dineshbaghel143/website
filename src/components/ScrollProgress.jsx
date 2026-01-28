import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-pink-500 to-purple-600 z-[9999] origin-left"
      style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
    />
  );
};

export default ScrollProgress;
