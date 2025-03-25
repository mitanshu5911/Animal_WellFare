import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaTree, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-green-100 relative">
      {/* Jungle Clipart Background */}
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?jungle,forest')] bg-cover bg-center opacity-40"></div>

      {/* Signup Card */}
      <motion.div
        className="relative bg-white p-8 rounded-3xl shadow-2xl w-[400px] text-center backdrop-blur-lg"
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
      >
        <div className="flex justify-center">
          <FaPaw className="text-green-700 text-5xl mb-4" />
        </div>

        <h2 className="text-green-800 text-3xl font-bold mb-4">Join the Wildlife Protectors</h2>
        <p className="text-gray-600 mb-6">Sign up to be a part of our animal welfare movement!</p>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-inner">
            <FaUser className="text-green-600 mx-2" />
            <input type="text" placeholder="Full Name" className="bg-transparent outline-none w-full" />
          </div>

          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-inner">
            <FaEnvelope className="text-green-600 mx-2" />
            <input type="email" placeholder="Email" className="bg-transparent outline-none w-full" />
          </div>

          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-inner">
            <FaLock className="text-green-600 mx-2" />
            <input type="password" placeholder="Password" className="bg-transparent outline-none w-full" />
          </div>

          <motion.button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition w-full mt-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-gray-600 text-sm mt-4">
          Already a member? <span className="text-green-700 font-bold cursor-pointer">Login</span>
        </p>
      </motion.div>

      {/* Jungle Icons for Decor */}
      <FaTree className="absolute bottom-10 left-10 text-green-700 text-4xl opacity-80 animate-bounce" />
      <FaPaw className="absolute top-10 right-10 text-green-600 text-4xl opacity-80 animate-spin-slow" />
    </div>
  );
};

export default SignupPage;
