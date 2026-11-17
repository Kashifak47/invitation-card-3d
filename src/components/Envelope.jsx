import React, { useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { weddingData } from '../config/weddingData';

const PEARL_POSITIONS = [
  { top: '6%', left: '24%' }, { top: '10%', left: '49%' }, { top: '7%', left: '75%' },
  { top: '17%', left: '35%' }, { top: '18%', left: '64%' }, { top: '27%', left: '43%' },
  { top: '26%', left: '57%' },
  { top: '25%', left: '12%' }, { top: '41%', left: '8%' }, { top: '52%', left: '21%' },
  { top: '66%', left: '11%' }, { top: '36%', left: '23%' },
  { top: '25%', left: '86%' }, { top: '41%', left: '90%' }, { top: '52%', left: '77%' },
  { top: '66%', left: '87%' }, { top: '36%', left: '75%' },
  { top: '72%', left: '43%' }, { top: '74%', left: '58%' }, { top: '82%', left: '32%' },
  { top: '83%', left: '68%' }, { top: '91%', left: '24%' }, { top: '90%', left: '50%' },
  { top: '92%', left: '76%' },
];

const FLOWER_PALETTES = [
  { fill: '#FADADD', stroke: '#E5A9B4', center: '#F3C65F' },
  { fill: '#F8C8DC', stroke: '#D988A6', center: '#FFF3B0' },
  { fill: '#FFDAB9', stroke: '#E6A57E', center: '#F4A261' },
  { fill: '#E8DFF5', stroke: '#B8A2D4', center: '#F6BD60' },
  { fill: '#FFF3CD', stroke: '#E2C078', center: '#E76F51' },
  { fill: '#D84B6A', stroke: '#9E2A44', center: '#F9C74F' },
  { fill: '#FFFDF9', stroke: '#E2D3C2', center: '#E9C46A' },
];

export function FallingFlowerPetals({ active, burstKey = 0 }) {
  const blossoms = useMemo(() => {
    return Array.from({ length: 28 }).map((_, i) => {
      const kind = i % 3 === 0 ? 'blossom' : i % 3 === 1 ? 'rose-petal' : 'marigold';
      const palette = FLOWER_PALETTES[(i + burstKey) % FLOWER_PALETTES.length];
      return {
        id: `${burstKey}-${i}`,
        kind,
        palette,
        left: `${2 + ((i * 33 + burstKey * 17) % 94)}%`,
        size:
          kind === 'blossom'
            ? 22 + (i % 3) * 5
            : kind === 'marigold'
              ? 20 + (i % 3) * 4
              : 16 + (i % 3) * 4,
        delay: (i % 8) * 0.13,
        duration: 3.6 + (i % 4) * 0.5,
        swayX: (i % 2 === 0 ? 1 : -1) * (28 + (i % 4) * 15),
        rotStart: (i * 42) % 360,
        rotEnd: ((i * 42) % 360) + (i % 2 === 0 ? 240 : -240),
      };
    });
  }, [burstKey]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key={`petal-shower-${burstKey}`}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 1.1 } }}
          className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
        >
          {blossoms.map((b) => (
            <motion.div
              key={b.id}
              initial={{
                y: '-10vh',
                x: 0,
                rotate: b.rotStart,
                opacity: 0,
              }}
              animate={{
                y: '108vh',
                x: [0, b.swayX, -b.swayX * 0.55, b.swayX * 0.75],
                rotate: b.rotEnd,
                opacity: [0, 0.96, 0.9, 0],
              }}
              transition={{
                duration: b.duration,
                delay: b.delay,
                ease: 'linear',
              }}
              style={{
                left: b.left,
                width: b.size,
                height: b.size,
                willChange: 'transform, opacity',
              }}
              className="absolute top-0"
            >
              {b.kind === 'blossom' && (
                <svg viewBox="0 0 40 40" fill="none" className="h-full w-full drop-shadow-xs">
                  {[0, 72, 144, 216, 288].map((deg) => (
                    <g key={deg} transform={`rotate(${deg} 20 20)`}>
                      <path
                        d="M20 18 C14 11, 13 3, 20 2 C27 3, 26 11, 20 18 Z"
                        fill={b.palette.fill}
                        stroke={b.palette.stroke}
                        strokeWidth="0.8"
                      />
                    </g>
                  ))}
                  <circle
                    cx="20"
                    cy="20"
                    r="3.2"
                    fill={b.palette.center}
                    stroke={b.palette.stroke}
                    strokeWidth="0.6"
                  />
                </svg>
              )}

              {b.kind === 'rose-petal' && (
                <svg viewBox="0 0 28 34" fill="none" className="h-full w-full drop-shadow-xs">
                  <path
                    d="M14 2 C5 6, 1 19, 8 29 C11 32, 17 32, 20 29 C27 19, 23 6, 14 2 Z"
                    fill={b.palette.fill}
                    stroke={b.palette.stroke}
                    strokeWidth="0.85"
                  />
                  <path
                    d="M14 6 C13 15, 14 22, 14 28"
                    stroke={b.palette.stroke}
                    strokeWidth="0.6"
                    strokeLinecap="round"
                    strokeOpacity="0.65"
                  />
                </svg>
              )}

              {b.kind === 'marigold' && (
                <svg viewBox="0 0 36 36" fill="none" className="h-full w-full drop-shadow-xs">
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                    <g key={deg} transform={`rotate(${deg} 18 18)`}>
                      <ellipse
                        cx="18"
                        cy="8"
                        rx="4"
                        ry="6.5"
                        fill={b.palette.fill}
                        stroke={b.palette.stroke}
                        strokeWidth="0.7"
                      />
                    </g>
                  ))}
                  <circle cx="18" cy="18" r="4" fill={b.palette.center} />
                </svg>
              )}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Shared Royal Burgundy & Gold Gradient for both the Wax Seal and "Tap Seal to Open" Pill
const ROYAL_SEAL_GRADIENT =
  'radial-gradient(ellipse at 35% 28%, #8E2434 0%, #581822 52%, #380C13 100%)';

export default function Envelope({ stage, onOpenEnvelope }) {
  // stage: 'closed' | 'flaps-parting' | 'frame-zoom' | 'opened'
  const isParting = stage === 'flaps-parting' || stage === 'frame-zoom';
  const isFrameZoom = stage === 'frame-zoom';
  const isOpened = stage === 'opened';

  return (
    <AnimatePresence>
      {!isOpened && (
        <motion.div
          key="envelope-gate"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } }}
          className="perspective-stage fixed inset-0 z-40 flex items-center justify-center overflow-hidden bg-[#181213]"
        >
          <div
            onClick={onOpenEnvelope}
            role="button"
            tabIndex={0}
            aria-label={`Open ${weddingData.couple.groom} and ${weddingData.couple.bride}'s Wedding Invitation`}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpenEnvelope();
              }
            }}
            className="perspective-stage relative h-full w-full max-w-[440px] cursor-pointer overflow-hidden select-none paper-surface shadow-[0_25px_70px_rgba(0,0,0,0.65)]"
          >
            {/* Warm Golden Interior Light Bloom as the Envelope Flaps Part */}
            <motion.div
              initial={{ opacity: 0, scale: 0.65 }}
              animate={
                isParting
                  ? { opacity: [0, 0.8, 0.3], scale: [0.65, 1.15, 1.35] }
                  : { opacity: 0, scale: 0.65 }
              }
              transition={{ duration: 2.6, ease: 'easeOut' }}
              className="pointer-events-none absolute inset-0 z-6"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(255, 246, 226, 0.92) 0%, rgba(212, 175, 55, 0.25) 45%, transparent 75%)',
              }}
            />

            {/* ================= LAYER 1: INNER ORNATE OVAL FLORAL CAMEO FRAME ================= */}
            <motion.div
              initial={{ scale: 0.88, opacity: 0.45, y: 16 }}
              animate={
                isFrameZoom
                  ? { scale: 1.2, opacity: 0, y: 0 }
                  : isParting
                    ? { scale: 1, opacity: 1, y: 0 }
                    : { scale: 0.88, opacity: 0.45, y: 16 }
              }
              transition={{
                duration: isFrameZoom ? 1.2 : 2.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ willChange: 'transform, opacity' }}
              className="pointer-events-none absolute inset-0 z-5 flex items-center justify-center p-3"
            >
              <div className="relative flex h-[92%] w-[94%] items-center justify-center rounded-[50%] border-[3px] border-[#DFD2C0] bg-[#FAF6F0] shadow-[inset_0_0_50px_rgba(198,180,158,0.42),0_0_0_14px_#F3ECE1,0_0_0_16px_#D6C7B4]">
                <svg
                  viewBox="0 0 360 560"
                  fill="none"
                  className="pointer-events-none absolute inset-0 h-full w-full"
                >
                  <ellipse
                    cx="180"
                    cy="280"
                    rx="158"
                    ry="254"
                    stroke="#D2C2AE"
                    strokeWidth="1.8"
                    strokeDasharray="10 6"
                  />
                  {Array.from({ length: 32 }).map((_, i) => {
                    const angle = (i / 32) * Math.PI * 2;
                    const cx = 180 + Math.cos(angle) * 152;
                    const cy = 280 + Math.sin(angle) * 246;
                    return (
                      <circle
                        key={i}
                        cx={cx}
                        cy={cy}
                        r="6"
                        fill="#FAF6F0"
                        stroke="#CBBBA6"
                        strokeWidth="1"
                      />
                    );
                  })}
                </svg>

                {/* Inner Preview Revealed Slowly as Flaps Unfold */}
                <motion.div
                  initial={{ opacity: 0, y: 14, scale: 0.94 }}
                  animate={
                    isParting
                      ? { opacity: 1, y: 0, scale: 1 }
                      : { opacity: 0, y: 14, scale: 0.94 }
                  }
                  transition={{ delay: 0.85, duration: 1.45, ease: [0.22, 1, 0.36, 1] }}
                  className="px-6 text-center"
                >
                  {/* <p
                    dir="rtl"
                    style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
                    className="mb-3 text-sm leading-loose text-[#581822]"
                  >
                    {weddingData.islamicBlessing.bismillah}
                  </p> */}
                  <p className="font-script text-5xl text-[#4A1C21] sm:text-6xl">
                    {weddingData.couple.groom}
                  </p>
                  <p className="font-serif my-1 text-lg italic text-[#7C5D58]">&amp;</p>
                  <p className="font-script text-5xl text-[#4A1C21] sm:text-6xl">
                    {weddingData.couple.bride}
                  </p>
                  <p className="font-serif mt-2.5 text-sm tracking-[0.22em] text-[#8C7365]">
                    {weddingData.date.displayDots}
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* ================= LEFT TRIANGULAR LACE FLAP (Slow Hand-Unfold 3rd) ================= */}
            <motion.div
              initial={{ x: '0%', rotateY: 0, scaleX: 1 }}
              animate={
                isParting
                  ? {
                      x: ['0%', '-6%', '-22%', '-106%'],
                      rotateY: [0, -18, -42, -68],
                      scaleX: [1, 0.98, 0.94, 0.88],
                    }
                  : { x: '0%', rotateY: 0, scaleX: 1 }
              }
              transition={{
                duration: 2.4,
                delay: isParting ? 0.95 : 0,
                times: [0, 0.22, 0.5, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: 'left center', willChange: 'transform' }}
              className="preserve-3d pointer-events-none absolute inset-0 z-10"
            >
              <div
                style={{ clipPath: 'polygon(0% 0%, 53% 50%, 0% 100%)' }}
                className="paper-surface tulle-pleats-horizontal relative h-full w-full shadow-[16px_0_36px_rgba(38,18,15,0.26)]"
              >
                <svg viewBox="0 0 240 800" className="h-full w-full" preserveAspectRatio="none">
                  <path
                    d="M0 0 Q115 200 228 400 Q115 600 0 800"
                    fill="none"
                    stroke="#EDE4D7"
                    strokeWidth="22"
                    strokeDasharray="14 7"
                  />
                  <path
                    d="M0 16 Q105 205 212 400 Q105 595 0 784"
                    fill="none"
                    stroke="#CBBBA6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </motion.div>

            {/* ================= RIGHT TRIANGULAR LACE FLAP (Slow Hand-Unfold 3rd) ================= */}
            <motion.div
              initial={{ x: '0%', rotateY: 0, scaleX: 1 }}
              animate={
                isParting
                  ? {
                      x: ['0%', '6%', '22%', '106%'],
                      rotateY: [0, 18, 42, 68],
                      scaleX: [1, 0.98, 0.94, 0.88],
                    }
                  : { x: '0%', rotateY: 0, scaleX: 1 }
              }
              transition={{
                duration: 2.4,
                delay: isParting ? 0.95 : 0,
                times: [0, 0.22, 0.5, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: 'right center', willChange: 'transform' }}
              className="preserve-3d pointer-events-none absolute inset-0 z-10"
            >
              <div
                style={{ clipPath: 'polygon(100% 0%, 47% 50%, 100% 100%)' }}
                className="paper-surface tulle-pleats-horizontal relative h-full w-full shadow-[-16px_0_36px_rgba(38,18,15,0.26)]"
              >
                <svg viewBox="0 0 240 800" className="h-full w-full" preserveAspectRatio="none">
                  <path
                    d="M240 0 Q125 200 12 400 Q125 600 240 800"
                    fill="none"
                    stroke="#EDE4D7"
                    strokeWidth="22"
                    strokeDasharray="14 7"
                  />
                  <path
                    d="M240 16 Q135 205 28 400 Q135 595 240 784"
                    fill="none"
                    stroke="#CBBBA6"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </motion.div>

            {/* ================= BOTTOM SCALLOPED LACE FLAP (Slow Hand-Unfold 2nd) ================= */}
            <motion.div
              initial={{ y: '0%', rotateX: 0, scaleY: 1 }}
              animate={
                isParting
                  ? {
                      y: ['0%', '5%', '20%', '106%'],
                      rotateX: [0, -16, -38, -64],
                      scaleY: [1, 0.98, 0.94, 0.88],
                    }
                  : { y: '0%', rotateX: 0, scaleY: 1 }
              }
              transition={{
                duration: 2.45,
                delay: isParting ? 0.65 : 0,
                times: [0, 0.22, 0.48, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: 'bottom center', willChange: 'transform' }}
              className="preserve-3d pointer-events-none absolute inset-0 z-20"
            >
              <div
                style={{ clipPath: 'polygon(0% 100%, 50% 47%, 100% 100%)' }}
                className="paper-surface tulle-pleats-vertical relative h-full w-full shadow-[0_-16px_38px_rgba(38,18,15,0.28)]"
              >
                <svg viewBox="0 0 440 800" className="h-full w-full" preserveAspectRatio="none">
                  <path
                    d="M0 800 Q110 610 220 382 Q330 610 440 800"
                    fill="none"
                    stroke="#EDE4D7"
                    strokeWidth="24"
                    strokeDasharray="16 8"
                  />
                  <path
                    d="M18 800 Q118 632 220 412 Q322 632 422 800"
                    fill="none"
                    stroke="#CEBFA9"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </motion.div>

            {/* ================= TOP SCALLOPED LACE FLAP + CLEAN ROYAL WAX SEAL ================= */}
            <motion.div
              initial={{ y: '0%', rotateX: 0, scaleY: 1 }}
              animate={
                isParting
                  ? {
                      y: ['0%', '-2%', '-14%', '-106%'],
                      rotateX: [0, 14, 36, 66],
                      scaleY: [1, 0.99, 0.95, 0.86],
                    }
                  : { y: '0%', rotateX: 0, scaleY: 1 }
              }
              transition={{
                duration: 2.6,
                delay: isParting ? 0.25 : 0,
                times: [0, 0.18, 0.44, 1],
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformOrigin: 'top center', willChange: 'transform' }}
              className="preserve-3d pointer-events-none absolute inset-0 z-30"
            >
              <div
                style={{ clipPath: 'polygon(0% 0%, 100% 0%, 50% 53%)' }}
                className="paper-surface tulle-pleats-vertical relative h-full w-full shadow-[0_20px_42px_rgba(38,18,15,0.32)]"
              >
                <svg viewBox="0 0 440 800" className="h-full w-full" preserveAspectRatio="none">
                  <path
                    d="M0 0 Q110 190 220 418 Q330 190 440 0"
                    fill="none"
                    stroke="#EDE4D7"
                    strokeWidth="24"
                    strokeDasharray="16 8"
                  />
                  <path
                    d="M18 0 Q118 168 220 388 Q322 168 422 0"
                    fill="none"
                    stroke="#CEBFA9"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              {/* ================= CLEAN ROYAL BURGUNDY & 24K GOLD SEAL BUTTON (NO CURVE LINES) ================= */}
              <div className="pointer-events-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {stage === 'closed' && (
                  <>
                    <motion.span
                      animate={{ scale: [1, 1.25, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
                      className="pointer-events-none absolute -inset-4 rounded-[50%] border-2 border-[#D4AF37]/80 bg-[#581822]/20"
                    />
                    <motion.span
                      animate={{ scale: [1, 1.13, 1], opacity: [0.85, 0.25, 0.85] }}
                      transition={{ duration: 2.4, delay: 0.35, repeat: Infinity, ease: 'easeInOut' }}
                      className="pointer-events-none absolute -inset-2 rounded-[50%] border-[1.5px] border-[#D4AF37]"
                    />
                  </>
                )}

                <motion.div
                  animate={
                    isParting
                      ? {
                          scale: [1, 1.15, 1.06],
                          rotateZ: [0, -4, 0],
                          y: [0, -12, -4],
                        }
                      : { y: [0, -3.5, 0] }
                  }
                  transition={
                    isParting
                      ? { duration: 0.8, ease: 'easeOut' }
                      : { duration: 2.8, repeat: Infinity, ease: 'easeInOut' }
                  }
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                  style={{ background: ROYAL_SEAL_GRADIENT }}
                  className="relative flex h-44 w-36 flex-col items-center justify-center rounded-[50%] border-[2.5px] border-[#D4AF37] p-2.5 shadow-[0_22px_48px_rgba(42,10,16,0.6),0_0_0_4px_#FAF6F0,0_0_0_6px_#D4AF37,inset_0_2px_8px_rgba(255,235,205,0.5)]"
                >
                  {/* 16 Luminous Pearl Studs Around the Gold Rim */}
                  {Array.from({ length: 16 }).map((_, idx) => {
                    const angle = (idx / 16) * Math.PI * 2;
                    const left = `${50 + Math.cos(angle) * 46.5}%`;
                    const top = `${50 + Math.sin(angle) * 46.5}%`;
                    return (
                      <span
                        key={idx}
                        style={{ left, top }}
                        className="pearl-bead pointer-events-none absolute h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2"
                      />
                    );
                  })}

                  {/* Inner Royal Crimson & Gold Medallion Core (Clean: Heart + Monogram + Divider + OPEN) */}
                  <div
                    style={{
                      background:
                        'radial-gradient(circle at 50% 40%, #7A1E2D 0%, #52121C 68%, #340910 100%)',
                    }}
                    className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-[50%] border-[1.5px] border-[#F0D58C] px-2 text-center shadow-[inset_0_4px_12px_rgba(0,0,0,0.5)]"
                  >
                    {/* Clean 24K Gold Heart at Top (No curved branch lines) */}
                    <svg viewBox="0 0 24 22" className="mb-2 h-3.5 w-4 shrink-0">
                      <path
                        d="M12 20 C12 20 2 13.5 2 7 C2 4.2 4.2 2 7 2 C8.8 2 10.8 3.1 12 4.8 C13.2 3.1 15.2 2 17 2 C19.8 2 22 4.2 22 7 C22 13.5 12 20 12 20 Z"
                        fill="#F0D58C"
                      />
                    </svg>

                    {/* CRYSTAL-CLEAR BOLD ROYAL SERIF MONOGRAM */}
                    <div className="flex items-center justify-center gap-1 leading-none">
                      <span
                        className="font-serif text-[33px] font-semibold tracking-wider text-[#FFFDF9]"
                        style={{
                          textShadow:
                            '0 2px 4px rgba(0,0,0,0.75), 0 0 10px rgba(240,213,140,0.45)',
                        }}
                      >
                        {weddingData.couple.brideInitial}
                      </span>
                      <span
                        className="font-serif text-[20px] italic font-normal text-[#F0D58C]"
                        style={{ textShadow: '0 2px 3px rgba(0,0,0,0.7)' }}
                      >
                        &amp;
                      </span>
                      <span
                        className="font-serif text-[33px] font-semibold tracking-wider text-[#FFFDF9]"
                        style={{
                          textShadow:
                            '0 2px 4px rgba(0,0,0,0.75), 0 0 10px rgba(240,213,140,0.45)',
                        }}
                      >
                        {weddingData.couple.groomInitial}
                      </span>
                    </div>

                    {/* Straight Gold Divider & "OPEN" Sub-label */}
                    <div className="my-2 h-[1px] w-14 bg-gradient-to-r from-transparent via-[#F0D58C] to-transparent" />
                    <span className="text-[8px] font-semibold tracking-[0.28em] text-[#F0D58C] uppercase">
                      OPEN
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Scattered 3D Iridescent Pearls */}
            <motion.div
              animate={isParting ? { opacity: 0, scale: 1.06 } : { opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: isParting ? 0.35 : 0 }}
              className="pointer-events-none absolute inset-0 z-25"
            >
              {PEARL_POSITIONS.map((pos, idx) => (
                <span
                  key={idx}
                  style={{ top: pos.top, left: pos.left }}
                  className="pearl-bead absolute h-3 w-3"
                />
              ))}
            </motion.div>

            {/* ================= MATCHING ROYAL BURGUNDY & 24K GOLD "TAP SEAL TO OPEN" PILL ================= */}
            {stage === 'closed' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: [0, -4, 0] }}
                transition={{
                  opacity: { delay: 0.3, duration: 0.6 },
                  y: { duration: 2.4, repeat: Infinity, ease: 'easeInOut' },
                }}
                className="pointer-events-none absolute bottom-7 left-1/2 z-40 w-max max-w-[92vw] -translate-x-1/2"
              >
                <div
                  style={{ background: ROYAL_SEAL_GRADIENT }}
                  className="inline-flex w-max items-center justify-center gap-2.5 rounded-full border-[1.5px] border-[#D4AF37] px-6 py-2.5 text-[10.5px] font-semibold tracking-[0.22em] whitespace-nowrap text-[#FFFDF9] uppercase shadow-[0_10px_28px_rgba(42,10,16,0.48),0_0_0_2px_#FAF6F0]"
                >
                  <span className="inline-block h-2 w-2 shrink-0 animate-ping rounded-full bg-[#F0D58C]" />
                  <span
                    className="whitespace-nowrap text-[#FFFDF9]"
                    style={{ textShadow: '0 1px 2px rgba(0,0,0,0.65)' }}
                  >
                    Tap Seal to Open
                  </span>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}