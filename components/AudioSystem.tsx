'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioSystem() {
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.3);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hoverSoundRef = useRef<HTMLAudioElement | null>(null);
  const clickSoundRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Create audio context for sound effects
    if (typeof window !== 'undefined') {
      hoverSoundRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBgoOEhYaHiImKi4yNjo+QkZKTlJWWl5iZmpucnZ6foKGio6SlpqeoqaqrrK2ur7CxsrO0tba3uLm6u7y9vr/AwcLDxMXGx8jJysvMzc7P0NHS09TV1tfY2drb3N3e3+Dh4uPk5ebn6Onq6+zt7u/w8fLz9PX29/j5+vv8/f7/AAECAwQFBgcICQoLDA0ODxAREhMUFRYXGBkaGxwdHh8gISIjJCUmJygpKissLS4vMDEyMzQ1Njc4OTo7PD0+P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltcXV5fYGFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e3x9fn+AgYKDhIWGh4iJiouMjY6PkJGSk5SVlpeYmZqbnJ2en6ChoqOkpaanqKmqq6ytrq+wsbKztLW2t7i5uru8vb6/wMHCw8TFxsfIycrLzM3Oz9DR0tPU1dbX2Nna29zd3t/g4eLj5OXm5+jp6uvs7e7v8PHy8/T19vf4+fr7/P3+/w==');
      clickSoundRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYmMkJOXm5+ipqmtr7K1uLu9wMLFx8rMztDR09XW2Nna29ze3+Dh4uPk5eXm5+jp6err7O3t7u/v8PHx8vLz8/T09fX19vb39/f4+Pn5+fr6+vr6+/v7+/z8/Pz8/P39/f39/f39/f39/f39/f39/f39/f39/f39/f39/Pz8/Pz8/Pv7+/v6+vr6+vn5+fj4+Pf39/b29fX19PT08/Py8vHx8PDv7+7t7e3s6+rq6ejn5uXl5OPi4eDf3t3c2tnY1tXU0tHQzszKx8XCwL27uLWyraylop6bkZKPi4eDgH17eHV0cnBubGloZmRiYF5cWlhWVFJQTkxKSEZEQkA+PDo4NjQyMC4sKigmJCIgHhwYGBYUEhAODAoIBgQCAA==');
    }

    // Setup ambient music (placeholder - user can replace with their own)
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
      // Auto-play on mount
      audioRef.current.play().catch(() => {
        // Browser might block auto-play, user will need to click unmute
      });
    }

    // Add event listeners for UI sounds
    const addSoundEffects = () => {
      // Hover sounds for interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', playHoverSound);
        el.addEventListener('click', playClickSound);
      });
    };

    const playHoverSound = () => {
      if (!isMuted && hoverSoundRef.current) {
        hoverSoundRef.current.currentTime = 0;
        hoverSoundRef.current.volume = volume * 0.3;
        hoverSoundRef.current.play().catch(() => {});
      }
    };

    const playClickSound = () => {
      if (!isMuted && clickSoundRef.current) {
        clickSoundRef.current.currentTime = 0;
        clickSoundRef.current.volume = volume * 0.5;
        clickSoundRef.current.play().catch(() => {});
      }
    };

    // Delay to ensure DOM is ready
    setTimeout(addSoundEffects, 1000);

    // Re-add on navigation
    const observer = new MutationObserver(addSoundEffects);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [isMuted, volume]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      if (!isMuted) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <>
      {/* Ambient Background Music */}
      {/* To use Halo music legally:
          1. Purchase from iTunes, Amazon Music, or streaming platforms
          2. Upload the audio file using the file upload feature in your app
          3. Replace the src below with your uploaded file URL
          
          For now, using a free epic orchestral track as placeholder
      */}
      <audio 
        ref={audioRef}
        src="https://cdn.pixabay.com/audio/2023/10/26/audio_0279ca1b4e.mp3"
        preload="auto"
      />

      {/* Audio Controls */}
      <div className="fixed bottom-8 right-8 z-[100] flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleMute}
          className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-950/80 to-cyan-900/80 backdrop-blur-md border border-cyan-400/30 flex items-center justify-center hover:border-cyan-400 transition-all group"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
          ) : (
            <Volume2 className="w-5 h-5 text-cyan-400 transition-colors" />
          )}
        </motion.button>

        <AnimatePresence>
          {!isMuted && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-950/80 to-transparent backdrop-blur-md border border-cyan-400/30 rounded-full px-4 py-2"
            >
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-24 accent-cyan-400"
              />
              <span className="text-cyan-400 text-xs font-mono">
                {Math.round(volume * 100)}%
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    
    </>
  );
}