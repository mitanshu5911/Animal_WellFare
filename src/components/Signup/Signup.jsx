import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaPaw, FaTree, FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const SignupPage = () => {
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", formData);
      setMessage(`✅ Signup Successful! Welcome, ${res.data.user.fullName}`);
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.message || "Signup Failed"}`);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-green-100 relative">
      <div className="absolute inset-0 bg-[url('https://source.unsplash.com/1600x900/?jungle,forest')] bg-cover bg-center opacity-40"></div>

      <motion.div
        className="relative bg-white p-8 rounded-3xl shadow-2xl w-[400px] text-center backdrop-blur-lg"
        whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
      >
        <div className="flex justify-center">
          <FaPaw className="text-green-700 text-5xl mb-4" />
        </div>

        <h2 className="text-green-800 text-3xl font-bold mb-4">Join the Wildlife Protectors</h2>
        <p className="text-gray-600 mb-6">Sign up to be a part of our animal welfare movement!</p>

        {/* Signup Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-inner">
            <FaUser className="text-green-600 mx-2" />
            <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="bg-transparent outline-none w-full" required />
          </div>

          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-inner">
            <FaEnvelope className="text-green-600 mx-2" />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="bg-transparent outline-none w-full" required />
          </div>

          <div className="flex items-center bg-gray-100 p-3 rounded-lg shadow-inner">
            <FaLock className="text-green-600 mx-2" />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="bg-transparent outline-none w-full" required />
          </div>

          <motion.button
            type="submit"
            className="bg-green-700 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-800 transition w-full mt-4 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            Sign Up
          </motion.button>
        </form>

        {message && <p className="text-sm mt-4 text-gray-700">{message}</p>}

        <p className="text-gray-600 text-sm mt-4">
          Already a member? <span className="text-green-700 font-bold cursor-pointer">Login</span>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;
