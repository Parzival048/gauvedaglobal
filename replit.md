# Gauvedaglobal - Premium Organic Cow Dung Manure

## Overview

Gauvedaglobal is a marketing website for an organic cow dung manure company. The application showcases premium organic fertilizer products with a focus on natural quality, sustainability, and building trust with farmers. The site features a single-page design with sections for hero/landing, product benefits, manufacturing process, customer testimonials, company story, and contact form.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React with TypeScript using Vite as the build tool and development server.

**Routing**: Implemented using Wouter for client-side routing. Currently features a single home route (`/`) with a fallback 404 page.

**UI Component Library**: shadcn/ui (New York style variant) built on top of Radix UI primitives. Components follow a design system with:
- Tailwind CSS for styling with custom color variables (HSL-based theme)
- CSS variables for consistent spacing, shadows, and design tokens
- Custom font stack using Playfair Display (serif) for headings and Inter (sans-serif) for body text

**Design System**: 
- Earth-toned color palette (primary green, accent brown, neutral backgrounds)
- Typography scale with generous line-heights (1.6-1.8)
- Spacing system based on Tailwind units (4, 6, 8, 12, 16, 20, 24)
- Custom border radius values (9px lg, 6px md, 3px sm)
- Shadow system (shadow-2xs, shadow-xs defined in CSS variables)

**Animations**: Framer Motion for scroll-triggered reveals, fade-ins, and page transitions. Custom animation components (`FadeIn`, `ScrollReveal`, `StaggerContainer`) provide reusable animation patterns.

**State Management**: TanStack Query (React Query) for server state management with custom query client configuration. Query client is configured with:
- Custom fetch wrapper (`apiRequest`) for API calls
- Credential inclusion for session management
- Infinite stale time (no automatic refetching)
- No refetch on window focus

**Form Handling**: React Hook Form with Zod validation through `@hookform/resolvers`.

### Backend Architecture

**Server Framework**: Express.js with TypeScript running on Node.js.

**API Structure**: RESTful API with routes defined in `server/routes.ts`:
- `POST /api/contact` - Submit contact inquiry form
- `GET /api/contact` - Retrieve all contact inquiries

**Data Layer**: In-memory storage implementation (`MemStorage` class) for development. The storage interface (`IStorage`) defines methods for:
- User management (getUser, getUserByUsername, createUser)
- Contact inquiry management (createContactInquiry, getContactInquiries)

**Schema Validation**: Zod schemas with Drizzle-Zod integration for type-safe data validation. Schemas defined in `shared/schema.ts` for:
- User authentication (username, password)
- Contact inquiries (name, email, phone, message, createdAt)

**Build Process**: Custom build script using esbuild for server bundling and Vite for client bundling. Server dependencies are selectively bundled (allowlist approach) to reduce cold start times.

**Development Server**: Vite middleware mode in development with HMR support. Production serves static files from `dist/public` directory.

### Database Design

**ORM**: Drizzle ORM configured for PostgreSQL with Neon serverless driver (`@neondatabase/serverless`).

**Schema Structure**:
- `users` table: id (varchar 36), username (text unique), password (text)
- `contact_inquiries` table: id (varchar 36), name, email, phone, message, createdAt (timestamp)

**Migration Strategy**: Schema changes managed through Drizzle Kit with migrations stored in `/migrations` directory. Push-based migrations via `npm run db:push` script.

**Current Implementation Note**: The application currently uses in-memory storage (`MemStorage`) for development. Database connection is configured but not actively used. The `IStorage` interface allows seamless switching to database-backed storage.

## External Dependencies

### UI & Styling
- **Radix UI**: Complete set of unstyled, accessible UI primitives (accordion, dialog, dropdown, popover, etc.)
- **Tailwind CSS**: Utility-first CSS framework with PostCSS and Autoprefixer
- **class-variance-authority**: Component variant styling helper
- **Framer Motion**: Animation library for React
- **Lucide React**: Icon library
- **React Icons**: Additional icon sets (specifically using Simple Icons for social media)

### Data & Validation
- **Drizzle ORM**: TypeScript ORM for database interactions
- **Drizzle Zod**: Schema validation integration
- **Zod**: TypeScript-first schema validation
- **TanStack Query**: Asynchronous state management

### Backend Services
- **Neon Database**: Serverless PostgreSQL database (configured but not currently active)
- **Express Session**: Session middleware with connect-pg-simple for PostgreSQL session store

### Development Tools
- **Vite**: Build tool with React plugin and Replit-specific plugins (runtime error overlay, cartographer, dev banner)
- **TypeScript**: Type-safe development
- **ESBuild**: Fast JavaScript bundler for production builds
- **Wouter**: Lightweight routing library

### Font Services
- **Google Fonts**: Playfair Display and Inter font families loaded via CDN