import React from 'react';
import { Parallax } from 'react-parallax';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => (
  <Parallax
    bgImage="/resources_page.jpeg"
    strength={300}
    className="about-parallax"
  >
    <div className="flex flex-col items-center py-20 px-8 text-center text-white">
      <motion.h2
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Why Choose Us?
      </motion.h2>

      <motion.p
        className="mt-6 text-lg max-w-3xl leading-relaxed"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        We provide top-tier transaction coordination services, ensuring a smooth
        and stress-free experience. Our attention to detail and commitment to
        excellence are unmatched.
      </motion.p>

      {/* SVG Illustration */}
      <motion.img
        src="/serene_office_discussion.svg"
        alt="Office Discussion"
        className="mt-8 w-64"
        initial={{ scale: 0.8 }}
        whileInView={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 80 }}
      />
    </div>
  </Parallax>
);

export default AboutSection;