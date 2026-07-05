import { useEffect, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  duration: number
  delay: number
  opacity: number
}

export function Particles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: Particle[] = []
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          duration: Math.random() * 10 + 5,
          delay: Math.random() * 2,
          opacity: Math.random() * 0.5 + 0.1,
        })
      }
      setParticles(newParticles)
    }

    generateParticles()

    const interval = setInterval(generateParticles, 20000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-purple-400 to-cyan-300"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            opacity: particle.opacity,
            animation: `float ${particle.duration}s ease-in-out ${particle.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
