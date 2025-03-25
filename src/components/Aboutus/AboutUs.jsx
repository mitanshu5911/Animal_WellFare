import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  const cardData = [
    {
      title: "About Us",
      content:
        "We are dedicated to wildlife conservation and spreading awareness about nature. Our team works to protect ecosystems and educate communities on sustainability.",
    },
    {
      title: "Our Mission",
      content:
        "Our goal is to inspire people to take action towards environmental sustainability. Through education, outreach, and conservation efforts, we strive to make a difference.",
    },
    {
      title: "Get Involved",
      content:
        "Join us in making an impact! You can participate in wildlife programs, donate, or volunteer to help protect endangered species and preserve natural habitats.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-green-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-8">Welcome to Our Community</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-xl w-80 text-center backdrop-blur-md"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.2)" }}
          >
            <h2 className="text-green-600 text-2xl font-bold">{card.title}</h2>
            <p className="text-gray-700 mt-2">{card.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
