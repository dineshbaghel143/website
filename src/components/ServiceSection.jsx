import { motion } from "framer-motion";

const ServiceSection = ({ title, points, description, align }) => {
  const isLeft = align === "left";

  return (
    <section className="py-24 px-6 md:px-20">
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center ${
          !isLeft && "md:flex-row-reverse"
        }`}
      >
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {points.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-lg">
                <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-gray-300 mb-8">{description}</p>

          <button className="px-6 py-3 border border-pink-500 rounded-full hover:bg-pink-600 transition">
            Explore More
          </button>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="hidden md:flex justify-center"
        >
          <div className="w-72 h-72 bg-gradient-to-br from-pink-600 to-purple-700 rounded-3xl blur-xl opacity-70"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;
