

# AMUMA Collection – Mobile-First Investment Platform

## Overview
A single-page, mobile-first website for AMUMA Collection's barefoot boutique resort investment platform. Premium editorial design with glassmorphism navigation, scroll-reveal animations, and animated counters.

## Design System Setup
- Import Playfair Display and Montserrat from Google Fonts
- Define custom colors: Deep Teal (#0F4C5C), Warm Sand (#D4A373), Soft Parchment (#FDFBF7), Charcoal (#1A1A1A)
- "Pebble" card style: white bg, rounded-2xl, soft shadow, no harsh borders

## Sections to Build

### 1. Sticky Navigation
- Glassmorphism header (semi-transparent white + backdrop-blur)
- "AMUMA" logo left in Playfair Display, Deep Teal
- Hamburger menu right → slides in panel from right with section links
- Smooth scroll to anchored sections

### 2. Hero (Full Viewport)
- Placeholder background image with dark overlay
- Large serif heading: "AMUMA Collection. Barefoot Boutique Resorts in Hidden Gems."
- Subheading: "Dream high, fly low."
- CTA button "Become a Founding Pebble Holder" → scrolls to Join section
- Rounded-full, Deep Teal bg, white text

### 3. The Vision
- Section heading + descriptive subheading
- 2×2 grid of stat cards with Warm Sand top accent
- Animated count-up numbers (9.6, 9, 2000, 20) triggered on scroll into view using Intersection Observer

### 4. The Proof – Baia
- Section heading
- Swipeable image carousel using Embla (already in dependencies) with 4 placeholder images
- Booking.com scores displayed in a centered row (Location 9.3, Staff 9.6, Facilities 9.5)
- Two guest review quote cards
- Key metrics in stacked Pebble cards (rooms, pricing, seasons)

## Animations
- Scroll-triggered fade-in reveals for all cards/sections using Intersection Observer
- Count-up animation for Vision stat numbers

## File Structure
- `src/pages/Index.tsx` – main page composing all sections
- `src/components/Navbar.tsx` – sticky glassmorphism nav with mobile menu
- `src/components/HeroSection.tsx`
- `src/components/VisionSection.tsx` – with count-up hook
- `src/components/ProofSection.tsx` – with Embla carousel
- `src/hooks/useScrollReveal.ts` – Intersection Observer for fade-ins
- `src/hooks/useCountUp.ts` – animated number counter

