import React from "react";
import { motion } from "framer-motion";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

const modalVariants = {
  hidden: { y: "-100vh", opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const AnimalModal = ({ animal, closeModal }) => {
  if (!animal) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      onClick={closeModal}
    >
      <motion.div
        className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-6 relative overflow-hidden"
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside modal
      >
        {/* Close Button - Glassmorphic Theme */}
        <button
          className="absolute top-4 right-4 bg-white/30 backdrop-blur-lg text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-white/50 transition-all transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-gray-300"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image with Overlay */}
        <div className="relative w-full h-60">
          <img
            src={animal.image}
            alt={animal.name}
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl" />
          <h2 className="absolute bottom-4 left-6 text-white text-4xl font-bold drop-shadow-lg">
            {animal.name}
          </h2>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="grid grid-cols-2 gap-4">
            <p className="text-lg">
              <strong className="text-teal-600">Population:</strong> {animal.population}
            </p>
            <p className="text-lg">
              <strong className="text-teal-600">Lifespan:</strong> {animal.lifespan}
            </p>
            <p className="text-lg">
              <strong className="text-teal-600">Diet:</strong> {animal.diet}
            </p>
          </div>

          <p className="mt-4 text-gray-700">{animal.description}</p>

          {/* Fun Fact Section */}
          <div className="mt-6 p-4 bg-gradient-to-r from-teal-500 to-green-400 text-white rounded-lg shadow-md">
            <p className="italic text-lg">🌟 {animal.fun_fact}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimalModal;