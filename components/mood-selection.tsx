'use client'

import { motion } from 'framer-motion'
import { moods, MoodTheme } from '@/lib/mood-data'
import { Planet } from './planet'
import { Particles } from './particles'

interface MoodSelectionProps {
  onSelect: (mood: MoodTheme) => void
}

export function MoodSelection({ onSelect }: MoodSelectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="aurora-bg min-h-screen flex flex-col items-center justify-center relative overflow-hidden p-4">
      <Particles />

      <motion.div
        className="relative z-10 text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-4">
          Your Mood Universe
        </h1>
        <p className="text-lg text-gray-300">Choose a mood to explore curated music experiences</p>
      </motion.div>

      {/* Planets Grid */}
      <motion.div
        className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {moods.map((mood) => (
          <motion.div key={mood.id} variants={itemVariants} className="flex justify-center">
            <Planet
              mood={mood}
              onClick={() => onSelect(mood)}
              isSelected={false}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-10 blur-3xl pointer-events-none"
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-10 blur-3xl pointer-events-none"
        animate={{
          y: [0, 40, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
