import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialsSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  const testimonials = [
    {
      quote:
        "PA Real Estate Support Services transformed how I manage transactions. I can finally focus on what matters.",
      name: "John Doe",
      role: "Real Estate Agent",
    },
    {
      quote:
        "Their attention to detail and seamless processes make every closing stress-free. Simply the best.",
      name: "Jane Smith",
      role: "Broker",
    },
    {
      quote:
        "We've experienced 30% faster closings since working with PA Real Estate Support. Game changer!",
      name: "Lisa Johnson",
      role: "Transaction Coordinator",
    },
  ];

  return (
    <div className="testimonial-container py-20 bg-gradient-to-r from-indigo-500 to-purple-700">
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        What Our Clients Say
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="px-8 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <blockquote className="text-white text-lg italic">
              "{testimonial.quote}"
            </blockquote>
            <p className="mt-4 text-white font-semibold">
              - {testimonial.name}, {testimonial.role}
            </p>
          </motion.div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;