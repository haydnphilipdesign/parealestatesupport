import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaHandshake, FaChartLine } from 'react-icons/fa';

const services = [
  {
    icon: <FaClipboardList size={50} />,
    title: "Transaction Coordination",
    description:
      "We handle everything from listing to closing, ensuring a seamless process.",
  },
  {
    icon: <FaHandshake size={50} />,
    title: "Client Management",
    description:
      "Maintain smooth relationships with your clients through our tools and processes.",
  },
  {
    icon: <FaChartLine size={50} />,
    title: "Performance Analytics",
    description:
      "Track performance metrics to optimize operations and improve client satisfaction.",
  },
];

const ServicesSection: React.FC = () => (
  <div className="services-section py-20 bg-gray-50">
    <h2 className="text-center text-4xl font-bold mb-10">
      Our Premium Services
    </h2>

    <div className="flex flex-wrap justify-center gap-8 px-8">
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="service-card p-8 rounded-xl shadow-lg bg-white hover:shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="icon text-indigo-600 mb-4">{service.icon}</div>
          <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
          <p className="text-gray-600">{service.description}</p>
        </motion.div>
      ))}
    </div>
  </div>
);

export default ServicesSection;