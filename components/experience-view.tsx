'use client'

import { motion } from 'framer-motion'
import { MoodTheme } from '@/lib/mood-data'
import { MusicDiscovery } from './music-discovery'
import { MusicPlayer } from './music-player'
import { MoodJournal } from './mood-journal'
import { Particles } from './particles'
import { ArrowLeft } from 'lucide-react'

interface ExperienceViewProps {
  mood: MoodTheme
  onBack: () => void
}

export function ExperienceView({ mood, onBack }: ExperienceViewProps) {
  // Convert hex to rgb for gradients
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result
      ? `rgba(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}`
      : 'rgba(100, 100, 100'
  }

  const primaryRgb = hexToRgb(mood.primary)

  return (
    <motion.div
      key={mood.id}
      className="min-h-screen relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        background: `linear-gradient(135deg, #0f0c29 0%, ${mood.primary}20 50%, #1a0033 100%)`,
      }}
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 20% 50%, ${primaryRgb}, 0.1), radial-gradient(circle at 80% 80%, ${hexToRgb(mood.secondary)}, 0.1))`,
          }}
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <Particles />
      </div>

      {/* Header */}
      <motion.div
        className="relative z-20 sticky top-0 backdrop-blur-md bg-black/20 border-b border-white/10 p-4 md:p-6"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors group"
            whileHover={{ gap: '12px' }}
          >
            <ArrowLeft size={20} />
            <span className="text-sm font-medium">Back</span>
          </motion.button>

          <div className="text-center flex-1">
            <motion.div
              className="flex items-center justify-center gap-3"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-4xl">{mood.emoji}</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{mood.name}</h1>
                <p className="text-gray-400 text-sm">{mood.quote}</p>
              </div>
            </motion.div>
          </div>

          <div className="w-12" />
        </div>
      </motion.div>

      {/* Main content */}
      <motion.main
        className="relative z-10 max-w-6xl mx-auto px-4 md:px-6 py-12 pb-40"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <MusicDiscovery mood={mood} />
      </motion.main>

      {/* Floating UI Elements */}
      <MusicPlayer mood={mood} />
      <MoodJournal mood={mood} />

      {/* Mood color indicator in corners */}
      <motion.div
        className="fixed bottom-0 left-0 w-32 h-32 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: mood.primary }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fixed top-0 right-0 w-40 h-40 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: mood.secondary }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </motion.div>
  )
}
