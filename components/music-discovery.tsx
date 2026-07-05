'use client'

import { motion } from 'framer-motion'
import { MoodTheme, musicCategories } from '@/lib/mood-data'
import { PlaylistCard } from './playlist-card'

interface MusicDiscoveryProps {
  mood: MoodTheme
}

export function MusicDiscovery({ mood }: MusicDiscoveryProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  // Convert hex to rgb for gradient
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` : '100, 100, 100'
  }

  const moodRgb = hexToRgb(mood.primary)

  return (
    <motion.div
      className="space-y-12"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Section header */}
      <motion.div variants={itemVariants} className="mb-8">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
          Discover Music
        </h2>
        <p className="text-gray-400">Explore playlists tailored to your {mood.name.toLowerCase()} mood</p>
      </motion.div>

      {/* Categories Grid */}
      <motion.div variants={containerVariants} className="space-y-8">
        {musicCategories.map((category, idx) => (
          <motion.div key={category} variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold text-white mb-4 pb-2 border-b border-white/10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.05 }}
              viewport={{ once: true }}
            >
              {category}
            </motion.h3>

            {/* Playlists for this category */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[1, 2, 3].map((playlistNum) => (
                <PlaylistCard
                  key={`${category}-${playlistNum}`}
                  title={`${category} Mix ${playlistNum}`}
                  color={moodRgb}
                  index={playlistNum - 1}
                />
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}
