import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-3">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-semibold">
            Apexcify<span className="text-green-400">.</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm max-w-sm">
            Building scalable digital solutions with modern technologies,
            cloud systems, and DevOps excellence.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold text-green-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            {["home", "services", "about", "projects", "contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="hover:text-white transition"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold text-green-400 mb-4">
            Contact
          </h3>
          <p className="text-gray-400 text-sm">contact@apexcify.com</p>
          <p className="text-gray-400 text-sm mt-2">+1 (234) 567-890</p>
          <p className="text-gray-400 text-sm mt-2">Global • Remote</p>
        </div>
      </div>

      {/* Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ margin: "-100px" }}
        transition={{ duration: 0.4 }}
        className="mt-10 border-t border-white/10 pt-6 text-center text-gray-500 text-sm"
      >
        © {new Date().getFullYear()} Apexcify Technologys. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;