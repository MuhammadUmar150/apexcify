import { motion } from "framer-motion";

const companyFeatures = [
  { title: "Innovation", desc: "Creative solutions to solve complex problems." },
  { title: "Reliability", desc: "High-quality and dependable delivery every time." },
  { title: "Performance", desc: "Optimized applications with speed and scalability in mind." },
  { title: "Security", desc: "Ensuring data protection and privacy in every project." },
  { title: "Collaboration", desc: "Working closely with clients to meet goals efficiently." },
  { title: "Sustainability", desc: "Building scalable solutions with long-term value." },
];

const founders = [
  { name: "Alice Johnson", role: "CEO & Founder" },
  { name: "Mark Thompson", role: "CTO & Co-Founder" },
  { name: "Sophia Lee", role: "Head of Design" },
  { name: "Daniel Kim", role: "Lead Developer" },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative pt-28 pb-16 px-6 bg-black text-white"
    >
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px 0px -100px 0px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold"
        >
          About <span className="text-green-400">Apexcify</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px 0px -100px 0px" }}
          transition={{ delay: 0.1, duration: 0.45, ease: "easeOut" }}
          className="mt-4 text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          At Apexcify Technologys, we focus on delivering scalable and modern digital solutions. From web development to cloud integration and DevOps automation, our mission is to empower businesses to grow and innovate efficiently. Our team combines creativity, expertise, and cutting-edge technology to transform ideas into reality.
        </motion.p>

        {/* Company Features */}
        <motion.div
          className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px 0px -100px 0px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {companyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
              }}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md hover:border-green-400/40 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-green-400">{feature.title}</h3>
              <p className="mt-2 text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Founders */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px 0px -100px 0px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h3 className="text-2xl font-bold mb-6">Meet Our Founders</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-100px 0px -100px 0px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="p-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-full flex flex-col justify-center items-center cursor-pointer hover:border-green-400/40"
              >
                <div className="w-16 h-16 bg-green-400 rounded-full mb-3 flex items-center justify-center text-black font-bold text-base">
                  {founder.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h4 className="text-base font-semibold text-green-400">{founder.name}</h4>
                <p className="text-gray-400 text-xs mt-1">{founder.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;