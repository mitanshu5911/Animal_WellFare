import React from 'react';
import Header from './components/Header/Header';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import AnimalPage from './components/Animal/Animal';
import ContactUs from './components/contact/ContactUs';
import AboutUs from './components/Aboutus/AboutUs';
import SignupPage from './components/Signup/Signup';
import LoginPage from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RescueAnimalForm from './components/Injuried/Injuried';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animal" element={<AnimalPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/injured-animal" element={<RescueAnimalForm />} />

        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;