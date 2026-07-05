# MoodScape 🎵

An immersive, mood-based music discovery platform with a premium, futuristic design. MoodScape transforms how you experience music by creating a personalized, visually stunning interface that adapts to your emotional state.

## 🎨 Design Philosophy

**Aesthetic**: Apple × Spotify Wrapped × Nothing OS × Arc Browser × Interstellar

- **Dark futuristic aesthetic** with aurora gradients
- **Glassmorphism** UI elements with subtle blur and transparency
- **Animated particles** floating throughout the interface
- **Smooth transitions** and magical interactions with Framer Motion
- **Premium spacing** and typography for an elevated experience

## 🌙 Features

### Landing Screen
- Full-screen animated hero with aurora gradient background
- Large, gradient typography with drop shadows
- Animated glowing button with particle effects
- Floating decorative elements

### Mood Selection Universe
- **10 interactive glowing planets** representing different moods:
  - 😊 Happy
  - 🌧 Melancholy
  - 🌙 Calm
  - 🔥 Energetic
  - ⚡ Focus
  - 🌌 Dreamy
  - 🌧 Nostalgic
  - ❤️ Romantic
  - 🚀 Adventurous
  - 🎧 Late Night

- Each planet has unique colors, quotes, and descriptions
- Hover effects with particle bursts
- Smooth scale animations and glow effects

### Experience View
Once a mood is selected, the entire interface transforms:
- **Dynamic background gradients** that match the selected mood
- **Music Discovery section** with categories:
  - Trending, Hidden Gems, Indie, Hip-Hop, Pop, Rock, Lo-fi, EDM, Classical, Jazz, R&B
  - International: Punjabi, Hindi, Tamil, Telugu, Malayalam, Bengali, Marathi, Nepali, North Eastern
  - Asian: Korean, Japanese, Anime
  - Instrumental and International tracks

- **Glass card playlists** with gradient backgrounds and hover effects

### Floating Music Player
- Located at the bottom center
- Shows "Now Playing" with rotating album art (emoji-based)
- Animated equalizer bars that pulse with the music
- Play/pause, skip, and volume controls
- Progress bar with animated fill

### Mood Journal
- Fixed floating card on the right side
- "How was your day?" prompt
- Generates thoughtful reflections based on mood
- Suggests listening vibes
- Mood-appropriate colors and gradients

## 🛠️ Tech Stack

- **Framework**: Next.js 16 
- **UI Library**: React 19
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide Icons
- **Language**: TypeScript

## 📦 Project Structure

```
/components
  ├── landing.tsx           # Hero landing screen
  ├── mood-selection.tsx    # Mood universe with planets
  ├── planet.tsx            # Individual mood planet
  ├── experience-view.tsx   # Main experience after mood selection
  ├── music-discovery.tsx   # Music categories and playlists
  ├── playlist-card.tsx     # Individual playlist card
  ├── music-player.tsx      # Floating music player
  ├── mood-journal.tsx      # Floating journal widget
  └── particles.tsx         # Animated particle system

/lib
  └── mood-data.ts          # Mood definitions and music categories

/app
  ├── layout.tsx            # Root layout with metadata
  ├── page.tsx              # Main page with state management
  └── globals.css           # Global styles and animations
```

## 🎯 Key Interactions

1. **Landing** → Click "Enter MoodScape"
2. **Mood Selection** → Choose a mood planet
3. **Experience** → Explore curated music by category
4. **Music Player** → Control playback (UI only)
5. **Mood Journal** → Reflect and save thoughts
6. **Back** → Return to mood selection

## 🎨 Color System

Each mood has a carefully selected color palette:
- **Primary**: Main gradient color
- **Secondary**: Complementary gradient color
- **Accent**: Highlight and glow color

Example (Happy):
- Primary: `#FFD700` (Golden)
- Secondary: `#FFA500` (Orange)
- Accent: `#FF69B4` (Hot Pink)

## ✨ Animation Features

- **Aurora**: Animated background gradients
- **Float**: Particles and decorative elements drift continuously
- **Glow**: Pulsing glow effects on interactive elements
- **Pulse Glow**: Musical player equalizer animation
- **Rotate Slow**: Album artwork rotation

## 📱 Responsive Design

- Mobile-first approach
- Responsive grid layouts
- Optimized touch interactions
- Works beautifully on all screen sizes

## 🚀 Getting Started

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Open browser
open http://localhost:3000
```

## 🎵 Future Enhancements

- Integration with Spotify API for real playlists
- User accounts and mood history tracking
- Advanced AI-powered mood detection
- Real-time audio visualization
- Social sharing features
- Mood-based recommendations using machine learning

