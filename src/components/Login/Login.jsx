import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaUser, FaLock, FaLeaf, FaMoon } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-900 relative">
      {/* Jungle Background Image (Dark Mode) */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?dark,jungle')] bg-cover bg-center opacity-20"></div>

      {/* Login Card */}
      <motion.div
        className="relative bg-gray-800 p-8 rounded-3xl shadow-2xl w-[400px] text-center backdrop-blur-lg"
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.3)" }}
      >
        <div className="flex justify-center">
          <FaMoon className="text-yellow-400 text-5xl mb-4 animate-pulse" />
        </div>

        <h2 className="text-green-400 text-3xl font-bold mb-4">Welcome Back</h2>
        <p className="text-gray-400 mb-6">Login to continue your animal welfare journey!</p>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center bg-gray-700 p-3 rounded-lg shadow-inner">
            <FaUser className="text-green-300 mx-2" />
            <input type="text" placeholder="Username" className="bg-transparent outline-none w-full text-white" />
          </div>

          <div className="flex items-center bg-gray-700 p-3 rounded-lg shadow-inner">
            <FaLock className="text-green-300 mx-2" />
            <input type="password" placeholder="Password" className="bg-transparent outline-none w-full text-white" />
          </div>

          <motion.button
            type="submit"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition w-full mt-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Login
          </motion.button>
        </form>

        <p className="text-gray-400 text-sm mt-4">
          New here? <span className="text-green-400 font-bold cursor-pointer">Sign Up</span>
        </p>
      </motion.div>

      {/* Jungle Icons for Decor */}
      <FaPaw className="absolute top-10 left-10 text-green-500 text-4xl opacity-80 animate-spin-slow" />
      <FaLeaf className="absolute bottom-10 right-10 text-green-400 text-4xl opacity-80 animate-bounce" />
    </div>
  );
};

export default LoginPage;
