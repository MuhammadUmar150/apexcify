import { motion } from "framer-motion";

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "Scalable online store with secure payments and admin dashboard.",
  },
  {
    title: "Cloud Deployment System",
    desc: "Automated CI/CD pipelines for fast and reliable deployments.",
  },
  {
    title: "Analytics Dashboard",
    desc: "Real-time insights with dynamic data visualization.",
  },
  {
    title: "SaaS Platform",
    desc: "Multi-tenant SaaS system with subscriptions and auth.",
  },
];

const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Clients" },
  { value: "99%", label: "Satisfaction" },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our <span className="text-green-400">Work</span>
        </motion.h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A glimpse into the solutions we’ve crafted for modern businesses.
        </p>

        {/* Stats */}
        <div className="mt-10 flex justify-center gap-10 flex-wrap">
          {stats.map((item, i) => (
            <div key={i}>
              <p className="text-2xl font-bold text-green-400">{item.value}</p>
              <p className="text-gray-400 text-sm">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Slider */}
        <div className="mt-16 py-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide">
          <div className="flex gap-6 px-4 overflow-visible">

            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0.5, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ margin: "-100px" }}
                transition={{ duration: 0.4 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { type: "spring", stiffness: 300, damping: 20 },
                }}
                className="snap-center min-w-70 md:min-w-85 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md overflow-hidden hover:border-green-400/40 will-change-transform"
              >
                {/* Image */}
                <div className="h-44 bg-linear-to-br from-green-500/20 to-transparent flex items-center justify-center text-gray-500">
                  Preview
                </div>

                {/* Content */}
                <div className="p-5 text-left">
                  <h3 className="text-lg font-semibold text-green-400">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {project.desc}
                  </p>
                </div>
              </motion.div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;