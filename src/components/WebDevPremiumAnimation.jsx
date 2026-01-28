import { motion } from "framer-motion";

const Ring = ({ size, opacity, delay }) => (
  <motion.div
    className="absolute flex items-center justify-center"
    style={{ width: size, height: size }}
    animate={{
      scale: [1, 1.06, 1],
      opacity: [opacity, opacity + 0.15, opacity],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    <div
      className="absolute inset-0 rounded-full"
      style={{
        padding: "2px",
        background: "linear-gradient(180deg,#FF3CAC,#AD46FF)",
        WebkitMask:
          "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  </motion.div>
);

const WebDevPremiumAnimation = () => {
  return (
    <div className="relative w-[360px] h-[360px] flex items-center justify-center">

      {/* VERY SLOW ROTATION GROUP */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{
          duration: 90,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <Ring size={280} opacity={0.15} delay={0} />
        <Ring size={220} opacity={0.25} delay={1.5} />
        <Ring size={160} opacity={0.4} delay={3} />
      </motion.div>

      {/* CENTER GLOW CARD */}
      <motion.div
        animate={{ scale: [1, 1.03, 1] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute z-10 flex items-center justify-center rounded-[20px]"
        style={{
          width: 100,
          height: 100,
          background:
            "linear-gradient(180deg,rgba(198,35,129,0.12),rgba(170,64,255,0.32))",
          boxShadow: "0 0 120px 25px rgba(163,48,255,0.55)",
        }}
      >
        <div
          className="w-[96px] h-[96px] rounded-[20px]"
          style={{
            padding: "2px",
            background: "linear-gradient(180deg,#FF3CAC,#AD46FF)",
            WebkitMask:
              "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />
      </motion.div>

      {/* FLOATING ICON (NOT ROTATING FAST) */}
      <motion.div
        className="absolute z-20"
        animate={{ y: [-4, 4, -4] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <img src="/service/doubleArrow.svg" alt="" />
      </motion.div>
    </div>
  );
};

export default WebDevPremiumAnimation;
