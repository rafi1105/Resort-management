import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Modal from '../components/Modal';
import menuData from '../data/menu.json';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', 'Appetizers', 'Soups', 'Seafood', 'Main Course', 'Vegetarian', 'Desserts'];

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(menuData.menuItems);
    } else {
      setFilteredItems(
        menuData.menuItems.filter((item) => item.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Menu"
        subtitle="Discover our exquisite selection of culinary masterpieces"
        image="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1600"
        height="h-[60vh]"
      />

      {/* Menu Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Explore Our Culinary Offerings"
            subtitle="Menu Selection"
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

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card onClick={() => openModal(item)}>
                  <div className="relative">
                    <img
                      src={item.imageURL}
                      alt={item.name}
                      className="w-full h-56 object-cover"
                    />
                    {item.isSpecial && (
                      <div className="absolute top-4 right-4 bg-gold-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Special
                      </div>
                    )}
                    {item.isVegetarian && (
                      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        🌱 Vegetarian
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-serif font-bold text-luxury-dark">
                        {item.name}
                      </h3>
                      <span className="text-2xl font-bold text-gold-600">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-sm text-gold-600 mb-2">{item.category}</p>
                    <p className="text-gray-600 line-clamp-2">{item.description}</p>
                    <button className="mt-4 text-gold-600 hover:text-gold-700 font-semibold text-sm">
                      View Details →
                    </button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No items found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal for Item Details */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedItem && (
          <div className="relative">
            <img
              src={selectedItem.imageURL}
              alt={selectedItem.name}
              className="w-full h-96 object-cover"
            />
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h2 className="text-3xl font-serif font-bold text-luxury-dark mb-2">
                    {selectedItem.name}
                  </h2>
                  <p className="text-gold-600 font-semibold">{selectedItem.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-4xl font-bold text-gold-600">
                    ${selectedItem.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {selectedItem.isSpecial && (
                <div className="inline-block bg-gold-100 text-gold-800 px-4 py-2 rounded-lg mb-4">
                  ⭐ Today's Special
                </div>
              )}

              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {selectedItem.description}
              </p>

              {selectedItem.allergens && selectedItem.allergens.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-luxury-dark mb-2">Allergen Information:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.allergens.map((allergen, index) => (
                      <span
                        key={index}
                        className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
                      >
                        {allergen}
                      </span>
                    ))}
                  </div>
                </div>
              )}

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
                  Reserve Table
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Menu;
