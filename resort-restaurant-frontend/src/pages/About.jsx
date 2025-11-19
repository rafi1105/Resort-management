import React from 'react';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';

const About = () => {
  const values = [
    {
      icon: '🎯',
      title: 'Quality Service',
      description: 'We strive for excellence in every meal and every guest interaction',
    },
    {
      icon: '💚',
      title: 'Cleanliness',
      description: 'Maintaining high standards of hygiene and cleanliness throughout',
    },
    {
      icon: '🤝',
      title: 'Hospitality',
      description: 'Creating welcoming experiences through genuine care and warmth',
    },
    {
      icon: '✨',
      title: 'Value',
      description: 'Providing the best quality service and comfort at fair prices',
    },
  ];

  const team = [
    {
      name: 'Chef Antoine Dubois',
      role: 'Executive Chef',
      image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=400',
      bio: '20+ years Michelin-star experience',
    },
    {
      name: 'Isabella Romano',
      role: 'Pastry Chef',
      image: 'https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=400',
      bio: 'Award-winning dessert specialist',
    },
    {
      name: 'Marcus Chen',
      role: 'Head Sommelier',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
      bio: 'Master of wine pairing',
    },
  ];

  const milestones = [
    { year: '2010', event: 'Success Inn Opens in Dhaka' },
    { year: '2013', event: 'Restaurant Expansion Completed' },
    { year: '2016', event: 'Achieved 3-Star Rating' },
    { year: '2019', event: '1000+ Happy Guests Milestone' },
    { year: '2022', event: 'Room Renovation Project' },
    { year: '2024', event: 'Digital Booking System Launch' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection
        title="Our Story"
        subtitle="A legacy of culinary excellence and unforgettable experiences"
        image="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600"
        height="h-[60vh]"
      />

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeader
                title="Our Journey"
                subtitle="Serving Dhaka Since 2010"
                centered={false}
              />
              <p className="text-gray-600 mb-4 leading-relaxed">
                Success Inn has been a trusted name in hospitality in Dhaka since 2010. What started as a vision to provide quality accommodation and dining has grown into a beloved 3-star hotel serving both local and international guests.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Every meal served and every guest welcomed reflects our commitment to honest service, quality food, and comfortable stays. We believe in treating our guests like family.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Located conveniently at Rayerbag Bus-stand in Kadomtoli, we strive to offer the best value and experience to all who walk through our doors.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=400"
                alt="Chef at work"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400"
                alt="Restaurant ambiance"
                className="rounded-lg shadow-lg mt-8"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Our Core Values"
            subtitle="What We Stand For"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <div className="p-6 text-center">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-luxury-dark">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Meet Our Culinary Masters"
            subtitle="Our Team"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-serif font-bold mb-1 text-luxury-dark">
                      {member.name}
                    </h3>
                    <p className="text-gold-600 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="section-padding bg-luxury-dark text-white">
        <div className="container-custom">
          <SectionHeader
            title="Our Journey of Excellence"
            subtitle="Milestones"
            light
          />
          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center mb-8 last:mb-0"
              >
                <div className="flex-shrink-0 w-24 text-gold-400 font-bold text-xl">
                  {milestone.year}
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-gold-400 rounded-full mx-8"></div>
                <div className="flex-grow">
                  <p className="text-lg">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionHeader
            title="Awards & Recognition"
            subtitle="Accolades"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {[
              { name: 'Michelin', stars: '⭐⭐' },
              { name: 'Forbes', stars: '⭐⭐⭐⭐⭐' },
              { name: 'Wine Spectator', award: 'Grand Award' },
              { name: "World's 50 Best", award: 'Top 50' },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{award.stars || '🏆'}</div>
                <h4 className="font-serif font-bold text-luxury-dark mb-1">
                  {award.name}
                </h4>
                <p className="text-gold-600 text-sm">{award.award || award.stars}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
