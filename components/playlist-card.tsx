'use client'

import { motion } from 'framer-motion'

interface PlaylistCardProps {
  title: string
  color: string
  index: number
}

export function PlaylistCard({ title, color, index }: PlaylistCardProps) {
  return (
    <motion.div
      className="relative group"
      whileHover={{ y: -8, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
    >
      {/* Glass background */}
      <div
        className="relative rounded-2xl p-6 backdrop-blur-md border border-white/10 overflow-hidden cursor-pointer"
        style={{
          background: `linear-gradient(135deg, rgba(${color}, 0.1) 0%, rgba(${color}, 0.05) 100%)`,
          borderColor: `rgba(${color}, 0.3)`,
        }}
      >
        {/* Gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 100% 100%, rgba(${color}, 0.3), transparent)`,
          }}
        />

        {/* Abstract placeholder with gradient */}
        <motion.div
          className="w-full h-32 rounded-lg mb-4 overflow-hidden relative"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <div
            className="w-full h-full bg-gradient-to-br"
            style={{
              background: `linear-gradient(135deg, hsl(${Math.random() * 360}, 70%, 50%), hsl(${Math.random() * 360}, 70%, 60%))`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10">
          <h3 className="font-semibold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
            Curated collection • Auto-generated
          </p>
        </div>

        {/* Play button */}
        <motion.button
          className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-gradient-to-r opacity-0 group-hover:opacity-100 flex items-center justify-center text-white font-bold transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, rgba(${color}, 0.8), rgba(${color}, 1))`,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          ▶
        </motion.button>
      </div>
    </motion.div>
  )
}
