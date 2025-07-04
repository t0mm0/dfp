# Drummers for Palestine

## Overview

This is a full-stack web application that teaches samba rhythms and protest beats in solidarity with Palestine. The application features an interactive drum machine/beatbox player that allows users to learn traditional samba tunes and protest rhythms. Built with React, Express, TypeScript, and designed with a focus on musical activism and social justice.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom Keffiyeh-inspired design system
- **UI Components**: Radix UI primitives with custom theming
- **State Management**: React hooks with TanStack Query for server state
- **Routing**: Wouter for lightweight client-side routing
- **Audio**: Web Audio API for rhythm playback and visualization

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: Connect-pg-simple for PostgreSQL-backed sessions
- **Development**: Vite with HMR for development server

### Build System
- **Bundler**: Vite for frontend, esbuild for backend
- **Development**: Hot module replacement and runtime error overlays
- **Production**: Static file serving with Express

## Key Components

### Audio Engine
- Web Audio API-based rhythm player
- Real-time pattern visualization
- Individual instrument volume controls
- Tempo adjustment and pattern looping
- Synthetic drum sound generation for demo purposes

### Pattern System
- Complex rhythm notation using string patterns
- Support for multiple instruments (surdo, repinique, snare, tamborim, agogô, shaker)
- Mnemonic support for learning aid
- Pattern referencing and volume adjustments

### Data Models
- **Tunes**: Traditional samba rhythms with multiple patterns
- **Protest Beats**: Simplified rhythms for demonstrations
- **Users**: Basic user management (prepared for future auth)

### UI Components
- **BeatboxPlayer**: Main interactive rhythm player
- **PatternVisualizer**: Real-time step visualization
- **InstrumentToggle**: Individual instrument controls
- **Navigation**: Responsive navigation with protest theming

## Data Flow

1. **Frontend Request**: React components fetch tune/beat data via TanStack Query
2. **API Layer**: Express routes handle CRUD operations for tunes and protest beats
3. **Storage Layer**: In-memory storage with database schema ready for PostgreSQL
4. **Audio Processing**: Web Audio API processes patterns and generates audio output
5. **Real-time Updates**: Pattern visualization updates synchronized with audio playback

## External Dependencies

### Core Technologies
- **@neondatabase/serverless**: PostgreSQL database connectivity
- **drizzle-orm**: Type-safe database ORM with PostgreSQL dialect
- **@tanstack/react-query**: Server state management and caching
- **@radix-ui/***: Accessible UI component primitives

### Audio & Visualization
- Web Audio API (native browser)
- Custom audio synthesis for drum sounds
- Pattern parsing and visualization system

### Development Tools
- **tsx**: TypeScript execution for development
- **@replit/vite-plugin-***: Replit-specific development enhancements
- **tailwindcss**: Utility-first CSS framework

## Deployment Strategy

### Development
- Vite dev server with HMR for frontend
- tsx with file watching for backend
- Database migrations via Drizzle Kit
- Environment-based configuration

### Production Build
- Frontend: Vite build to static assets
- Backend: esbuild bundle to single executable
- Static file serving through Express
- PostgreSQL database deployment

### Database Management
- Drizzle schema with type generation
- Migration system for schema changes
- Connection pooling via Neon serverless

### Environment Configuration
- `DATABASE_URL` for PostgreSQL connection
- `NODE_ENV` for environment-specific behavior
- Replit-specific development features

## Changelog

- July 03, 2025. Initial setup
- July 03, 2025. Updated theme to black and white design focused on Palestinian solidarity
- July 03, 2025. Added Drummers For Palestine logo throughout the application
- July 03, 2025. Added missing tunes: Stolen and Wolf with authentic pattern data
- July 03, 2025. Updated protest beats with Palestinian solidarity themes (Gaza, End The Occupation, We Are The People, etc.)
- July 03, 2025. Removed all random stock images and "rhythms of resistance" references
- July 03, 2025. Enhanced About page with content from uploaded HTML file including code of conduct
- July 03, 2025. Maintained existing audio engine functionality as requested by user
- July 03, 2025. Updated logo to new transparent version (logo-removebg-preview_1751573624346.png)
- July 03, 2025. Fixed tune accuracy by reading uploaded tune files and adding authentic breaks for Stolen and Wolf tunes
- July 03, 2025. Updated pattern visualizer to show beats in rows of 16 with 1-16 numbering format
- July 03, 2025. Fixed TypeScript interface to allow proper pattern indexing with string keys
- July 03, 2025. Updated audio engine to use real audio files with proper stroke-to-audio mapping
- July 03, 2025. Implemented agogo character mapping (a = low bell ag_61.mp3, o = high bell ag_6f.mp3)  
- July 03, 2025. Updated protest beats to match uploaded patterns with accurate levels and descriptions
- July 03, 2025. Added support for specific audio files: ls_73.mp3, hs_74.mp3, sn_2e.mp3, sn_58.mp3, re_58.mp3, ag_61.mp3, ag_6f.mp3
- July 03, 2025. Fixed main page logo to use transparent version consistently throughout site
- July 03, 2025. Reorganized navigation - made Protest Beats the second tab, moved Tunes to third
- July 03, 2025. Completely redesigned Protest Beats page to use individual players like Tunes page, arranged in rows not columns
- July 03, 2025. Created new "Create Your Own" experiment page for users to design custom beats with intuitive 16-step grid interface
- July 03, 2025. Added experiment page to navigation and routing system
- July 03, 2025. Updated protest beats to use same 16-step grid visualization as other pages with numbered beats 1-16
- July 03, 2025. Fixed BeatboxPlayer component to automatically select first available pattern and work with experiment page
- July 03, 2025. Resolved TypeScript issues with instrument state management in BeatboxPlayer component
- July 03, 2025. Updated all tunes with authentic patterns from uploaded files (Wolf, Afoxe, Angela Davis, Bhangra, Core Breaks, Custard, Drum-Bass, Funk, Hedgehog, Jericho, Karla, More Breaks, Ragga, Samba Reggae, Sambasso, Stolen)
- July 03, 2025. Implemented proper stroke-to-audio file mapping system (ls_73.mp3, hs_74.mp3, sn_2e.mp3, sn_58.mp3, re_58.mp3, ag_61.mp3, ag_6f.mp3)
- July 03, 2025. Updated audio engine to use correct file paths from public/audio directory
- July 03, 2025. Enhanced agogo character mapping: 'a' = low bell (ag_61.mp3), 'o' = high bell (ag_6f.mp3)
- July 03, 2025. Updated protest beats with authentic Level 1-5 patterns from uploaded documentation
- July 03, 2025. All tunes now use complete authentic patterns with proper mnemonics and break patterns
- July 03, 2025. Fixed snare character mappings: 'X' uses sn_58.mp3 (accent), '.' uses sn_2e.mp3 (ghost note)
- July 03, 2025. Increased tempo range minimum to 40 BPM to accommodate slower practice speeds
- July 03, 2025. Added MP3 download functionality to experiment page using lamejs encoder - users can now download custom beats as MP3 files
- July 03, 2025. Enhanced pattern playback to properly handle snare ghost notes ('.' character) alongside accent hits ('X' character)
- July 04, 2025. Fixed audio file serving issue - audio files now properly served with correct MIME type (audio/mpeg) instead of HTML
- July 04, 2025. Added comprehensive audio file mapping - system now uses all 59 available authentic drum samples
- July 04, 2025. Fixed logo path for deployment - moved logo to public directory and updated references
- July 04, 2025. Added audio preloading system - audio files now load automatically when tune is selected
- July 04, 2025. Enhanced play button with loading indicator - shows spinner and "Loading Audio..." when files are still loading
- July 04, 2025. Converted pattern selector from buttons to dropdown for better visibility and usability
- July 04, 2025. Set default agogo volume to 25% (very low) to prevent overwhelming other instruments
- July 04, 2025. Fixed experiment page layout - repositioned download and reset buttons for better accessibility
- July 04, 2025. Fixed audio download functionality - now uses same authentic drum samples as play button instead of synthetic sounds, ensuring downloaded file matches what users hear
- July 04, 2025. Fixed logo display issue by importing logo as module through @assets alias for proper build inclusion

## User Preferences

Preferred communication style: Simple, everyday language.
Design preference: Black and white theme, no random images, only relevant Palestinian solidarity imagery.
Audio preference: Keep existing sound players intact as they are working well.