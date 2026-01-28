import { motion } from "framer-motion";
import WebDevPremiumAnimation from "./WebDevPremiumAnimation";

const WebDevelopmentSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-[#2a0638] overflow-hidden">
        {/* SMOOTH COLOR TRANSITION FROM HERO */}
    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#1a0030] to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Web Development
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-lg">
            <li>• Frontend Development</li>
            <li>• Full-Stack Development</li>
            <li>• Backend & API Development</li>
            <li>• Progressive Web Apps (PWA)</li>
          </ul>

          <p className="text-gray-300 max-w-lg mb-8">
            A 60-second story: slow sites lose users.  
            We rebuild the checkout path and cut TTFB in half.
          </p>

          <motion.button
            whileHover={{
              boxShadow: "0 0 18px rgba(168,85,247,0.6)",
            }}
            transition={{ duration: 0.3 }}
            className="px-8 py-3 rounded-full border border-white/30 hover:bg-white/10 transition"
          >
            Explore More
          </motion.button>

        </motion.div>

       {/* RIGHT VISUAL */}
            <div className="hidden md:flex justify-center">
            <WebDevPremiumAnimation />
            </div>

      </div>
    </section>
  );
};

export default WebDevelopmentSection;
