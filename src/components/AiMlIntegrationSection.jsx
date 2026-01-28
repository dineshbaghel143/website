import { motion } from "framer-motion";

const AIMLIntegrationSection = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#6b21a8] relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI / ML Integration
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-lg">
            <li>• Chatbots & Virtual Assistants</li>
            <li>• Recommendation Systems</li>
            <li>• Automation with AI</li>
            <li>• Custom AI Model Deployment</li>
          </ul>

          <p className="text-gray-200 max-w-lg mb-8">
            We use ML where it moves the needle — not for the sake of it.
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

        </motion.div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center"
        >
          <div className="relative w-64 h-64 rounded-full bg-purple-700/30 border border-purple-400/30 flex items-center justify-center shadow-[0_0_80px_#a855f7]">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold">
              ML
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AIMLIntegrationSection;
