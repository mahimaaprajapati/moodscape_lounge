'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { MoodTheme } from '@/lib/mood-data'
import { Send } from 'lucide-react'

interface MoodJournalProps {
  mood: MoodTheme
}

const reflections = {
  happy: [
    'Your positive energy is contagious. Keep spreading the joy!',
    'This is the perfect moment to celebrate your victories.',
    'Your happiness is a beacon for others around you.',
  ],
  calm: [
    'Let the stillness bring clarity to your thoughts.',
    'Peace is found in accepting what you cannot change.',
    'Your inner calm is your greatest strength.',
  ],
  energetic: [
    'Channel this energy into creating something amazing.',
    'Your drive is unstoppable. Keep pushing forward.',
    'This momentum will carry you to great heights.',
  ],
  dreamy: [
    'Dreams are blueprints for your reality.',
    'Your imagination is your superpower.',
    'Let your mind wander and discover new possibilities.',
  ],
}

export function MoodJournal({ mood }: MoodJournalProps) {
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (input.trim()) {
      setSubmitted(true)
      setTimeout(() => {
        setInput('')
        setSubmitted(false)
      }, 3000)
    }
  }

  const getReflection = () => {
    const key = mood.id as keyof typeof reflections
    const reflectionList = reflections[key] || reflections.calm
    return reflectionList[Math.floor(Math.random() * reflectionList.length)]
  }

  return (
    <motion.div
      className="fixed right-6 bottom-32 z-40 max-w-sm"
      initial={{ opacity: 0, x: 400 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      <motion.div
        className="rounded-2xl p-6 backdrop-blur-xl border border-white/20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(${mood.primary.replace('#', '')}, 0.1) 0%, rgba(${mood.secondary.replace('#', '')}, 0.05) 100%)`,
        }}
      >
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 100% 100%, ${mood.primary}, transparent)`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        <div className="relative z-10 space-y-4">
          <div>
            <label className="text-sm font-semibold text-white/90 block mb-2">
              How was your day?
            </label>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Share your thoughts..."
              className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
              rows={3}
            />
          </div>

          {/* Reflection */}
          <motion.div
            className="bg-white/5 border border-white/10 rounded-lg p-4 min-h-12 flex items-center"
            animate={submitted ? { scale: 1.05 } : { scale: 1 }}
          >
            <p className="text-sm text-gray-300 italic">
              {submitted ? '✨ ' : ''}{getReflection()}
            </p>
          </motion.div>

          {/* Vibe suggestion */}
          <motion.div
            className="text-xs text-gray-400 p-3 bg-white/5 rounded-lg border border-white/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="font-semibold">Suggested vibe: </span>
            Slow-burn, introspective beats for deep thinking
          </motion.div>

          {/* Send button */}
          <motion.button
            onClick={handleSubmit}
            disabled={!input.trim()}
            className="w-full py-3 rounded-lg font-semibold text-white flex items-center justify-center gap-2 disabled:opacity-50 transition-all duration-300"
            style={{
              background: input.trim()
                ? `linear-gradient(135deg, ${mood.primary}, ${mood.secondary})`
                : 'linear-gradient(135deg, rgba(100,100,100,0.3), rgba(100,100,100,0.2))',
            }}
            whileHover={input.trim() ? { scale: 1.05 } : {}}
            whileTap={input.trim() ? { scale: 0.95 } : {}}
          >
            {submitted ? '✓ Saved to mood log' : 'Reflect'}
            <Send size={16} />
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
