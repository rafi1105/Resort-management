import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  onClick, 
  type = 'button', 
  disabled = false,
  fullWidth = false,
  className = ''
}) => {
  const baseStyles = 'font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-gold-600 hover:bg-gold-700 text-white hover:scale-105',
    secondary: 'bg-transparent border-2 border-gold-600 text-gold-600 hover:bg-gold-600 hover:text-white',
    dark: 'bg-luxury-dark hover:bg-gray-800 text-white hover:scale-105',
    outline: 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-luxury-dark',
  };

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;
