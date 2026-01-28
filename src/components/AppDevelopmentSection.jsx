import { motion } from "framer-motion";

const AppDevelopmentSection = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#1a0030]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center relative"
        >
          <div className="w-72 h-72 rounded-full border border-white/10 relative flex items-center justify-center">

            <div className="w-24 h-40 rounded-xl border border-pink-500/50 flex items-center justify-center">
              📱
            </div>

            {["</>", "☁", "🗄", "⚙"].map((icon, i) => (
              <div
                key={i}
                className="absolute w-10 h-10 rounded-full bg-purple-600/40 flex items-center justify-center"
                style={{
                  transform: `rotate(${i * 90}deg) translate(140px) rotate(-${i * 90}deg)`,
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            App Development
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-lg">
            <li>• Native Mobile Development</li>
            <li>• Offline-first & Data Sync</li>
            <li>• Cross-platform Apps</li>
            <li>• App Ops</li>
          </ul>

          <p className="text-gray-300 max-w-lg mb-8">
            We design hooks that help users return.  
            Offline-first and analytics-driven mobile experiences.
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
      </div>
    </section>
  );
};

export default AppDevelopmentSection;
