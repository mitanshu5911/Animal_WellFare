import React from "react";

const AnimalCard = ({ name, image }) => {
  return (
    <div className="relative w-80 h-48 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl duration-300">
      <img src={image} alt={name} className="w-full h-full object-fill" />
      <div className="absolute bottom-4 right-4 text-white text-xl font-semibold px-4 py-2">
        {name}
      </div>
    </div>
  );
};

export default AnimalCard;
