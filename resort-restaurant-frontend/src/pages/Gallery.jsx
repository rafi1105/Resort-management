import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import galleryData from '../data/gallery.json';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Restaurant', 'Food', 'Resort', 'Rooms', 'Events'];

  const filteredImages =
    selectedCategory === 'All'
      ? galleryData.gallery
      : galleryData.gallery.filter((item) => item.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Gallery"
        subtitle="Explore the beauty of Paradise Resort through our lens"
        image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
        height="h-[60vh]"
      />

      {/* Gallery Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Visual Journey"
            subtitle="Our Collection"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gold-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gold-100'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Gallery Grid - Masonry Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredImages.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className={`relative group cursor-pointer overflow-hidden rounded-lg ${
                  index % 7 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                onClick={() => setSelectedImage(item)}
              >
                <img
                  src={item.imageURL}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="text-lg font-serif font-bold">{item.title}</h3>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-gold-600 text-white px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.category}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white text-4xl hover:text-gold-400 transition-colors z-10"
          >
            ×
          </button>
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.imageURL}
              alt={selectedImage.title}
              className="w-full h-auto rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-serif font-bold mb-2">
                {selectedImage.title}
              </h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <span className="inline-block mt-4 bg-gold-600 px-4 py-2 rounded-full text-sm">
                {selectedImage.category}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Instagram Section */}
      <section className="section-padding bg-luxury-dark text-white">
        <div className="container-custom text-center">
          <SectionHeader
            title="Follow Our Journey"
            subtitle="@ParadiseResort"
            light
          />
          <p className="text-xl mb-8 text-gray-300">
            Share your moments with us using #ParadiseResortDining
          </p>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-8 rounded-lg"
          >
            Follow Us on Instagram
          </motion.a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
