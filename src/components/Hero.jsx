import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const { scrollY } = useScroll();

  // subtle parallax for content
  const yText = useTransform(scrollY, [0, 300], [0, 40]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0.85]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black text-white pt-24 overflow-hidden"
    >
      {/* Glow Background (parallax + smoother) */}
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, 80]) }}
        className="absolute w-[320px] h-80 bg-green-500/20 blur-3xl rounded-full top-20 left-10"
      />
      <motion.div
        style={{ y: useTransform(scrollY, [0, 500], [0, -60]) }}
        className="absolute w-70 h-70 bg-green-500/10 blur-3xl rounded-full bottom-10 right-10"
      />

      {/* Content Wrapper */}
      <motion.div style={{ y: yText, opacity: opacityText }}>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold leading-tight max-w-4xl"
        >
          Building Scalable & Modern{" "}
          <span className="text-green-400">Digital Solutions</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-6 text-gray-400 max-w-2xl text-lg text-center mx-auto"
        >
          Apexcify Technologys empowers businesses with DevOps, cloud solutions,
          and modern web development to accelerate growth and innovation.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex gap-4 flex-wrap justify-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-green-500 text-black rounded-lg font-medium hover:bg-green-400 transition"
          >
            View Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-white/20 rounded-lg font-medium hover:bg-white/10 transition"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Mini trust badge (NEW ✨) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="mt-10 text-sm text-gray-500"
        >
          Trusted by startups & growing businesses worldwide
        </motion.div>

      </motion.div>
    </section>
  );
};

export default Hero;