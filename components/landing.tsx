'use client'

import { motion } from 'framer-motion'
import { Particles } from './particles'

interface LandingProps {
  onEnter: () => void
}

export function Landing({ onEnter }: LandingProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <div className="aurora-bg min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <Particles />

      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main headline */}
        <motion.h1
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent mb-6 drop-shadow-2xl"
          variants={itemVariants}
        >
          What does today feel like?
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
          variants={itemVariants}
        >
          Music isn&apos;t just something you listen to.
          <br />
          <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
            It&apos;s a place you visit.
          </span>
        </motion.p>

        {/* CTA Button */}
        <motion.button
          onClick={onEnter}
          className="relative px-8 py-4 text-lg font-semibold text-white rounded-full overflow-hidden group"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 group-hover:from-purple-500 group-hover:via-pink-500 group-hover:to-cyan-500 transition-all duration-300" />

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
            style={{
              background: 'radial-gradient(circle, rgba(168,85,247,0.8), transparent)',
            }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(168,85,247,0)',
                '0 0 40px rgba(168,85,247,0.5)',
                '0 0 20px rgba(168,85,247,0)',
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <span className="relative z-10 flex items-center gap-2">
            Enter MoodScape
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </span>
        </motion.button>
      </motion.div>

      {/* Floating background elements */}
      <motion.div
        className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-10 blur-3xl pointer-events-none"
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
        className="absolute bottom-10 left-10 w-60 h-60 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full opacity-10 blur-3xl pointer-events-none"
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}
