import { motion } from "framer-motion";

const CustomSoftwareSolutions = () => {
  return (
    <section className="relative py-32 px-6 md:px-20 bg-gradient-to-b from-[#7e22ce] to-[#12001f] overflow-hidden">
      
      {/* dotted background */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:18px_18px] pointer-events-none" /> */}

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Custom Software Solutions
          </h2>

          <ul className="grid sm:grid-cols-2 gap-4 text-lg mb-6">
            <li>• Enterprise Software Development</li>
            <li>• Software Maintenance & Support</li>
            <li>• API Development & Integration</li>
            <li>• Cloud Based Solutions</li>
          </ul>

          <p className="text-gray-200 max-w-lg mb-8">
            Custom apps that grow with your goals.
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
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 blur-2xl opacity-40" />
            <div className="relative w-full h-full rounded-xl bg-[#1a022b] border border-purple-400/30 flex items-center justify-center text-xl font-semibold shadow-[0_0_120px_#9333ea]">
              Custom Software
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default CustomSoftwareSolutions;
