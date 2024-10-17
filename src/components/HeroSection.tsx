import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-scroll';
import animationData from '../assets/hero-animation.json';

const HeroSection: React.FC = () => {
  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Lottie Animation */}
      <Lottie
        animationData={animationData}
        loop
        className="absolute inset-0 h-full w-full object-cover opacity-50"
      />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-8">
        <motion.h1
          className="text-6xl font-extrabold leading-tight md:text-7xl lg:text-8xl"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 80 }}
        >
          Unlock Your Real Estate Potential
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl">
          Streamline transactions like never before with PA Real Estate Support Services.
        </p>

        {/* Glassmorphism CTA Button */}
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, yoyo: Infinity }}
        >
          <Link
            to="about"
            smooth={true}
            duration={1000}
            className="mt-8 glass-button px-6 py-3 text-xl font-medium rounded-full cursor-pointer"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <Link to="about" smooth={true} duration={1000} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <FaChevronDown className="text-white animate-bounce text-4xl" />
      </Link>
    </motion.div>
  );
};

export default HeroSection;