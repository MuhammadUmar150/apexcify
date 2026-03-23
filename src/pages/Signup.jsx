import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      {/* Background Glow */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-75 h-75 bg-green-500/20 blur-3xl rounded-full top-10 left-10"
      />
      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute w-65 h-65 bg-green-500/10 blur-3xl rounded-full bottom-10 right-10"
      />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md bg-white/5 border border-white/10 rounded-xl p-8 backdrop-blur-md z-10"
      >

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl font-bold text-center"
        >
          Create your <span className="text-green-400">Account</span>
        </motion.h2>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 space-y-4"
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 bg-black border border-white/10 rounded-lg focus:border-green-400 outline-none transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-black border border-white/10 rounded-lg focus:border-green-400 outline-none transition"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-black border border-white/10 rounded-lg focus:border-green-400 outline-none transition"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 bg-black border border-white/10 rounded-lg focus:border-green-400 outline-none transition"
          />

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full py-3 bg-green-500 text-black rounded-lg font-medium hover:bg-green-400 transition"
          >
            Sign Up
          </motion.button>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="text-sm text-gray-400 mt-4 text-center"
        >
          Already have an account?{" "}
          <Link to={'/auth'}>
          <span className="text-green-400 cursor-pointer hover:underline">
            Login
          </span>
          </Link>
        </motion.p>

      </motion.div>
    </section>
  );
};

export default Signup;