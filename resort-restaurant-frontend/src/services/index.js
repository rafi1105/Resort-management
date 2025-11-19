import api from './api';
import menuData from '../data/menu.json';
import specialsData from '../data/specials.json';
import galleryData from '../data/gallery.json';
import testimonialsData from '../data/testimonials.json';

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Menu Services
export const menuService = {
  // Get all menu items
  getAllItems: async () => {
    try {
      // In production, this would be: return await api.get('/menu');
      await delay(500);
      return menuData.menuItems;
    } catch (error) {
      console.error('Error fetching menu items:', error);
      throw error;
    }
  },

  // Get menu items by category
  getItemsByCategory: async (category) => {
    try {
      await delay(500);
      return menuData.menuItems.filter(item => item.category === category);
    } catch (error) {
      console.error('Error fetching menu items by category:', error);
      throw error;
    }
  },

  // Get single menu item
  getItemById: async (id) => {
    try {
      await delay(300);
      return menuData.menuItems.find(item => item.id === id);
    } catch (error) {
      console.error('Error fetching menu item:', error);
      throw error;
    }
  },

  // Get special items
  getSpecialItems: async () => {
    try {
      await delay(500);
      return menuData.menuItems.filter(item => item.isSpecial);
    } catch (error) {
      console.error('Error fetching special items:', error);
      throw error;
    }
  },
};

// Specials Services
export const specialsService = {
  // Get all specials
  getAllSpecials: async () => {
    try {
      // In production: return await api.get('/specials');
      await delay(500);
      return specialsData.specials;
    } catch (error) {
      console.error('Error fetching specials:', error);
      throw error;
    }
  },

  // Get special by ID
  getSpecialById: async (id) => {
    try {
      await delay(300);
      return specialsData.specials.find(special => special.id === id);
    } catch (error) {
      console.error('Error fetching special:', error);
      throw error;
    }
  },

  // Get popular specials
  getPopularSpecials: async () => {
    try {
      await delay(500);
      return specialsData.specials.filter(special => special.isPopular);
    } catch (error) {
      console.error('Error fetching popular specials:', error);
      throw error;
    }
  },
};

// Gallery Services
export const galleryService = {
  // Get all gallery items
  getAllImages: async () => {
    try {
      // In production: return await api.get('/gallery');
      await delay(500);
      return galleryData.gallery;
    } catch (error) {
      console.error('Error fetching gallery images:', error);
      throw error;
    }
  },

  // Get images by category
  getImagesByCategory: async (category) => {
    try {
      await delay(500);
      return galleryData.gallery.filter(item => item.category === category);
    } catch (error) {
      console.error('Error fetching gallery images by category:', error);
      throw error;
    }
  },
};

// Testimonials Services
export const testimonialsService = {
  // Get all testimonials
  getAllTestimonials: async () => {
    try {
      // In production: return await api.get('/testimonials');
      await delay(500);
      return testimonialsData.testimonials;
    } catch (error) {
      console.error('Error fetching testimonials:', error);
      throw error;
    }
  },

  // Get testimonials by rating
  getTestimonialsByRating: async (rating) => {
    try {
      await delay(500);
      return testimonialsData.testimonials.filter(t => t.rating === rating);
    } catch (error) {
      console.error('Error fetching testimonials by rating:', error);
      throw error;
    }
  },

  // Submit new testimonial
  submitTestimonial: async (testimonialData) => {
    try {
      // In production: return await api.post('/testimonials', testimonialData);
      await delay(1000);
      console.log('Testimonial submitted:', testimonialData);
      return { success: true, message: 'Testimonial submitted successfully' };
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      throw error;
    }
  },
};

// Reservation Services
export const reservationService = {
  // Create reservation
  createReservation: async (reservationData) => {
    try {
      // In production: return await api.post('/reservations', reservationData);
      await delay(1500);
      console.log('Reservation created:', reservationData);
      return { 
        success: true, 
        message: 'Reservation confirmed',
        confirmationNumber: `RES-${Date.now()}`,
        data: reservationData
      };
    } catch (error) {
      console.error('Error creating reservation:', error);
      throw error;
    }
  },

  // Get reservation by confirmation number
  getReservation: async (confirmationNumber) => {
    try {
      // In production: return await api.get(`/reservations/${confirmationNumber}`);
      await delay(500);
      return { confirmationNumber, status: 'confirmed' };
    } catch (error) {
      console.error('Error fetching reservation:', error);
      throw error;
    }
  },

  // Cancel reservation
  cancelReservation: async (confirmationNumber) => {
    try {
      // In production: return await api.delete(`/reservations/${confirmationNumber}`);
      await delay(1000);
      console.log('Reservation cancelled:', confirmationNumber);
      return { success: true, message: 'Reservation cancelled' };
    } catch (error) {
      console.error('Error cancelling reservation:', error);
      throw error;
    }
  },
};

// Contact Services
export const contactService = {
  // Submit contact form
  submitContactForm: async (contactData) => {
    try {
      // In production: return await api.post('/contact', contactData);
      await delay(1500);
      console.log('Contact form submitted:', contactData);
      return { success: true, message: 'Message sent successfully' };
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  },
};

export default {
  menuService,
  specialsService,
  galleryService,
  testimonialsService,
  reservationService,
  contactService,
};
