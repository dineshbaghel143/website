import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { FaClock, FaFolderOpen, FaUsers, FaSmile } from "react-icons/fa";
import { useInView } from "framer-motion";
import { useRef } from "react";
import TypingText from "./TypingText";



const cards = [
  {
    title: "5+ Years Experience",
    subtitle: "Trusted expertise in digital innovation",
    icon: <FaClock size={28} />,
    iconColor: "icon-pink",
    baseTransform: "rotateX(12deg) rotateY(-18deg)",
    offset: "translate-y-0",
  },
  {
    title: "100+ Projects",
    subtitle: "Delivered across industries globally",
    icon: <FaFolderOpen size={28} />,
    iconColor: "icon-purple",
    baseTransform: "rotateX(0deg) rotateY(20deg)",
    offset: "-translate-y-6",
  },
  {
    title: "15+ Members",
    subtitle: "Agile and skilled professionals",
    icon: <FaUsers size={28} />,
    iconColor: "icon-blue",
    baseTransform: "rotateX(-10deg) rotateY(-12deg)",
    offset: "translate-y-4",
  },
  {
    title: "100+ Happy Clients",
    subtitle: "Strong client retention & referrals",
    icon: <FaSmile size={28} />,
    iconColor: "icon-rose",
    baseTransform: "rotateX(14deg) rotateY(10deg)",
    offset: "-translate-y-2",
  },
];

const item = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const WhoWeAre = () => {
  const headingRef = useRef(null);

  const isHeadingVisible = useInView(headingRef, {
    margin: "-100px",
  });
  return (
    <section className="who-we-are relative min-h-screen bg-gradient-to-br from-[#140018] via-[#1a0224] to-[#0b0012] text-white px-6 py-24 overflow-hidden">

      {/* ================= TOP CONTENT ================= */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 mb-28">
        {/* Left */}
        <div>
          <motion.h1
            ref={headingRef}
            initial={{ opacity: 0, y: 40 }}
            animate={{
              opacity: isHeadingVisible ? 0.1 : 0,
              y: isHeadingVisible ? 0 : 40,
            }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="whitespace-nowrap text-[clamp(3.5rem,8vw,8rem)] font-bold mb-6 leading-none tracking-tight"
          >
              <TypingText
                text="Who We Are"
                isVisible={isHeadingVisible}
                speed={90}
                className="block"
              />
            </motion.h1>


          <h2 className="text-4xl font-bold leading-tight">
            We turn your visionary ideas into{" "}
            <span className="text-pink-400">
              high-performing
            </span>{" "}
            digital assets that grow brands
          </h2>
        </div>

        {/* Right */}
        <div className="lg:pl-16 xl:pl-24">
          <p className="text-gray-300 leading-relaxed mb-8 max-w-md text-[15px]">
            At Software Giant, we bring your ideas to life by building powerful,
            scalable, and future-ready digital products. From startups and
            enterprises to visionary entrepreneurs, we turn concepts into
            impactful solutions.
          </p>

          <button className="btn-shine px-8 py-3 rounded-full border border-pink-500 text-pink-400 font-medium">
            Learn More
          </button>

        </div>
      </div>

      {/* ================= CARDS (UNCHANGED) ================= */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-10 perspective-[1400px]"
      >
        {cards.map((card, i) => (
          <motion.div key={i} variants={item}>
            <TiltCard
              className={`gradient-border ${card.offset}`}
              baseTransform={card.baseTransform}
            >
              <div
                className="glass glow-hover rounded-xl p-6 h-full transition-all duration-500"
                style={{ transform: "translateZ(45px)" }}
              >
                <div className={`mb-4 icon-glow ${card.iconColor}`}>
                  {card.icon}
                </div>

                <p className="text-sm text-white/70 mb-3">
                  {card.subtitle}
                </p>

                <h3 className="text-lg font-bold">
                  {card.title}
                </h3>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WhoWeAre;
