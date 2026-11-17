import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'motion/react';

export default function MusicPlayer({ isPlaying, onToggleMusic, audioError }) {
  return (
    <div className="fixed right-5 bottom-6 z-50 sm:right-8 sm:bottom-8">
      <motion.button
        type="button"
        onClick={onToggleMusic}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        title={
          audioError
            ? 'Audio file /assets/music.mp3 ready when added'
            : isPlaying
              ? 'Pause music'
              : 'Play music'
        }
        className="relative flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-[#D8C7B8] bg-[#EFE5DC]/95 text-[#581822] shadow-[0_6px_20px_rgba(48,20,24,0.22)] backdrop-blur-xs transition-colors hover:bg-[#F5EDE4]"
      >
        {/* Subtle pulsing ring while music plays */}
        {isPlaying && (
          <span className="pointer-events-none absolute inset-0  rounded-full" />
        )}

        {isPlaying ? (
          <Volume2 className="h-5 w-5 stroke-[1.75]" />
        ) : (
          <VolumeX className="h-5 w-5 stroke-[1.75] opacity-75" />
        )}
      </motion.button>
    </div>
  );
}