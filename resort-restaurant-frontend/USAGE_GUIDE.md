# Usage Guide - Paradise Resort Restaurant Frontend

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Component Usage Examples

### Button Component

```jsx
import Button from './components/Button';

// Primary button
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>

// Secondary button
<Button variant="secondary" fullWidth>
  Full Width Button
</Button>

// Dark variant
<Button variant="dark" disabled>
  Disabled Button
</Button>
```

### Card Component

```jsx
import Card from './components/Card';

<Card hover={true} onClick={() => console.log('Clicked')}>
  <img src="image.jpg" alt="Card" />
  <div className="p-6">
    <h3>Card Title</h3>
    <p>Card description</p>
  </div>
</Card>
```

### SectionHeader Component

```jsx
import SectionHeader from './components/SectionHeader';

<SectionHeader
  title="Our Menu"
  subtitle="Culinary Excellence"
  centered={true}
  light={false}
/>
```

### HeroSection Component

```jsx
import HeroSection from './components/HeroSection';

<HeroSection
  title="Welcome"
  subtitle="Experience luxury dining"
  image="https://example.com/hero.jpg"
  primaryButton={{ text: 'View Menu', link: '/menu' }}
  secondaryButton={{ text: 'Book Now', link: '/reservation' }}
  height="h-screen"
/>
```

### Modal Component

```jsx
import Modal from './components/Modal';

const [isOpen, setIsOpen] = useState(false);

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
  <div className="p-8">
    <h2>Modal Title</h2>
    <p>Modal content</p>
  </div>
</Modal>
```

## Service Usage Examples

### Menu Service

```jsx
import { menuService } from './services';

// Get all menu items
const items = await menuService.getAllItems();

// Get by category
const seafood = await menuService.getItemsByCategory('Seafood');

// Get special items
const specials = await menuService.getSpecialItems();

// Get single item
const item = await menuService.getItemById(1);
```

### Reservation Service

```jsx
import { reservationService } from './services';

// Create reservation
const result = await reservationService.createReservation({
  fullName: 'John Doe',
  email: 'john@example.com',
  phone: '+1234567890',
  date: '2024-12-25',
  time: '19:00',
  guests: '4',
  occasion: 'anniversary',
  specialRequests: 'Window seat please'
});

// Get reservation
const booking = await reservationService.getReservation('RES-123456');

// Cancel reservation
await reservationService.cancelReservation('RES-123456');
```

### Contact Service

```jsx
import { contactService } from './services';

await contactService.submitContactForm({
  name: 'Jane Doe',
  email: 'jane@example.com',
  subject: 'Question',
  message: 'When are you open?'
});
```

## Routing

All routes are configured in `src/App.js`:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';

<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/menu" element={<Menu />} />
  <Route path="/specials" element={<Specials />} />
  <Route path="/gallery" element={<Gallery />} />
  <Route path="/reservation" element={<Reservation />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/reviews" element={<Reviews />} />
</Routes>
```

## Styling with Tailwind

### Custom Classes

The project includes custom Tailwind classes in `src/index.css`:

```css
/* Components */
.btn-primary - Primary button style
.btn-secondary - Secondary button style
.section-padding - Standard section padding
.container-custom - Max-width container
.card-shadow - Card shadow effect
.overlay-dark - Dark overlay
.text-gradient - Gold gradient text

/* Utilities */
.animation-delay-200 - 200ms delay
.animation-delay-400 - 400ms delay
.animation-delay-600 - 600ms delay
```

### Custom Colors

```jsx
// Gold shades
bg-gold-50 to bg-gold-900

// Luxury colors
bg-luxury-dark - #1a1a1a
bg-luxury-green - #2d5016
bg-luxury-cream - #f5f5dc
```

### Custom Animations

```jsx
animate-fade-in - Fade in animation
animate-slide-up - Slide up animation
animate-zoom-in - Zoom in animation
```

## Form Validation Example

```jsx
const [formData, setFormData] = useState({});
const [errors, setErrors] = useState({});

const validateForm = () => {
  const newErrors = {};
  
  if (!formData.name) {
    newErrors.name = 'Name is required';
  }
  
  if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Valid email is required';
  }
  
  return newErrors;
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newErrors = validateForm();
  
  if (Object.keys(newErrors).length === 0) {
    // Submit form
  } else {
    setErrors(newErrors);
  }
};
```

## Framer Motion Examples

### Fade In on Scroll

```jsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

### Hover Animation

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click Me
</motion.button>
```

### Stagger Children

```jsx
<motion.div
  initial="hidden"
  animate="visible"
  variants={{
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item) => (
    <motion.div
      key={item.id}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
    >
      {item.name}
    </motion.div>
  ))}
</motion.div>
```

## Environment Variables

Create `.env` file:

```
REACT_APP_API_URL=http://localhost:3001/api
REACT_APP_GOOGLE_MAPS_API_KEY=your_key_here
```

Access in code:

```jsx
const apiUrl = process.env.REACT_APP_API_URL;
```

## Production Build

```bash
# Build
npm run build

# Build folder structure
build/
├── static/
│   ├── css/
│   ├── js/
│   └── media/
├── index.html
└── asset-manifest.json
```

Deploy the `build` folder to:
- Netlify
- Vercel
- AWS S3 + CloudFront
- Azure Static Web Apps
- GitHub Pages

## Troubleshooting

### Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Clear cache
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### Build errors
```bash
npm run build --verbose
```

## Performance Tips

1. **Lazy Loading**: Use React.lazy for code splitting
2. **Image Optimization**: Compress images, use WebP
3. **Caching**: Implement service workers
4. **Bundle Analysis**: Use webpack-bundle-analyzer
5. **CDN**: Host static assets on CDN

## Best Practices

1. Keep components small and focused
2. Use semantic HTML
3. Implement proper error boundaries
4. Add loading states
5. Handle edge cases
6. Write meaningful commit messages
7. Use TypeScript for large projects
8. Add unit tests
9. Implement analytics
10. Monitor performance

---

For more help, check the README.md and PROJECT_SUMMARY.md files.
