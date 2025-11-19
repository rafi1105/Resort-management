import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import testimonialsData from '../data/testimonials.json';

const Reviews = () => {
  const [filterRating, setFilterRating] = useState('all');

  const filteredReviews = filterRating === 'all'
    ? testimonialsData.testimonials
    : testimonialsData.testimonials.filter(review => review.rating === parseInt(filterRating));

  const averageRating = (
    testimonialsData.testimonials.reduce((sum, review) => sum + review.rating, 0) /
    testimonialsData.testimonials.length
  ).toFixed(1);

  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: testimonialsData.testimonials.filter(r => r.rating === rating).length,
    percentage: (testimonialsData.testimonials.filter(r => r.rating === rating).length / testimonialsData.testimonials.length) * 100,
  }));

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={index < rating ? 'text-gold-500' : 'text-gray-300'}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Customer Reviews"
        subtitle="Discover what our guests are saying about their experiences"
        image="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600"
        height="h-[60vh]"
      />

      {/* Overall Rating Summary */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8 mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Average Rating */}
              <div className="text-center border-r border-gray-200">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-6xl font-bold text-gold-600 mb-2">
                    {averageRating}
                  </div>
                  <div className="text-2xl mb-2">
                    {renderStars(Math.round(averageRating))}
                  </div>
                  <p className="text-gray-600">
                    Based on {testimonialsData.testimonials.length} reviews
                  </p>
                </motion.div>
              </div>

              {/* Rating Distribution */}
              <div>
                {ratingDistribution.map((item, index) => (
                  <motion.div
                    key={item.rating}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center mb-2"
                  >
                    <span className="w-12 text-sm font-semibold">
                      {item.rating} ★
                    </span>
                    <div className="flex-1 h-4 bg-gray-200 rounded-full mx-3 overflow-hidden">
                      <div
                        className="h-full bg-gold-500 rounded-full transition-all duration-1000"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-sm text-gray-600">{item.count}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', '5', '4', '3', '2', '1'].map((rating) => (
              <motion.button
                key={rating}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilterRating(rating)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  filterRating === rating
                    ? 'bg-gold-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gold-100'
                }`}
              >
                {rating === 'all' ? 'All Reviews' : `${rating} Stars`}
              </motion.button>
            ))}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-luxury-dark">{review.name}</h3>
                        <p className="text-sm text-gray-500">{review.location}</p>
                        <p className="text-xs text-gray-400">
                          {new Date(review.date).toLocaleDateString('en-US', {
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                      {review.verified && (
                        <span className="text-green-600 text-sm font-semibold">
                          ✓ Verified
                        </span>
                      )}
                    </div>
                    <div className="flex mb-3 text-xl">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonials Slider */}
      <section className="section-padding bg-luxury-dark text-white">
        <div className="container-custom">
          <SectionHeader
            title="Featured Guest Experiences"
            subtitle="Highlighted Reviews"
            light
          />

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {testimonialsData.testimonials
              .filter(review => review.rating === 5)
              .slice(0, 6)
              .map((review) => (
                <SwiperSlide key={review.id}>
                  <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg h-full">
                    <div className="flex mb-4 text-2xl">
                      {renderStars(review.rating)}
                    </div>
                    <p className="text-white mb-6 italic leading-relaxed">
                      "{review.comment}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover mr-3"
                      />
                      <div>
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-gray-300">{review.location}</p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>

      {/* Write a Review CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <SectionHeader
            title="Share Your Experience"
            subtitle="We Value Your Feedback"
          />
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Have you dined with us? We'd love to hear about your experience! Your feedback helps us continue to improve and serve you better.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gold-600 hover:bg-gold-700 text-white font-semibold py-4 px-10 rounded-lg transition-all duration-300"
          >
            Write a Review
          </motion.button>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { platform: 'TripAdvisor', rating: '5.0/5', reviews: '500+' },
              { platform: 'Google', rating: '4.9/5', reviews: '300+' },
              { platform: 'Yelp', rating: '5.0/5', reviews: '200+' },
              { platform: 'OpenTable', rating: '4.9/5', reviews: '400+' },
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">⭐</div>
                <h4 className="font-serif font-bold text-luxury-dark mb-1">
                  {badge.platform}
                </h4>
                <p className="text-gold-600 font-semibold">{badge.rating}</p>
                <p className="text-sm text-gray-500">{badge.reviews} reviews</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
