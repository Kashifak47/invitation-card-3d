import React from 'react';
import { motion } from 'motion/react';

export function FloralLaceDivider({ flip = false, className = "" }) {
  return (
    <div
      className={`relative w-full overflow-hidden select-none pointer-events-none ${
        flip ? "rotate-180 lace-shadow-up" : "lace-shadow"
      } ${className}`}
    >
      <svg
        viewBox="0 0 440 96"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-16 sm:h-20 block"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 0 L440 0 L440 34 Q412 68 385 42 Q355 82 320 46 Q285 88 250 48 Q220 92 190 48 Q155 88 120 46 Q85 82 55 42 Q28 68 0 34 Z"
          fill="#FAF6F0"
        />
        <path
          d="M0 24 Q28 58 55 32 Q85 74 120 38 Q155 80 190 40 Q220 84 250 40 Q285 80 320 38 Q355 74 385 32 Q412 58 440 24"
          stroke="#DFD4C6"
          strokeWidth="1.5"
          strokeDasharray="3 3"
        />
        {[35, 98, 162, 220, 278, 342, 405].map((cx, i) => {
          const cy = i % 2 === 0 ? 40 : 48;
          return (
            <g key={cx} transform={`translate(${cx}, ${cy})`}>
              {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                <circle
                  key={deg}
                  cx={Math.cos((deg * Math.PI) / 180) * 14}
                  cy={Math.sin((deg * Math.PI) / 180) * 14}
                  r="8"
                  fill="#FAF6F0"
                  stroke="#E2D7C8"
                  strokeWidth="0.9"
                />
              ))}
              <circle cx="0" cy="0" r="12" fill="#FDFBF7" stroke="#D8CBB8" strokeWidth="1" />
              <path
                d="M-6 -2 C-2 -8, 6 -6, 6 0 C6 6, -4 8, -7 2 C-9 -4, -2 -10, 5 -8"
                stroke="#CBBBA7"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <circle cx="-18" cy="12" r="2.2" fill="#FFFFFF" stroke="#D0C2B0" strokeWidth="0.6" />
              <circle cx="18" cy="12" r="2.2" fill="#FFFFFF" stroke="#D0C2B0" strokeWidth="0.6" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/**
 * Upgraded Royal Cameo Frame with Blush & Gold Floral Crests and Floating Pearls (Dress Code Section)
 */
export function DressCodeOrnateFrame({ children }) {
  const pearlCoords = [
    { top: "3%", left: "4%" },
    { top: "14%", left: "1.5%" },
    { top: "28%", left: "3.5%" },
    { top: "44%", left: "1%" },
    { top: "60%", left: "3%" },
    { top: "76%", left: "1.5%" },
    { top: "90%", left: "4.5%" },
    { top: "3%", right: "4%" },
    { top: "14%", right: "1.5%" },
    { top: "28%", right: "3.5%" },
    { top: "44%", right: "1%" },
    { top: "60%", right: "3%" },
    { top: "76%", right: "1.5%" },
    { top: "90%", right: "4.5%" },
  ];

  return (
    <div className="relative mx-auto max-w-[405px] px-6 py-14">
      {/* Floating 3D Pearls along outer margins */}
      {pearlCoords.map((pos, idx) => (
        <motion.span
          key={idx}
          style={pos}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: [0, idx % 2 === 0 ? -4 : 4, 0],
          }}
          viewport={{ once: false, margin: "-20px" }}
          transition={{
            opacity: { delay: idx * 0.04, duration: 0.45 },
            scale: { delay: idx * 0.04, duration: 0.45, type: "spring" },
            y: {
              delay: idx * 0.1,
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="pearl-bead pointer-events-none absolute h-3.5 w-3.5"
        />
      ))}

      {/* Royal Double-Bordered Cameo Sanctuary */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative rounded-[56px] border-2 border-[#CBB69E] bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#F3EAE0] px-6 py-14 shadow-[0_20px_45px_rgba(74,28,33,0.11),inset_0_0_0_6px_#FAF6F0,inset_0_0_0_7.5px_#DECBB4]"
      >
        {/* Corner Pearl Studs Inside Frame */}
        <span className="pearl-bead pointer-events-none absolute top-5 left-5 h-2.5 w-2.5" />
        <span className="pearl-bead pointer-events-none absolute top-5 right-5 h-2.5 w-2.5" />
        <span className="pearl-bead pointer-events-none absolute bottom-5 left-5 h-2.5 w-2.5" />
        <span className="pearl-bead pointer-events-none absolute bottom-5 right-5 h-2.5 w-2.5" />

        {/* Top Sculpted Rose & Gold Filigree Crest */}
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.65 }}
          className="pointer-events-none absolute -top-7 left-1/2 -translate-x-1/2"
        >
          <svg width="220" height="56" viewBox="0 0 220 56" fill="none">
            <path
              d="M16 46 C54 44, 76 8, 110 8 C144 8, 166 44, 204 46"
              stroke="#BFA88E"
              strokeWidth="1.7"
              fill="#FAF6F0"
            />
            <path
              d="M34 46 C66 38, 82 16, 110 16 C138 16, 154 38, 186 46"
              stroke="#D8C7B4"
              strokeWidth="1.1"
              strokeDasharray="3 3"
            />
            <circle cx="110" cy="15" r="7" fill="#FADADD" stroke="#B89B7A" strokeWidth="1.3" />
            <circle cx="110" cy="15" r="2.2" fill="#C59B6D" />
            <circle cx="82" cy="24" r="5" fill="#FFFDF9" stroke="#B89B7A" strokeWidth="1.1" />
            <circle cx="138" cy="24" r="5" fill="#FFFDF9" stroke="#B89B7A" strokeWidth="1.1" />
          </svg>
        </motion.div>

        {/* Bottom Sculpted Rose & Gold Filigree Crest */}
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.24, duration: 0.65 }}
          className="pointer-events-none absolute -bottom-7 left-1/2 -translate-x-1/2 rotate-180"
        >
          <svg width="220" height="56" viewBox="0 0 220 56" fill="none">
            <path
              d="M16 46 C54 44, 76 8, 110 8 C144 8, 166 44, 204 46"
              stroke="#BFA88E"
              strokeWidth="1.7"
              fill="#FAF6F0"
            />
            <circle cx="110" cy="15" r="7" fill="#FADADD" stroke="#B89B7A" strokeWidth="1.3" />
            <circle cx="110" cy="15" r="2.2" fill="#C59B6D" />
            <circle cx="82" cy="24" r="5" fill="#FFFDF9" stroke="#B89B7A" strokeWidth="1.1" />
            <circle cx="138" cy="24" r="5" fill="#FFFDF9" stroke="#B89B7A" strokeWidth="1.1" />
          </svg>
        </motion.div>

        {children}
      </motion.div>
    </div>
  );
}