import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactUs() {
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const charLimit = 500;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-green-100 p-6">
      {!submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl"
        >
          <h2 className="text-3xl font-bold text-green-600 text-center mb-6">Contact Us</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" required />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" required />
            <input type="tel" placeholder="Phone Number" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" required />
            <input type="text" placeholder="Subject" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400" required />

            <div className="relative">
              <textarea
                placeholder="Write your message..."
                className="w-full p-3 border rounded-lg h-32 resize-none focus:ring-2 focus:ring-green-400"
                maxLength={charLimit}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span className={`absolute bottom-3 right-3 text-sm ${message.length >= charLimit ? "text-red-500" : "text-gray-500"}`}>
                {message.length}/{charLimit}
              </span>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-2xl text-center"
          >
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold text-green-600"
            >
              Thank You!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-gray-600 mt-4"
            >
              We appreciate you reaching out to us. Our team will get back to you shortly.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6"
            >
              🎉
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
