import { motion } from "framer-motion";

const CloudDevOpsSection = () => {
  return (
    <section className="py-32 px-6 md:px-20 bg-[#12001f] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-80 h-80 rounded-full border border-purple-400/30 flex items-center justify-center shadow-[0_0_120px_#9333ea]">

            {/* Center Cloud */}
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white font-bold text-lg">
              Cloud
              <br />
              DevOps
            </div>

            {/* Orbit Tags */}
            {[
              "Security",
              "Monitoring",
              "Automation",
              "Orchestration",
              "Infrastructure",
              "CI/CD",
            ].map((item, i) => (
              <div
                key={i}
                className="absolute px-4 py-1 text-xs rounded-full bg-purple-700/40 border border-purple-400/40 text-white"
                style={{
                  transform: `rotate(${i * 60}deg) translate(160px) rotate(-${i * 60}deg)`,
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
            Cloud and DevOps
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 text-lg">
            <li>• Cloud Infrastructure Management</li>
            <li>• CI/CD Pipelines Setup</li>
            <li>• Containerization & Orchestration</li>
            <li>• Infrastructure as Code (IaC)</li>
          </ul>

          <p className="text-gray-300 max-w-lg mb-8">
            Systems that reduce manual work and surface the right data —
            securely, reliably, and at scale.
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
      </div>
    </section>
  );
};

export default CloudDevOpsSection;
