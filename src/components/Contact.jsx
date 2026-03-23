import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-3xl md:text-4xl font-bold"
        >
          Get In <span className="text-green-400">Touch</span>
        </motion.h2>

        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Have a project in mind? Let’s build something powerful together.
        </p>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid gap-6 text-left"
        >
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-green-400 outline-none text-white placeholder-gray-500 transition"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-green-400 outline-none text-white placeholder-gray-500 transition"
          />

          {/* Message */}
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:border-green-400 outline-none text-white placeholder-gray-500 transition resize-none"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="mt-2 px-6 py-3 bg-green-500 text-black rounded-lg font-medium hover:bg-green-400 transition"
          >
            Send Message
          </button>
        </motion.form>

      </div>
    </section>
  );
};

export default Contact;