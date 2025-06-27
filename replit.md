# Portfolio Application

## Overview

This is a full-stack web application built as a personal portfolio for John Lester Ferrer Cuarto, an IT student at Asian College Dumaguete City. The application serves as a showcase of his educational journey, skills, and contact information in a modern, responsive design.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot module replacement and runtime error handling

## Key Components

### Client-Side Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Introduction with profile image and call-to-action buttons
- **About Section**: Personal information and statistics
- **Education Section**: Timeline-based education history
- **Skills Section**: Progress-based skill visualization
- **Contact Section**: Contact form with social media links
- **UI Library**: Comprehensive set of reusable UI components (buttons, cards, forms, etc.)

### Server-Side Components
- **Express Server**: Main application server with middleware for logging and error handling
- **Storage Layer**: Abstracted storage interface with in-memory implementation
- **Database Schema**: User management schema with Drizzle ORM
- **Development Tools**: Vite integration for development mode

### Shared Components
- **Schema Definitions**: Database schema and validation using Drizzle and Zod
- **Type Safety**: Shared TypeScript types between client and server

## Data Flow

1. **Client Requests**: React components make API requests through TanStack Query
2. **Server Processing**: Express routes handle API requests and interact with storage layer
3. **Database Operations**: Drizzle ORM manages database interactions with PostgreSQL
4. **Response Handling**: Server responses are processed by client-side query handlers
5. **UI Updates**: React components re-render based on updated data state

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, shadcn/ui components
- **Styling**: Tailwind CSS, class-variance-authority, clsx
- **State Management**: TanStack Query for API state
- **Icons**: Lucide React, React Icons
- **Utilities**: date-fns for date handling, embla-carousel for carousels

### Backend Dependencies
- **Server Framework**: Express.js with TypeScript support
- **Database**: PostgreSQL with Neon serverless driver
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Session Management**: express-session with connect-pg-simple
- **Development**: tsx for TypeScript execution, esbuild for production builds

### Development Dependencies
- **Build Tools**: Vite, esbuild, TypeScript compiler
- **Replit Integration**: Vite plugins for Replit development environment
- **Database Tools**: Drizzle Kit for schema management and migrations

## Deployment Strategy

### Development Environment
- **Runtime**: Replit with Node.js 20 runtime
- **Database**: PostgreSQL 16 module
- **Hot Reload**: Vite development server with HMR
- **Port Configuration**: Application runs on port 5000

### Production Build
- **Client Build**: Vite builds React application to static assets
- **Server Build**: esbuild bundles Express server with external dependencies
- **Asset Serving**: Express serves static files in production
- **Deployment Target**: Replit autoscale deployment

### Database Management
- **Schema Migrations**: Drizzle Kit manages database schema changes
- **Environment Variables**: DATABASE_URL required for database connection
- **Connection Pooling**: Neon serverless driver for PostgreSQL connections

## Changelog

```
Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Added authentication system with login functionality
- June 27, 2025. Updated contact information with phone and email
- June 27, 2025. Added personal profile photo
- June 27, 2025. Implemented contact form with database storage
- June 27, 2025. Created dashboard for authenticated users
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```