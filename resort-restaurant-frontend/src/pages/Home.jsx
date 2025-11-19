import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: '🍽️',
      title: 'Quality Dining',
      description: 'Delicious cuisine prepared by experienced chefs using fresh, quality ingredients',
    },
    {
      icon: '🏨',
      title: 'Comfortable Rooms',
      description: 'Clean and well-appointed rooms with modern amenities for a pleasant stay',
    },
    {
      icon: '👨‍🍳',
      title: 'Skilled Chefs',
      description: 'Experienced culinary team dedicated to serving flavorful and authentic dishes',
    },
    {
      icon: '🤝',
      title: 'Warm Hospitality',
      description: 'Friendly service and genuine care to make your experience memorable',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      comment: 'An absolutely unforgettable dining experience! The service and food were exceptional.',
      rating: 5,
    },
    {
      name: 'James Chen',
      comment: 'Best resort restaurant I\'ve ever visited. Will definitely return!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Welcome to Success Inn"
        subtitle="Experience quality dining and comfortable accommodation in the heart of Dhaka at our 3-star hotel"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600"
        primaryButton={{ text: 'View Menu', link: '/menu' }}
        secondaryButton={{ text: 'Book a Table', link: '/reservation' }}
      />

      {/* Welcome Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800"
                alt="Restaurant Interior"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                title="Welcome to Success Inn"
                subtitle="Our Story"
                centered={false}
              />
              <p className="text-gray-600 mb-4 leading-relaxed">
                Located in Kadomtoli, Dhaka, Success Inn offers a warm and comfortable stay combined with delicious dining experiences. Our 3-star hotel provides quality service and authentic hospitality.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our skilled chefs prepare each dish with care, using fresh ingredients to create flavorful meals that showcase the best of local and international cuisine.
              </p>
              <Button variant="primary" onClick={() => navigate('/about')}>
                Learn More About Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Why Choose Success Inn"
            subtitle="Our Excellence"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="p-6 text-center">
                    <div className="text-5xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-luxury-dark">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="section-padding bg-luxury-dark text-white">
        <div className="container-custom">
          <SectionHeader
            title="Today's Special Dishes"
            subtitle="Featured Menu"
            light
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: 'Grilled Lobster Thermidor',
                price: '$65',
                image: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?w=500',
              },
              {
                name: 'Wagyu Beef Tenderloin',
                price: '$85',
                image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=500',
              },
              {
                name: 'Chocolate Lava Cake',
                price: '$16',
                image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?w=500',
              },
            ].map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-serif font-bold mb-2 text-luxury-dark">
                      {dish.name}
                    </h3>
                    <p className="text-2xl text-gold-600 font-semibold">{dish.price}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Button variant="primary" onClick={() => navigate('/menu')}>
              View Full Menu
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="What Our Guests Say"
            subtitle="Testimonials"
          />
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-gold-500 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                    <p className="font-semibold text-luxury-dark">{testimonial.name}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative h-96 flex items-center justify-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1600)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold mb-6"
          >
            Reserve Your Table Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
          >
            Experience unforgettable moments with exceptional cuisine
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Button variant="primary" onClick={() => navigate('/reservation')}>
              Make a Reservation
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
