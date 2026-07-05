'use client'

import { motion } from 'framer-motion'
import { MoodTheme } from '@/lib/mood-data'

interface PlanetProps {
  mood: MoodTheme
  onClick: () => void
  isSelected: boolean
}

export function Planet({ mood, onClick, isSelected }: PlanetProps) {
  return (
    <motion.button
      onClick={onClick}
      className="relative group focus:outline-none"
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      animate={isSelected ? { scale: 1.2 } : { scale: 1 }}
    >
      {/* Glowing halo */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: mood.primary,
          width: '140px',
          height: '140px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={isSelected ? { opacity: 0.8 } : { opacity: 0 }}
      />

      {/* Planet body */}
      <motion.div
        className="relative w-20 h-20 rounded-full flex items-center justify-center cursor-pointer"
        style={{
          background: `linear-gradient(135deg, ${mood.primary} 0%, ${mood.secondary} 100%)`,
          boxShadow: `0 0 30px ${mood.primary}40, inset -2px -2px 10px rgba(0,0,0,0.3)`,
        }}
        animate={isSelected ? { boxShadow: `0 0 60px ${mood.primary}, inset -2px -2px 10px rgba(0,0,0,0.3)` } : {}}
      >
        {/* Inner glow */}
        <motion.div
          className="absolute inset-2 rounded-full opacity-50 group-hover:opacity-100"
          style={{
            background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent)`,
          }}
          animate={isSelected ? { opacity: 0.8 } : { opacity: 0.3 }}
        />

        {/* Emoji/Icon */}
        <span className="text-4xl drop-shadow-lg relative z-10">{mood.emoji}</span>
      </motion.div>

      {/* Label */}
      <motion.div
        className="absolute top-full mt-3 text-center w-24 opacity-0 group-hover:opacity-100 transition-opacity"
        animate={isSelected ? { opacity: 1 } : { opacity: 0 }}
      >
        <p className="text-sm font-semibold text-white drop-shadow-lg">{mood.name}</p>
        <p className="text-xs text-gray-300">{mood.description}</p>
      </motion.div>

      {/* Particle burst on hover */}
      {isSelected && (
        <motion.div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: mood.primary,
                left: '50%',
                top: '50%',
              }}
              animate={{
                x: Math.cos((i / 6) * Math.PI * 2) * 60,
                y: Math.sin((i / 6) * Math.PI * 2) * 60,
                opacity: [1, 0],
              }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          ))}
        </motion.div>
      )}
    </motion.button>
  )
}
