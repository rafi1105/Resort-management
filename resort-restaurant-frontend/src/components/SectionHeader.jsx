import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ 
  title, 
  subtitle, 
  centered = true,
  light = false 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {subtitle && (
        <p className={`text-sm uppercase tracking-widest mb-2 ${
          light ? 'text-gold-400' : 'text-gold-600'
        }`}>
          {subtitle}
        </p>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold ${
        light ? 'text-white' : 'text-luxury-dark'
      }`}>
        {title}
      </h2>
      <div className={`w-24 h-1 ${
        light ? 'bg-gold-400' : 'bg-gold-600'
      } ${centered ? 'mx-auto' : ''} mt-4`}></div>
    </motion.div>
  );
};

export default SectionHeader;
