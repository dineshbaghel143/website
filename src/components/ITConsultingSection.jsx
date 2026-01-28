import { motion } from "framer-motion";

const ITConsultingSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-[#7e22ce] to-[#12001f] overflow-hidden">

      {/* dotted background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" /> */}

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-80 h-80 rounded-full border border-purple-400/30 flex items-center justify-center shadow-[0_0_120px_#9333ea]">

            {/* CENTER */}
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-semibold text-lg">
              IT
              <br />
              Consulting
            </div>

            {/* ORBIT ITEMS */}
            {[
              "Cloud",
              "Security",
              "Analytics",
              "Strategy",
              "Network",
              "Software",
            ].map((item, i) => (
              <div
                key={i}
                className="absolute px-4 py-1 text-xs rounded-full bg-purple-700/40 border border-purple-400/40 text-white"
                style={{
                  transform: `rotate(${i * 60}deg) translate(170px) rotate(-${i * 60}deg)`,
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            IT Consulting
          </h2>

          <p className="text-gray-200 max-w-xl mb-6">
            We craft data-driven, user-centric strategies that help businesses
            scale and boost engagement.
          </p>

          <ul className="grid sm:grid-cols-2 gap-4 text-lg mb-8">
            <li>• Technology Strategy & Roadmapping</li>
            <li>• Digital Transformation Consulting</li>
            <li>• Performance Optimization & Analytics</li>
            <li>• IT Architecture & Advisory</li>
          </ul>

          <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(255,255,255,0.45)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="px-8 py-3 rounded-full border border-white/40 hover:bg-white/10 transition"
            >
              Explore More
            </motion.button>

        </motion.div>
      </div>
    </section>
  );
};

export default ITConsultingSection;
