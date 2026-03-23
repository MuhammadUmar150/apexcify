import { motion } from "framer-motion";
import { 
  CodeBracketIcon, 
  CloudArrowUpIcon, 
  Squares2X2Icon, 
  DevicePhoneMobileIcon, 
  ChartBarIcon, 
  Cog6ToothIcon 
} from "@heroicons/react/24/outline";

const services = [
  { title: "Web Development", desc: "Modern, scalable web applications built with the latest technologies and best practices.", icon: <CodeBracketIcon className="w-10 h-10 text-green-400" /> },
  { title: "DevOps Solutions", desc: "CI/CD pipelines, automation, and cloud infrastructure to streamline development workflows.", icon: <Cog6ToothIcon className="w-10 h-10 text-green-400" /> },
  { title: "Cloud Integration", desc: "Deploy and manage applications on cloud platforms with high availability and security.", icon: <CloudArrowUpIcon className="w-10 h-10 text-green-400" /> },
  { title: "UI/UX Design", desc: "Clean, intuitive interfaces focused on user experience and performance.", icon: <Squares2X2Icon className="w-10 h-10 text-green-400" /> },
  { title: "Mobile Apps", desc: "Native & cross-platform apps designed for performance and user engagement.", icon: <DevicePhoneMobileIcon className="w-10 h-10 text-green-400" /> },
  { title: "Analytics & Insights", desc: "Data-driven insights to optimize business decisions and growth.", icon: <ChartBarIcon className="w-10 h-10 text-green-400" /> },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section id="services" className="bg-black text-white pt-36 py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-3xl md:text-4xl font-bold"
        >
          Our <span className="text-green-400">Services</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ delay: 0.05, duration: 0.35, ease: "easeOut" }}
          className="mt-4 text-gray-400 max-w-2xl mx-auto"
        >
          We provide end-to-end solutions to help businesses build, deploy, and scale efficiently.
        </motion.p>

        {/* Cards Container */}
        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -10,
                scale: 1.05,
                transition: { type: "spring", stiffness: 250, damping: 18 },
              }}
              className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-green-400/40 cursor-pointer flex flex-col items-center"
            >
              {/* Icon */}
              <motion.div 
                whileHover={{ rotate: 10 }}
                className="mb-4"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-green-400">{service.title}</h3>
              <p className="mt-2 text-sm text-gray-400 text-center">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;