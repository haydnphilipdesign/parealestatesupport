import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer: React.FC = () => (
  <footer className="footer bg-gray-900 text-white py-10">
    <div className="max-w-screen-xl mx-auto px-8">
      {/* Top Row: Quick Links & Social Media */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul>
            <li><a href="#" className="footer-link">About Us</a></li>
            <li><a href="#" className="footer-link">Services</a></li>
            <li><a href="#" className="footer-link">Testimonials</a></li>
            <li><a href="#" className="footer-link">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
            <li><a href="#" className="footer-link">Terms of Service</a></li>
            <li><a href="#" className="footer-link">FAQs</a></li>
            <li><a href="#" className="footer-link">Support</a></li>
          </ul>
        </div>

        <div className="social-icons flex justify-start md:justify-end space-x-6">
          <motion.a whileHover={{ scale: 1.2 }} href="https://facebook.com">
            <FaFacebook size={28} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://twitter.com">
            <FaTwitter size={28} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://instagram.com">
            <FaInstagram size={28} />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://linkedin.com">
            <FaLinkedin size={28} />
          </motion.a>
        </div>
      </div>

      {/* Bottom Row: Copyright */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} PA Real Estate Support Services. All Rights Reserved.
      </div>
    </div>
  </footer>
);

export default Footer;