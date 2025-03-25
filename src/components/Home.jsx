import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const animals = [
  { name: "Lion", image: "https://c4.wallpaperflare.com/wallpaper/565/540/37/resting-lion-brown-lion-wallpaper-preview.jpg" },
  { name: "Elephant", image: "https://cdn.britannica.com/71/271-050-0BACC077/Asian-elephant-Elephas-Maximus.jpg" },
  { name: "Penguin", image: "https://www.whoi.edu/wp-content/uploads/2021/07/graphics-SIPEX_P_Kimball-f16433856-c.jpg" },
  { name: "Dog", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5Js7N6e649aNcz4IJWmsZKnZ21ibv5OHJOg&s" },
];

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-900">
      <section className="relative w-full h-[500px] bg-cover bg-center" style={{ backgroundImage: "url('https://cdn.britannica.com/94/494-050-A674AD3A/Fallow-deer-dama-dama.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Discover the Beauty of Animals
          </motion.h1>
          <p className="mt-4 text-lg max-w-2xl">
            Learn amazing facts about wildlife, adopt pets, and explore animal welfare initiatives.
          </p>
        </div>
      </section>

      <section className="py-10 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">Meet the Animals</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={3000}>
          {animals.map((animal, index) => (
            <div key={index} className="flex flex-col items-center">
              <img src={animal.image} alt={animal.name} className="rounded-lg shadow-lg h-80 w-full object-fill" />
              <p className="legend text-lg font-semibold mt-2">{animal.name}</p>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="py-10 px-6 md:px-20 bg-green-100">
        <h2 className="text-3xl font-bold text-center mb-6">Interesting Animal Facts</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">Did you know?</h3>
            <p className="mt-2">Elephants can recognize themselves in a mirror!</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">Fastest Bird</h3>
            <p className="mt-2">The Peregrine Falcon can reach speeds of over 240 mph while diving.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-xl">Dogs' Super Sense</h3>
            <p className="mt-2">Dogs have an incredible sense of smell, detecting diseases like cancer!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-6">Explore More</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md border border-purple-300">
            <h3 className="font-semibold text-2xl text-purple-600">Distinct Animals</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRAMg5TSqsB3dUfp5nW4YhkC1XnWZrkrPIHFqvCV1-uXzvksZq5oeXEFCcBgdGCLY8As&usqp=CAU" alt="Distinct Animals" className="mt-4 mb-2 w-full h-32 object-fill rounded" />
            <p className="mt-2">Explore unique and rare species from around the globe.</p>
            <Link to="/distinct-animals" className="mt-4 inline-block text-purple-700 font-bold underline">Learn More</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md border border-green-300">
            <h3 className="font-semibold text-2xl text-green-600">Wild Animals</h3>
            <img src="https://img.freepik.com/premium-vector/happy-cartoon-wild-animals-vector-illustration_1316704-27187.jpg" alt="Wild Animals" className="mt-4 mb-2 w-full h-32 object-fill rounded" />
            <p className="mt-2">Discover fascinating creatures that roam the wild.</p>
            <Link to="/wild-animals" className="mt-4 inline-block text-green-700 font-bold underline">Learn More</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-md border border-blue-300">
            <h3 className="font-semibold text-2xl text-blue-600">Pets</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3HdpL2kgsO7yW3ncacgvJKkBw40w2t2EfdQ&s" alt="Pets" className="mt-4 mb-2 w-full h-32 object-fill rounded" />
            <p className="mt-2">Find loving companions and learn how to care for them.</p>
            <Link to="/pets" className="mt-4 inline-block text-blue-700 font-bold underline">Discover More</Link>
          </motion.div>
        </div>
      </section>

      <section className="py-10 px-6 md:px-20 bg-green-600 text-white text-center">
        <h2 className="text-3xl font-bold">Get Involved</h2>
        <p className="mt-4">Adopt, volunteer, or support animal welfare today!</p>
        <Link to="/adopt" className="mt-4 inline-block bg-white text-green-600 px-6 py-2 font-bold rounded shadow-md hover:bg-gray-200">
          Adopt a Pet
        </Link>
      </section>

      <div className="bg-gray-50  text-gray-900">

      <section className="py-10 px-6 md:px-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-6">The Incredible World of Animals</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">8.7 Million Species</h3>
            <p className="mt-2">Scientists estimate there are approximately 8.7 million species on Earth, with many yet to be discovered!</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">1.2 Million Described</h3>
            <p className="mt-2">Only around 1.2 million species have been officially identified and named.</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">70% in Oceans</h3>
            <p className="mt-2">An estimated 70% of species live in the ocean, many still undiscovered in the deep sea.</p>
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mt-6 text-lg max-w-3xl mx-auto"
        >
          From the tiny microscopic organisms to the largest blue whales, our planet is home to an astonishing variety of life.
          Protecting biodiversity is crucial for the health of ecosystems and future generations.
        </motion.p>
      </section>
    </div>
     
    </div>
  );
};

export default Home;