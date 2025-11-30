# Gauvedaglobal Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium organic brands (Organic Valley, Seventh Generation) and modern agricultural websites that emphasize natural quality, sustainability, and trust. The design balances earthy authenticity with contemporary sophistication.

## Core Design Principles
1. **Natural Premium**: Organic shapes, earth-inspired textures, and breathing room convey quality without sterility
2. **Trust Through Transparency**: Clear information hierarchy, honest imagery, authentic testimonials
3. **Gentle Movement**: Animations enhance storytelling without overwhelming (scroll-triggered reveals, subtle parallax)

## Typography System
- **Headings**: Modern serif or refined sans-serif (Playfair Display, Cormorant, or DM Serif) - conveys heritage and quality
- **Body**: Clean sans-serif (Inter, Plus Jakarta Sans) - ensures readability
- **Hierarchy**: H1 (56-72px desktop, 36-48px mobile), H2 (40-48px/28-36px), H3 (28-32px/24px), Body (18-20px/16-18px)
- **Line height**: Generous spacing (1.6-1.8 for body text)

## Spacing System
**Tailwind units**: Primary spacing scale using 4, 6, 8, 12, 16, 20, 24 for consistent vertical rhythm
- Section padding: py-20 (desktop), py-12 (mobile)
- Container max-width: max-w-7xl for standard sections
- Card spacing: p-8 (desktop), p-6 (mobile)

## Layout Structure

### Hero Section (Full Viewport)
- **Layout**: Asymmetric split with 60/40 ratio - left side for headline/CTA, right for hero image
- **Image**: Large, high-quality photograph of lush green farmland or hands holding rich soil/manure - authentic, close-up, warm natural lighting
- **Overlay**: Subtle gradient overlay (deep green to transparent) for text legibility
- **Elements**: Bold headline (trust badge: "100% Organic Certified"), subheadline explaining benefits, two CTA buttons (primary: "Shop Now" with blurred background, secondary: outlined), floating stats cards ("10,000+ Farmers Trust Us")

### Product Benefits (Multi-Column Grid)
- **Layout**: 3-column grid (desktop), 2-column (tablet), single column (mobile)
- **Cards**: Elevated with subtle shadow, rounded corners (rounded-xl), hover lift effect
- **Content**: Icon (nature-themed), benefit title, 2-3 sentence description, subtle border using accent color
- Showcase 6 benefits: Soil Enrichment, Chemical-Free, Crop Yield, Sustainability, Cost-Effective, Easy Application

### How It Works / Process Section
- **Layout**: Horizontal timeline/step-by-step flow
- **Visual**: 4 circular step indicators connected by dotted line
- **Content**: Each step has number badge, title, brief description, supporting icon
- Background: Subtle cream section to differentiate from white

### Social Proof / Testimonials
- **Layout**: 2-column testimonial cards with farmer photos
- **Cards**: Quote format with farmer name, location, farm size
- **Supporting**: Trust badges row (certifications, awards) below testimonials

### About/Story Section
- **Layout**: Side-by-side content (text left, image collage right)
- **Images**: 2-3 images in creative layout showing production process, farmland, team
- **Content**: Brand story emphasizing tradition, quality, environmental commitment

### Product Showcase (if applicable)
- **Layout**: Product cards in masonry grid
- **Cards**: Product image, name, weight/size options, pricing, "Add to Cart" button
- **Filters**: Top bar with category filters (Powdered, Pelletized, Bulk)

### Contact/CTA Section
- **Layout**: Split design - Form (60%) + Contact Info (40%)
- **Form**: Name, email, phone, message fields with organic rounded inputs
- **Side Panel**: Office hours, phone, email, location map embed, social media links
- **Background**: Deep green with cream text for contrast

### Footer
- **Layout**: 4-column grid - Company, Products, Resources, Newsletter
- **Newsletter**: Email input with inline submit button
- **Bottom**: Copyright, certifications logos, payment icons

## Component Library

### Buttons
- Primary: Solid golden background, dark text, generous padding (px-8 py-4), rounded-lg
- Secondary: Outlined with deep green border, transparent background with blur
- Hover states: Slight scale (1.02), shadow increase - NO custom hovers on image overlays

### Cards
- Elevated style with shadow-md
- Border: 1px solid cream color for definition
- Rounded corners: rounded-xl
- Hover: Subtle lift (translateY -4px) with shadow-lg

### Form Inputs
- Rounded corners (rounded-lg)
- Border: 2px solid cream, focus state: deep green
- Generous padding (px-4 py-3)
- Placeholder text in muted color

## Images Strategy

**Hero Section**: YES - Large hero image required
- Type: Wide landscape photo of vibrant green farmland, rich soil texture, or farmer working land
- Treatment: Slight blur on edges, warm color grading
- Placement: Right 40% of viewport on desktop, background on mobile

**Additional Images**:
- Product benefits: Icon illustrations (SVG) for each benefit
- About section: 2-3 authentic photos showing production, packaging, farmland
- Testimonials: Circular farmer headshots
- Process section: Simple illustrative icons
- All images: Optimized WebP format, lazy-loaded below fold

## Animation Guidelines
- **Scroll Reveals**: Fade-in + slide-up (20px) for section entries
- **Stagger**: Card grids animate sequentially (0.1s delay between items)
- **Hero**: Subtle parallax on background image (0.5 speed)
- **Hover**: Minimal - only scale/shadow changes on cards
- **Performance**: Use `will-change` sparingly, intersection observers for triggering, transform/opacity only

## Accessibility
- Color contrast: All text meets WCAG AA (4.5:1 minimum)
- Focus states: Visible 2px outline on all interactive elements
- Alt text: Descriptive for all images
- Form labels: Always visible, not placeholder-only