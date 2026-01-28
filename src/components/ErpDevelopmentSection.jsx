import { motion } from "framer-motion";

const ErpDevelopmentSection = () => {
  return (
    <section className="relative bg-[#12001f] py-32 px-6 md:px-20 text-white overflow-hidden">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT – ERP GRAPHIC */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Rings */}
          <div className="w-[280px] h-[280px] rounded-full border border-purple-500/30 relative flex items-center justify-center">
            <div className="absolute w-[220px] h-[220px] rounded-full border border-purple-500/20" />
            <div className="absolute w-[160px] h-[160px] rounded-full border border-purple-500/20" />

            {/* Center */}
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center font-bold">
              ERP
            </div>
          </div>

          {/* Labels */}
          {[
            "Contact Management",
            "Sales Automation",
            "Marketing Campaigns",
            "Customer Support",
            "Analytics & Reporting",
          ].map((item, i) => (
            <div
              key={i}
              className="absolute text-xs px-4 py-2 rounded-full bg-purple-700/40 border border-purple-400/30"
              style={{
                top: `${20 + i * 12}%`,
                left: i % 2 === 0 ? "-12%" : "auto",
                right: i % 2 !== 0 ? "-12%" : "auto",
              }}
            >
              {item}
            </div>
          ))}
        </motion.div>

        {/* RIGHT – CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            ERP Development
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg mb-6">
            <li>• ERP Implementation & Customization</li>
            <li>• Customer Data Management</li>
            <li>• Integration Services</li>
            <li>• Analytics & Reporting</li>
          </ul>

          <p className="text-gray-300 max-w-lg mb-8">
            Systems that reduce manual work and surface the right data
            at the right time for smarter decisions.
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

export default ErpDevelopmentSection;
