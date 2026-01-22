import { motion, useMotionValue, useTransform } from "framer-motion";

const TiltCard = ({ children, className, baseTransform }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-60, 60], [18, -18]);
  const rotateY = useTransform(x, [-60, 60], [-18, 18]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    e.currentTarget.style.setProperty("--x", `${px}px`);
    e.currentTarget.style.setProperty("--y", `${py}px`);

    x.set(px - rect.width / 2);
    y.set(py - rect.height / 2);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        transform: baseTransform, // ✅ ONLY HERE (style)
      }}
      className={`relative group ${className}`}
    >
      <div className="spotlight rounded-xl"></div>
      {children}
    </motion.div>
  );
};

export default TiltCard;
