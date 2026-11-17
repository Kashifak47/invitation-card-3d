import React, { useState, useRef, useEffect } from 'react';
import { weddingData } from './config/weddingData';
import AmbientParticles3D from './components/AmbientParticles3D';
import Envelope, { FallingFlowerPetals } from './components/Envelope';
import InvitationCard from './components/InvitationCard';
import MusicPlayer from './components/MusicPlayer';

export default function App() {
  // 'closed' | 'flaps-parting' | 'frame-zoom' | 'opened'
  const [envelopeStage, setEnvelopeStage] = useState('closed');
  const [showFlowerShower, setShowFlowerShower] = useState(false);
  const [flowerBurstKey, setFlowerBurstKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const audioRef = useRef(null);
  const showerTimerRef = useRef(null);
  const lastScrollYRef = useRef(0);
  const lastBurstTimeRef = useRef(0);

  const triggerColorfulFlowerShower = (durationMs = 4800) => {
    setFlowerBurstKey((prev) => prev + 1);
    setShowFlowerShower(true);
    lastBurstTimeRef.current = Date.now();

    if (showerTimerRef.current) {
      clearTimeout(showerTimerRef.current);
    }
    showerTimerRef.current = setTimeout(() => {
      setShowFlowerShower(false);
    }, durationMs);
  };

  // Lock body scroll and force top position until envelope has opened
  useEffect(() => {
    if (envelopeStage !== 'opened') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.body.style.overflow = 'hidden';
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [envelopeStage]);

  // Trigger periodic colorful falling flowers while scrolling through the invitation
  useEffect(() => {
    if (envelopeStage !== 'opened') return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollDelta = Math.abs(currentY - lastScrollYRef.current);
      const now = Date.now();

      if (scrollDelta > 650 && now - lastBurstTimeRef.current > 6500) {
        lastScrollYRef.current = currentY;
        triggerColorfulFlowerShower(4400);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [envelopeStage]);

  useEffect(() => {
    const audio = new Audio(weddingData.assets.music);
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.65;

    const handleError = () => {
      setAudioError(true);
      setIsPlaying(false);
    };

    audio.addEventListener('error', handleError);
    audioRef.current = audio;

    return () => {
      audio.removeEventListener('error', handleError);
      audio.pause();
      audioRef.current = null;
      if (showerTimerRef.current) clearTimeout(showerTimerRef.current);
    };
  }, []);

  const startMusic = async () => {
    if (!audioRef.current || audioError) return;
    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
    }
  };

  const handleOpenEnvelope = () => {
    if (envelopeStage !== 'closed') return;

    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Start music & initial colorful flower shower on click
    startMusic();
    triggerColorfulFlowerShower(6800);

    // Stage 1 (0.0s - 2.3s): Slow, hand-unfolded 4-flap sequence (Top -> Bottom -> Sides)
    setEnvelopeStage('flaps-parting');

    // Stage 2 (2.3s - 3.35s): Inner ornate oval frame gently expands into the First Page Hero
    setTimeout(() => {
      setEnvelopeStage('frame-zoom');
    }, 2850);

    // Stage 3 (3.35s+): Unlock scrolling at the exact top of the First Page
    setTimeout(() => {
      setEnvelopeStage('opened');
    }, 3950);
  };

  const handleToggleMusic = async () => {
    if (!audioRef.current || audioError) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        await audioRef.current.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#181213]">
      {/* Subtle 3D Floating Pearl Dust Particles */}
      <AmbientParticles3D />

      {/* Colorful Falling Flowers & Rose Petals (On Open + Periodically During Scroll) */}
      <FallingFlowerPetals active={showFlowerShower} burstKey={flowerBurstKey} />

      {/* 3D Four-Flap Lace & Tulle Envelope Gate */}
      <Envelope
        stage={envelopeStage}
        onOpenEnvelope={handleOpenEnvelope}
      />

      {/* Main Scrollable Invitation Card */}
      <InvitationCard isVisible={envelopeStage !== 'closed'} />

      {/* Persistent Floating Music Control (Bottom-Right) */}
      {envelopeStage !== 'closed' && (
        <MusicPlayer
          isPlaying={isPlaying}
          onToggleMusic={handleToggleMusic}
          audioError={audioError}
        />
      )}
    </div>
  );
}