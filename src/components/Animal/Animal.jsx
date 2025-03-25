import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimalCard from "./Card";
import AnimalModal from "./AnimalDetailModal";
import animals from "./animalArr.json";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AnimalPage = () => {
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter animals based on search query
  const filteredAnimals = animals.filter((animal) =>
    animal.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search for an animal..."
          className="p-3 w-96 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <h1 className="text-4xl font-bold text-center text-teal-700 mb-8">
        🐾 Explore the Animal Kingdom 🐾
      </h1>

      <motion.div
        className="flex flex-wrap gap-6 justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {filteredAnimals.length > 0 ? (
          filteredAnimals.map((animal, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedAnimal(animal)}
            >
              <AnimalCard name={animal.name} image={animal.image} />
            </motion.div>
          ))
        ) : (
          <p className="text-gray-500 text-lg mt-10">No animals found.</p>
        )}
      </motion.div>

      {selectedAnimal && (
        <AnimalModal animal={selectedAnimal} closeModal={() => setSelectedAnimal(null)} />
      )}
    </div>
  );
};

export default AnimalPage;
