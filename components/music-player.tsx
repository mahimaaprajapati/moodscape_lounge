'use client'
import { motion } from "framer-motion";
import { MoodTheme } from '@/lib/mood-data'
import { playlists } from "@/lib/playlists";


interface MusicPlayerProps {
  mood: MoodTheme
}

export function MusicPlayer({ mood }: MusicPlayerProps) {
    const playlist =
  playlists[mood.id as keyof typeof playlists] || playlists.happy;
 return (
  <motion.div
    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-5"
    initial={{ y: 200, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
  >
    <div className="rounded-3xl overflow-hidden backdrop-blur-2xl border border-white/10 bg-black/35 shadow-2xl">

      <div className="p-6">
        <h3 className="text-white text-2xl font-bold">
          🎵 {mood.name} Playlist
        </h3>

        <p className="text-gray-400 mt-2">
          {playlist.quote}
        </p>
      </div>

      <iframe
        src={playlist.spotify}
        width="100%"
        height="352"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        style={{ border: "none" }}
      />
    </div>
  </motion.div>
)
};