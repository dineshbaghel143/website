import { motion } from "framer-motion";

const UiUxDesignSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-[#7b1fa2] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            UI/UX Design
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-lg">
            <li>• User Research & Wireframing</li>
            <li>• Visual Design & Prototyping</li>
            <li>• Usability Testing & Iteration</li>
            <li>• Design Systems & Branding</li>
          </ul>

          <p className="text-gray-200 max-w-lg mb-8">
            We turn confusion into clarity with research-led
            interactions and thoughtful design systems.
          </p>

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

        </div>

        {/* RIGHT VISUAL (STATIC) */}
        <div className="hidden md:flex justify-center">
          <div className="w-72 h-72 rounded-full border border-white/20 flex items-center justify-center text-5xl font-bold">
            UI
            <span className="text-pink-300">/</span>
            UX
          </div>
        </div>

      </div>
    </section>
  );
};

export default UiUxDesignSection;
