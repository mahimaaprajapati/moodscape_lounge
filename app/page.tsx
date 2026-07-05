'use client'

import { useState } from 'react'
import { Landing } from '@/components/landing'
import { MoodSelection } from '@/components/mood-selection'
import { ExperienceView } from '@/components/experience-view'
import { MoodTheme } from '@/lib/mood-data'

type ViewState = 'landing' | 'mood-selection' | 'experience'

export default function Page() {
  const [view, setView] = useState<ViewState>('landing')
  const [selectedMood, setSelectedMood] = useState<MoodTheme | null>(null)

  const handleEnterLanding = () => {
    setView('mood-selection')
  }

  const handleSelectMood = (mood: MoodTheme) => {
    setSelectedMood(mood)
    setView('experience')
  }

  const handleBackToMoodSelection = () => {
    setView('mood-selection')
    setSelectedMood(null)
  }

  return (
    <>
      {view === 'landing' && <Landing onEnter={handleEnterLanding} />}
      {view === 'mood-selection' && <MoodSelection onSelect={handleSelectMood} />}
      {view === 'experience' && selectedMood && (
        <ExperienceView mood={selectedMood} onBack={handleBackToMoodSelection} />
      )}
    </>
  )
}
