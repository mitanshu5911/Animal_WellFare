import React, { useState } from "react";
import { motion } from "framer-motion";

const RescueAnimalForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    animalType: "",
    injury: "",
    location: "",
    image: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setFormData({
          ...formData,
          location: `Lat: ${position.coords.latitude}, Lng: ${position.coords.longitude}`,
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({ ...formData, image: file });
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-2xl shadow-xl max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Left Column - Form */}
          <div>
            <h2 className="text-2xl font-bold text-center text-teal-600 mb-4">
              Report an Injured Animal
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Your Name"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
              <input
                name="animalType"
                placeholder="Type of Animal"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
              <textarea
                name="injury"
                placeholder="Describe the Injury"
                onChange={handleChange}
                required
                className="w-full p-2 border rounded-md"
              />
              <input
                name="location"
                placeholder="Location"
                value={formData.location}
                readOnly
                className="w-full p-2 border rounded-md bg-gray-100"
              />
              <button
                type="button"
                onClick={getCurrentLocation}
                className="w-full bg-teal-500 text-white p-2 rounded-md hover:bg-teal-600"
              >
                Use Current Location
              </button>

              {/* Image Upload */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Upload Image:</label>
                <input type="file" accept="image/*" onChange={handleImageChange} className="border p-2 rounded-md" />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Right Column - Image Preview */}
          <div className="flex justify-center items-center">
            {imagePreview ? (
              <motion.img
                src={imagePreview}
                alt="Uploaded Preview"
                className="rounded-xl shadow-lg w-full max-h-64 object-cover"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            ) : (
              <div className="w-full h-64 flex items-center justify-center bg-gray-200 rounded-xl">
                <span className="text-gray-500">No image uploaded</span>
              </div>
            )}
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-white p-8 rounded-2xl shadow-xl max-w-md"
        >
          <h2 className="text-3xl font-bold text-green-500">Thank You!</h2>
          <p className="mt-2 text-gray-600">
            Your report has been submitted. You are a hero for the animals! 🐾
          </p>
          <motion.div
            
            className="text-4xl mt-4"
          >
            🐶🐱🐦
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default RescueAnimalForm;
