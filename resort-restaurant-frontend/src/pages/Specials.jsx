import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Modal from '../components/Modal';
import specialsData from '../data/specials.json';

const Specials = () => {
  const [selectedSpecial, setSelectedSpecial] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (special) => {
    setSelectedSpecial(special);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedSpecial(null), 300);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Special Dishes"
        subtitle="Exclusive culinary experiences crafted by our master chefs"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600"
        height="h-[60vh]"
      />

      {/* Specials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Today's Special Offerings"
            subtitle="Featured Experiences"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialsData.specials.map((special, index) => (
              <motion.div
                key={special.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card onClick={() => openModal(special)}>
                  <div className="relative">
                    <img
                      src={special.imageURL}
                      alt={special.name}
                      className="w-full h-64 object-cover"
                    />
                    {special.isPopular && (
                      <div className="absolute top-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        🔥 Popular
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-serif font-bold text-luxury-dark mb-2">
                      {special.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{special.shortDescription}</p>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-3xl font-bold text-gold-600">
                        ${special.price.toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500">
                        {special.availableDays[0]}
                      </span>
                    </div>
                    <button className="text-gold-600 hover:text-gold-700 font-semibold">
                      Learn More →
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Specials */}
      <section className="section-padding bg-luxury-dark text-white">
        <div className="container-custom">
          <SectionHeader
            title="Why Our Specials Are Extraordinary"
            subtitle="The Difference"
            light
          />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '👨‍🍳',
                title: 'Chef-Curated',
                description: 'Each special is personally designed by our executive chef',
              },
              {
                icon: '🌿',
                title: 'Seasonal Ingredients',
                description: 'We use only the freshest seasonal and local produce',
              },
              {
                icon: '🍷',
                title: 'Wine Pairing',
                description: 'Expertly paired wines complement every special dish',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-serif font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedSpecial && (
          <div className="relative">
            <img
              src={selectedSpecial.imageURL}
              alt={selectedSpecial.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-luxury-dark mb-2">
                    {selectedSpecial.name}
                  </h2>
                  {selectedSpecial.isPopular && (
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      🔥 Most Popular
                    </span>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-gold-600">
                    ${selectedSpecial.price.toFixed(2)}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">per person</p>
                </div>
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedSpecial.fullDescription}
              </p>

              <div className="mb-6">
                <h4 className="font-semibold text-luxury-dark mb-2">Available Days:</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedSpecial.availableDays.map((day, index) => (
                    <span
                      key={index}
                      className="bg-gold-100 text-gold-800 px-3 py-1 rounded-full text-sm"
                    >
                      {day}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={closeModal}
                  className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    closeModal();
                    window.location.href = '/reservation';
                  }}
                  className="flex-1 bg-gold-600 hover:bg-gold-700 text-white font-semibold py-3 px-6 rounded-lg transition-all"
                >
                  Book This Experience
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Specials;
