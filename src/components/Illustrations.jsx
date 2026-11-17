import React from 'react';
import { motion } from 'motion/react';

/* 1. Hero Villa Aurelia Architectural Ink Sketch */
export function VillaHeroSketch({ className = "w-76 mx-auto" }) {
  return (
    <motion.svg
      viewBox="0 0 380 185"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <g stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" strokeLinejoin="round">
        <path d="M28 130 C52 114, 86 116, 112 122" strokeOpacity="0.45" />
        <path d="M268 122 C296 112, 326 116, 352 130" strokeOpacity="0.45" />

        <path d="M92 84 L122 76 L122 124 L92 124 Z" />
        <path d="M258 76 L288 84 L288 124 L258 124 Z" />

        <path d="M122 62 L190 50 L258 62 L258 124 L122 124 Z" fill="#FAF6F0" />
        <path d="M115 62 L190 46 L265 62" />
        <path d="M119 65 L190 50 L261 65" />

        <path d="M166 50 L166 34 L214 34 L214 50" fill="#FAF6F0" />
        <path d="M160 34 L190 25 L220 34" />
        <rect x="176" y="38" width="7" height="9" rx="1" />
        <rect x="197" y="38" width="7" height="9" rx="1" />

        <path d="M122 88 L258 88" strokeOpacity="0.7" />

        {[132, 150, 168, 186, 204, 222, 240].map((x) => (
          <rect key={x} x={x} y="69" width="8" height="13" rx="1" />
        ))}

        {[132, 152, 172, 192, 212, 232].map((x) => (
          <path key={x} d={`M${x} 124 L${x} 100 A5.5 5.5 0 0 1 ${x + 11} 100 L${x + 11} 124`} />
        ))}

        <path d="M74 124 L306 124" />
        <path d="M80 133 L300 133" />

        <path d="M162 124 L148 154 L232 154 L218 124" fill="#FAF6F0" />
        <path d="M158 131 L222 131 M155 138 L225 138 M152 145 L228 145" strokeOpacity="0.7" />

        <path d="M64 138 C58 116, 61 88, 67 72 C73 88, 76 116, 70 138 Z" fill="#FAF6F0" />
        <path d="M82 135 C78 116, 80 94, 85 82 C90 94, 92 116, 88 135 Z" fill="#FAF6F0" />
        <path d="M95 122 C88 104, 102 88, 114 96 C122 86, 138 96, 130 116" fill="#FAF6F0" />

        <path d="M286 135 C281 115, 283 90, 289 76 C295 90, 297 115, 291 135 Z" fill="#FAF6F0" />
        <path d="M304 139 C300 121, 302 100, 307 89 C312 100, 314 121, 310 139 Z" fill="#FAF6F0" />
        <path d="M250 120 C246 102, 260 90, 272 100 C280 92, 296 102, 286 122" fill="#FAF6F0" />

        <path d="M42 154 Q118 143 148 154 M232 154 Q274 144 338 154" />
        <path d="M90 163 Q190 152 290 163" strokeOpacity="0.6" />
      </g>
    </motion.svg>
  );
}

/* 2. Courting Swans Forming a Heart */
export function SwansIllustration({ className = "w-44 mx-auto" }) {
  return (
    <svg viewBox="0 0 220 110" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M88 68 C76 50, 78 22, 95 18 C105 16, 110 25, 110 33 C110 36, 108 39, 105 37" />
        <path d="M132 68 C144 50, 142 22, 125 18 C115 16, 110 25, 110 33 C110 36, 112 39, 115 37" />
        <path d="M88 68 C74 68, 56 62, 42 70 C34 75, 40 82, 54 83 C72 84, 92 84, 104 79" />
        <path d="M52 68 C58 52, 76 48, 88 58" />
        <path d="M46 73 C56 60, 74 56, 85 64" />
        <path d="M40 77 C52 68, 68 65, 80 71" />
        <path d="M132 68 C146 68, 164 62, 178 70 C186 75, 180 82, 166 83 C148 84, 128 84, 116 79" />
        <path d="M168 68 C162 52, 144 48, 132 58" />
        <path d="M174 73 C164 60, 146 56, 135 64" />
        <path d="M180 77 C168 68, 152 65, 140 71" />
        <path d="M30 88 Q110 85 190 88" />
        <path d="M48 94 Q110 92 172 94" />
        <path d="M75 100 Q110 99 145 100" />
      </g>
    </svg>
  );
}

/* 3. Cherub & Love Letter Repeating Background Overlay */
export function CherubToilePattern() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.13]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="cherub-toile" x="0" y="0" width="240" height="220" patternUnits="userSpaceOnUse">
            <g stroke="#FAF6F0" strokeWidth="1.1" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <g transform="translate(28, 24) rotate(-8)">
                <circle cx="42" cy="24" r="10" />
                <path d="M35 18 Q42 12 49 18" />
                <path d="M32 32 C16 20, 6 28, 18 42 C10 44, 14 52, 28 46" />
                <path d="M52 30 C68 18, 78 26, 64 40" />
                <path d="M34 34 C30 48, 32 62, 22 74" />
                <path d="M48 34 C54 48, 52 62, 64 70" />
                <g transform="translate(48, 28) rotate(12)">
                  <rect x="0" y="0" width="28" height="19" rx="1.5" />
                  <path d="M0 0 L14 11 L28 0" />
                  <circle cx="14" cy="10" r="2.2" />
                </g>
              </g>
              <g transform="translate(18, 145) rotate(-18)">
                <rect x="0" y="0" width="42" height="28" rx="2" />
                <path d="M0 0 L21 16 L42 0" />
                <path d="M18 14 C18 11, 21 11, 21 13 C21 11, 24 11, 24 14 C24 17, 21 19, 21 19 C21 19, 18 17, 18 14 Z" />
              </g>
              <g transform="translate(135, 110) rotate(6)">
                <circle cx="38" cy="24" r="10" />
                <path d="M28 32 C12 20, 4 30, 16 44" />
                <path d="M48 32 C66 18, 76 28, 62 44 C70 46, 66 54, 50 48" />
                <path d="M32 34 C28 50, 26 64, 16 74" />
                <path d="M45 34 C50 50, 56 62, 68 70" />
                <g transform="translate(-14, 30) rotate(-15)">
                  <rect x="0" y="0" width="28" height="19" rx="1.5" />
                  <path d="M0 0 L14 11 L28 0" />
                </g>
              </g>
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cherub-toile)" />
      </svg>
    </div>
  );
}

/* 4. Wide Ornate Ribbon Cartouche Frame (Countdown Section) */
export function RibbonCartoucheFrame({ children }) {
  return (
    <div className="relative mx-auto w-full max-w-[410px] px-11 py-14 sm:px-14">
      <svg
        viewBox="0 0 420 260"
        fill="none"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g stroke="#FAF6F0" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
          <path d="M210 26 C192 8, 170 15, 180 28 C186 35, 202 30, 210 26 Z" />
          <path d="M210 26 C228 8, 250 15, 240 28 C234 35, 218 30, 210 26 Z" />
          <path d="M207 26 L192 45 M213 26 L228 45" />

          <path d="M180 26 C132 18, 92 42, 44 35 C14 31, 6 58, 24 80 C36 96, 10 114, 18 130" />
          <path d="M176 32 C132 25, 92 48, 46 42 C20 38, 12 60, 29 80" strokeOpacity="0.65" />

          <path d="M240 26 C288 18, 328 42, 376 35 C406 31, 414 58, 396 80 C384 96, 410 114, 402 130" />
          <path d="M244 32 C288 25, 328 48, 374 42 C400 38, 408 60, 391 180" strokeOpacity="0.65" />

          <path d="M210 234 C192 252, 170 245, 180 232 C186 225, 202 230, 210 234 Z" />
          <path d="M210 234 C228 252, 250 245, 240 232 C234 225, 218 230, 210 234 Z" />
          <path d="M207 234 L192 215 M213 234 L228 215" />

          <path d="M180 234 C132 242, 92 218, 44 225 C14 229, 6 202, 24 180 C36 164, 10 146, 18 130" />
          <path d="M176 228 C132 235, 92 212, 46 218 C20 222, 12 200, 29 180" strokeOpacity="0.65" />

          <path d="M240 234 C288 242, 328 218, 376 225 C406 229, 414 202, 396 180 C384 164, 410 146, 402 130" />
          <path d="M244 228 C288 235, 328 212, 374 218 C400 222, 408 200, 391 180" strokeOpacity="0.65" />
        </g>
      </svg>
      <div className="relative z-10 mx-auto max-w-[265px]">{children}</div>
    </div>
  );
}

/* 5. Realistic Architectural Pen-and-Ink Venue Engraving Inside Lace Cameo (Location Section) */
export function VillaMedallionIllustration({ className = "w-80 mx-auto" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          viewBox="0 0 340 430"
          fill="none"
          className="h-auto w-full lace-shadow"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="architecturalVenueClip">
              <ellipse cx="170" cy="215" rx="108" ry="144" />
            </clipPath>
            <radialGradient id="etchingPaperBg" cx="50%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#FFFDF9" />
              <stop offset="75%" stopColor="#FAF4EB" />
              <stop offset="100%" stopColor="#EFE4D4" />
            </radialGradient>
          </defs>

          {Array.from({ length: 36 }).map((_, idx) => {
            const angle = (idx / 36) * Math.PI * 2;
            const cx = 170 + Math.cos(angle) * 135;
            const cy = 215 + Math.sin(angle) * 171;
            const deg = (angle * 180) / Math.PI;
            return (
              <g key={idx} transform={`translate(${cx}, ${cy}) rotate(${deg})`}>
                <ellipse cx="0" cy="0" rx="11" ry="15" fill="#FAF6F0" stroke="#D3C0AB" strokeWidth="1.1" />
                <ellipse cx="0" cy="0" rx="6" ry="9.5" stroke="#E2D4C3" strokeWidth="0.75" strokeDasharray="2 2" />
                <circle cx="3.5" cy="0" r="2" fill="#FFFFFF" stroke="#C5B097" strokeWidth="0.7" />
              </g>
            );
          })}

          <ellipse cx="170" cy="215" rx="124" ry="160" fill="#FAF6F0" stroke="#CBB69E" strokeWidth="1.6" />
          <ellipse
            cx="170"
            cy="215"
            rx="116"
            ry="152"
            stroke="#B89F86"
            strokeWidth="1.5"
            strokeDasharray="3 5"
          />
          <ellipse cx="170" cy="215" rx="108" ry="144" fill="url(#etchingPaperBg)" stroke="#C2AB93" strokeWidth="1.6" />

          <g clipPath="url(#architecturalVenueClip)" stroke="#5A3E36" strokeLinecap="round" strokeLinejoin="round">
            <g strokeWidth="0.65" strokeOpacity="0.45">
              <path d="M95 102 L145 102 M110 107 L165 107 M185 104 L240 104 M200 109 L235 109" />
              <path d="M80 120 Q125 112 160 118 M190 116 Q225 110 260 120" />
            </g>

            <g strokeWidth="0.95" fill="#F3EAE0">
              <path d="M78 228 C73 190, 75 148, 80 126 C85 148, 87 190, 82 228 Z" />
              <path d="M77 145 L81 142 M76 160 L82 156 M76 175 L83 171 M76 190 L83 186" strokeWidth="0.65" />
              <path d="M92 228 C88 196, 90 162, 94 142 C98 162, 100 196, 96 228 Z" />

              <path d="M262 228 C257 190, 259 148, 264 126 C269 148, 271 190, 266 228 Z" />
              <path d="M261 145 L265 142 M260 160 L266 156 M260 175 L267 171" strokeWidth="0.65" />
              <path d="M248 228 C244 196, 246 162, 250 142 C254 162, 256 196, 252 228 Z" />
            </g>

            <g strokeWidth="1.15">
              <rect x="86" y="168" width="24" height="60" fill="#F6EFE6" />
              <rect x="230" y="168" width="24" height="60" fill="#F6EFE6" />
              <path d="M83 168 L110 158 M230 158 L257 168" />

              <rect x="106" y="142" width="128" height="86" fill="#FFFDF9" />
              <polygon points="100,142 170,116 240,142" fill="#F8F1E7" />
              <g strokeWidth="0.65" strokeOpacity="0.6">
                <line x1="115" y1="142" x2="170" y2="120" />
                <line x1="132" y1="142" x2="170" y2="122" />
                <line x1="150" y1="142" x2="170" y2="124" />
                <line x1="225" y1="142" x2="170" y2="120" />
                <line x1="208" y1="142" x2="170" y2="122" />
                <line x1="190" y1="142" x2="170" y2="124" />
              </g>

              <rect x="148" y="98" width="44" height="24" fill="#FFFDF9" />
              <polygon points="143,98 170,86 197,98" fill="#F6EFE6" />
              <path d="M156 122 L156 106 A4 4 0 0 1 164 106 L164 122" fill="#EDE2D4" />
              <path d="M176 122 L176 106 A4 4 0 0 1 184 106 L184 122" fill="#EDE2D4" />

              <line x1="104" y1="145" x2="236" y2="145" strokeWidth="1.4" />
              <line x1="106" y1="180" x2="234" y2="180" strokeWidth="1" />

              {[112, 136, 158, 182, 204, 228].map((px) => (
                <line key={px} x1={px} y1="145" x2={px} y2="228" strokeWidth="0.85" strokeOpacity="0.75" />
              ))}

              {[118, 142, 165, 188, 212].map((wx) => (
                <g key={wx}>
                  <rect x={wx} y="154" width="10" height="18" fill="#EFE4D6" />
                  <path d={`M${wx - 2} 154 L${wx + 5} 149 L${wx + 12} 154`} strokeWidth="0.9" />
                  <line x1={wx + 5} y1="154" x2={wx + 5} y2="172" strokeWidth="0.7" />
                  <line x1={wx} y1="163" x2={wx + 10} y2="163" strokeWidth="0.7" />
                </g>
              ))}

              {[117, 141, 165, 189, 213].map((ax) => (
                <g key={ax}>
                  <path
                    d={`M${ax} 228 L${ax} 195 A5.5 5.5 0 0 1 ${ax + 11} 195 L${ax + 11} 228 Z`}
                    fill="#E5D7C6"
                  />
                  <path
                    d={`M${ax + 2.5} 228 L${ax + 2.5} 196 A3.5 3.5 0 0 1 ${ax + 8.5} 196 L${ax + 8.5} 228`}
                    strokeWidth="0.75"
                  />
                </g>
              ))}
            </g>

            <g strokeWidth="1.05">
              <rect x="72" y="228" width="196" height="7" fill="#FAF3E9" />
              {Array.from({ length: 24 }).map((_, i) => (
                <line key={i} x1={78 + i * 8} y1="228" x2={78 + i * 8} y2="235" strokeWidth="0.7" />
              ))}

              <path d="M138 235 L118 268 L152 268 L158 235 Z" fill="#F5ECE0" />
              <path d="M202 235 L222 268 L188 268 L182 235 Z" fill="#F5ECE0" />
              {[241, 247, 253, 259, 265].map((sy) => (
                <line key={sy} x1="124" y1={sy} x2="216" y2={sy} strokeWidth="0.65" strokeOpacity="0.65" />
              ))}
            </g>

            <g transform="translate(170, 294)" strokeWidth="1.05">
              <ellipse cx="0" cy="18" rx="58" ry="14" fill="#FAF4EB" />
              <ellipse cx="0" cy="18" rx="52" ry="11" fill="#EFE4D6" />
              <path d="M-38 18 L-15 18 M12 16 L36 16 M-22 22 L24 22" strokeWidth="0.65" strokeOpacity="0.6" />

              <path d="M-9 16 L-5 -2 L5 -2 L9 16 Z" fill="#FFFDF9" />
              <ellipse cx="0" cy="-2" rx="22" ry="5.5" fill="#FFFDF9" />
              <path d="M-4 -2 L-2 -14 L2 -14 L4 -2 Z" fill="#FFFDF9" />
              <path d="M0 -24 C-10 -28, -16 -16, -15 -4" strokeWidth="0.8" strokeDasharray="2 1.5" />
              <path d="M0 -24 C10 -28, 16 -16, 15 -4" strokeWidth="0.8" strokeDasharray="2 1.5" />
              <path d="M-18 0 C-22 8, -24 14, -22 18" strokeWidth="0.7" strokeDasharray="1.5 1.5" />
              <path d="M18 0 C22 8, 24 14, 22 18" strokeWidth="0.7" strokeDasharray="1.5 1.5" />
            </g>

            {[94, 246].map((ux) => (
              <g key={ux} transform={`translate(${ux}, 264)`} strokeWidth="1">
                <rect x="-8" y="18" width="16" height="14" fill="#F3EAE0" />
                <path d="M-10 6 C-10 14, -5 18, -5 18 L5 18 C5 18, 10 14, 10 6 Z" fill="#FFFDF9" />
                <circle cx="0" cy="-3" r="10" fill="#EAE0D2" />
                <path d="M-6 -5 Q0 -11 6 -5 M-7 1 Q0 -5 7 1" strokeWidth="0.75" />
              </g>
            ))}

            <path d="M82 332 Q170 322 258 332" strokeWidth="0.8" strokeOpacity="0.55" />
            <path d="M104 344 Q170 336 236 344" strokeWidth="0.7" strokeOpacity="0.45" />
          </g>
        </svg>
      </motion.div>
    </motion.div>
  );
}

/* 6. Hanging Pearl & Ribbon Garland ("The Day" Header Top) */
export function PearlGarlandDivider() {
  return (
    <div className="w-full overflow-hidden py-3">
      <svg viewBox="0 0 420 95" fill="none" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M-10 18 Q52 55 115 18 Q210 62 305 18 Q368 55 430 18"
          stroke="#DFD3C3"
          strokeWidth="2.5"
          strokeDasharray="1 7"
          strokeLinecap="round"
        />
        <path
          d="M-10 28 Q52 68 115 28 Q210 76 305 28 Q368 68 430 28"
          stroke="#E7DDD0"
          strokeWidth="2"
          strokeDasharray="1 6"
          strokeLinecap="round"
        />
        {[115, 210, 305].map((x, idx) => {
          const yOffset = idx === 1 ? 26 : 18;
          return (
            <g key={x} transform={`translate(${x}, ${yOffset})`}>
              <path
                d="M0 4 C-16 -10, -26 6, -4 8 M0 4 C16 -10, 26 6, 4 8"
                stroke="#DED2C2"
                strokeWidth="2.4"
                strokeDasharray="1 5"
                strokeLinecap="round"
              />
              <path
                d="M-2 8 L-10 38 M2 8 L10 38 M0 8 L0 48"
                stroke="#DED2C2"
                strokeWidth="2.2"
                strokeDasharray="1 5"
                strokeLinecap="round"
              />
              <circle cx="0" cy="52" r="3.5" fill="#EFE7DC" stroke="#CBBBA8" strokeWidth="0.8" />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

/* 6B. Faint Watermark Icon behind Timeline Times */
export function TimelineWatermarkIcon({ type }) {
  return (
    <svg viewBox="0 0 70 50" fill="none" className="h-12 w-16 text-[#CBBBA8]/40">
      <g stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        {type === 'fountain' && (
          <>
            <ellipse cx="35" cy="40" rx="22" ry="5" />
            <ellipse cx="35" cy="28" rx="14" ry="4" />
            <path d="M35 14 L35 40 M25 22 Q35 10 45 22" />
          </>
        )}
        {type === 'rings' && (
          <>
            <circle cx="28" cy="28" r="10" />
            <circle cx="40" cy="28" r="10" />
          </>
        )}
        {type === 'coupes' && (
          <>
            <ellipse cx="24" cy="18" rx="9" ry="3" />
            <path d="M15 18 L24 27 L33 18 M24 27 L24 40 M18 40 L30 40" />
            <ellipse cx="46" cy="22" rx="9" ry="3" />
            <path d="M37 22 L46 31 L55 22 M46 31 L46 42 M40 42 L52 42" />
          </>
        )}
        {type === 'plate' && (
          <>
            <ellipse cx="35" cy="28" rx="18" ry="8" />
            <ellipse cx="35" cy="28" rx="11" ry="5" />
            <path d="M12 20 L12 36 M58 20 L58 36" />
          </>
        )}
        {type === 'dancers' && (
          <>
            <circle cx="28" cy="14" r="4" />
            <circle cx="42" cy="14" r="4" />
            <path d="M22 38 L28 20 L34 38 M36 38 L42 20 L48 38" />
          </>
        )}
      </g>
    </svg>
  );
}

/* 7. Banquet Table with Wedding Cake, Candles & Coupes */
export function BanquetTableSketch({ className = "w-full" }) {
  return (
    <svg viewBox="0 0 400 185" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#4A1C21" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 170 L395 85" />
        <path d="M55 182 L398 104" />
        <path d="M88 184 L398 112" strokeOpacity="0.6" />

        <g transform="translate(10, 74)">
          <ellipse cx="38" cy="70" rx="34" ry="8" fill="#FAF6F0" />
          <path d="M26 78 L32 90 L44 90 L50 78" />
          <ellipse cx="38" cy="90" rx="18" ry="4" />
          <path d="M12 70 L12 52 C12 47, 64 47, 64 52 L64 70" fill="#FAF6F0" />
          <path d="M20 50 L20 35 C20 31, 56 31, 56 35 L56 50" fill="#FAF6F0" />
          <path d="M27 33 L27 21 C27 18, 49 18, 49 21 L49 33" fill="#FAF6F0" />
          <circle cx="34" cy="18" r="3.5" />
          <circle cx="41" cy="19" r="3" />
          <path d="M14 56 Q26 62 38 56 Q50 62 62 56" />
        </g>

        <g transform="translate(132, 42)">
          <path d="M8 10 C6 5, 10 0, 10 0 C10 0, 14 5, 12 10 C11 12, 9 12, 8 10 Z" />
          <rect x="8" y="13" width="4" height="58" fill="#FAF6F0" />
          <path d="M10 72 C2 66, -2 74, 8 76 M10 72 C18 66, 22 74, 12 76" />
          <path d="M8 76 L3 90 M12 76 L17 90" />
          <ellipse cx="10" cy="96" rx="11" ry="4" />
        </g>

        <g transform="translate(238, 12)">
          <path d="M8 10 C6 5, 10 0, 10 0 C10 0, 14 5, 12 10 Z" />
          <rect x="8" y="13" width="4" height="56" fill="#FAF6F0" />
          <path d="M10 70 C2 64, -2 72, 8 74 M10 70 C18 64, 22 72, 12 74" />
          <path d="M8 74 L4 88 M12 74 L16 88" />
          <ellipse cx="10" cy="94" rx="11" ry="4" />
        </g>

        <g transform="translate(182, 88)">
          <ellipse cx="16" cy="10" rx="14" ry="5" />
          <path d="M2 10 L16 24 L30 10" />
          <path d="M16 24 L16 42" />
          <ellipse cx="16" cy="43" rx="9" ry="3" />
        </g>

        <g transform="translate(284, 55)">
          <ellipse cx="10" cy="8" rx="7" ry="3" />
          <path d="M3 8 C3 20, 17 20, 17 8" />
          <path d="M10 18 L10 34" />
          <ellipse cx="10" cy="35" rx="6" ry="2" />
          <ellipse cx="26" cy="14" rx="7" ry="3" />
          <path d="M19 14 C19 26, 33 26, 33 14" />
          <path d="M26 24 L26 40" />
          <ellipse cx="26" cy="41" rx="6" ry="2" />
        </g>

        <g transform="translate(332, 34)">
          <path d="M12 36 L8 58 C8 62, 24 62, 24 58 L20 36 Z" fill="#FAF6F0" />
          <circle cx="10" cy="26" r="4" />
          <circle cx="18" cy="22" r="4.5" />
          <circle cx="24" cy="29" r="3.5" />
          <circle cx="14" cy="31" r="3.5" />
          <path d="M10 30 L14 36 M18 27 L16 36 M23 32 L18 36" />
        </g>

        <g transform="translate(95, 136) rotate(-12)">
          <ellipse cx="36" cy="16" rx="28" ry="10" fill="#FAF6F0" />
          <ellipse cx="36" cy="16" rx="20" ry="7" />
          <path d="M2 8 L4 24 M70 6 L68 24" />
        </g>

        <g transform="translate(215, 108) rotate(-12)">
          <ellipse cx="34" cy="15" rx="26" ry="9" fill="#FAF6F0" />
          <ellipse cx="34" cy="15" rx="18" ry="6" />
          <path d="M2 7 L4 22 M66 6 L64 22" />
        </g>

        <g transform="translate(320, 82) rotate(-12)">
          <ellipse cx="32" cy="14" rx="24" ry="8" fill="#FAF6F0" />
          <ellipse cx="32" cy="14" rx="16" ry="5" />
        </g>
      </g>
    </svg>
  );
}

/* 8. REALISTIC, WARM & NATURAL MUSLIM WEDDING COUPLE CAMEO PORTRAIT (Dress Code Section) */
export function CoupleAttireSketch({ className = "w-68 mx-auto" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={`relative ${className}`}
    >
      {/* Floating Romantic Hearts & Golden Sparkles */}
      {[
        { left: '15%', top: '12%', delay: 0, type: 'sparkle' },
        { left: '50%', top: '2%', delay: 0.5, type: 'heart' },
        { left: '84%', top: '14%', delay: 1.0, type: 'sparkle' },
      ].map((pos, i) => (
        <motion.div
          key={i}
          style={{ left: pos.left, top: pos.top }}
          animate={{ y: [0, -7, 0], opacity: [0.4, 0.95, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 3.2, delay: pos.delay, repeat: Infinity, ease: 'easeInOut' }}
          className="pointer-events-none absolute z-20"
        >
          {pos.type === 'heart' ? (
            <svg width="14" height="14" viewBox="0 0 16 16" className="fill-[#581822]/75">
              <path d="M8 14 C8 14 1.5 9.5 1.5 5 C1.5 2.8 3.2 1.2 5.2 1.2 C6.5 1.2 7.5 1.9 8 3 C8.5 1.9 9.5 1.2 10.8 1.2 C12.8 1.2 14.5 2.8 14.5 5 C14.5 9.5 8 14 8 14 Z" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 20 20" className="fill-[#C59B6D]">
              <path d="M10 1 L12 8 L19 10 L12 12 L10 19 L8 12 L1 10 L8 8 Z" />
            </svg>
          )}
        </motion.div>
      ))}

      <svg
        viewBox="0 0 280 320"
        fill="none"
        className="h-auto w-full overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="nikahCameoGlow" cx="50%" cy="46%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="68%" stopColor="#FAF3E8" stopOpacity="0.82" />
            <stop offset="100%" stopColor="#F3EAE0" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="groomSherwani" x1="130" y1="95" x2="210" y2="290" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FFFDF9" />
            <stop offset="55%" stopColor="#F5ECE0" />
            <stop offset="100%" stopColor="#E4D4C0" />
          </linearGradient>

          <linearGradient id="brideLehenga" x1="55" y1="110" x2="145" y2="295" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#842030" />
            <stop offset="55%" stopColor="#631521" />
            <stop offset="100%" stopColor="#460D16" />
          </linearGradient>

          <linearGradient id="brideDupatta" x1="40" y1="55" x2="125" y2="275" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FADADD" stopOpacity="0.88" />
            <stop offset="50%" stopColor="#F6C8D0" stopOpacity="0.78" />
            <stop offset="100%" stopColor="#842030" stopOpacity="0.85" />
          </linearGradient>

          <linearGradient id="naturalSkin" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCEFE5" />
            <stop offset="100%" stopColor="#EEDAC8" />
          </linearGradient>

          <clipPath id="couplePortraitArchClip">
            <path d="M34 295 L34 128 C34 70, 88 34, 140 20 C192 34, 246 70, 246 128 L246 295 Z" />
          </clipPath>
        </defs>

        {/* Warm Cameo Glow & Royal Islamic Mihrab Arch Frame */}
        <circle cx="140" cy="158" r="118" fill="url(#nikahCameoGlow)" />
        <path
          d="M30 296 L30 128 C30 68, 86 30, 140 15 C194 30, 250 68, 250 128 L250 296"
          stroke="#C8B29B"
          strokeWidth="1.4"
          strokeDasharray="4 4"
        />
        <path
          d="M36 294 L36 128 C36 72, 90 36, 140 22 C190 36, 244 72, 244 128 L244 294"
          stroke="#DFD0BE"
          strokeWidth="1.1"
        />

        {/* Delicate Crescent Moon & Floral Arch Garland */}
        <path
          d="M145 36 A11 11 0 1 1 134 25 A8.5 8.5 0 1 0 145 36 Z"
          fill="#D4AF37"
          opacity="0.85"
        />
        {[
          { cx: 64, cy: 62, r: 5.5 },
          { cx: 92, cy: 42, r: 4.5 },
          { cx: 188, cy: 42, r: 4.5 },
          { cx: 216, cy: 62, r: 5.5 },
        ].map((fl, i) => (
          <g key={i}>
            <circle cx={fl.cx} cy={fl.cy} r={fl.r} fill="#FAF6F0" stroke="#B59B82" strokeWidth="1.1" />
            <circle cx={fl.cx} cy={fl.cy} r="1.8" fill="#D8A7B1" />
          </g>
        ))}

        {/* ================= REALISTIC PORTRAIT OF MUSLIM COUPLE (3/4 LENGTH CAMEO) ================= */}
        <g clipPath="url(#couplePortraitArchClip)">
          <motion.g
            animate={{ y: [0, -2.5, 0] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
            stroke="#3B181E"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {/* ----------------- GROOM (ASIF - RIGHT, ROYAL IVORY & GOLD SHERWANI) ----------------- */}
            {/* Groom Torso & Tailored Royal Sherwani Shoulders */}
            <path
              d="M118 106 C132 96, 184 96, 200 108 C210 136, 214 195, 210 296 L112 296 C110 200, 112 138, 118 106 Z"
              fill="url(#groomSherwani)"
            />

            {/* Subtle Gold Brocade Motif Lines on Sherwani */}
            <g stroke="#D4AF37" strokeWidth="0.8" strokeOpacity="0.55">
              <path d="M136 135 L140 130 L144 135 L140 140 Z" />
              <path d="M174 135 L178 130 L182 135 L178 140 Z" />
              <path d="M180 172 L184 167 L188 172 L184 177 Z" />
              <path d="M176 210 L180 205 L184 210 L180 215 Z" />
            </g>

            {/* Groom Neck & Mandarin Bandhgala Collar */}
            <path d="M146 78 L145 98 L169 98 L167 77 Z" fill="url(#naturalSkin)" />
            <path
              d="M140 94 L157 105 L174 94 L170 86 L157 96 L144 86 Z"
              fill="#EFE2CE"
              stroke="#B89B7A"
              strokeWidth="1.2"
            />

            {/* Sherwani Gold Button Placket */}
            <line x1="157" y1="105" x2="157" y2="296" stroke="#B89B7A" strokeWidth="1.3" />
            {[116, 130, 144, 158, 172, 186, 200, 214].map((by) => (
              <circle key={by} cx="157" cy={by} r="2" fill="#D4AF37" stroke="#8C6D46" strokeWidth="0.6" />
            ))}

            {/* Layered Royal Pearl & Emerald Kantha Mala (Necklace) */}
            <path
              d="M138 97 Q157 128 176 97"
              stroke="#581822"
              strokeWidth="2.2"
              strokeDasharray="2.5 3.5"
            />
            <path
              d="M134 100 Q157 140 180 100"
              stroke="#D4AF37"
              strokeWidth="1.8"
              strokeDasharray="2 3"
            />

            {/* Jeweled Sherwani Pocket Brooch & Crimson Pocket Square */}
            <polygon points="174,126 186,126 181,118" fill="#7A1C2A" stroke="none" />
            <circle cx="179" cy="129" r="3.5" fill="#D4AF37" stroke="#8C6D46" strokeWidth="0.7" />
            <path d="M175 133 Q179 144 184 133" stroke="#D4AF37" strokeWidth="0.9" />

            {/* Draped Crimson & Gold Velvet Shawl Over Groom's Right Shoulder */}
            <path
              d="M122 103 C130 142, 134 198, 128 275 L114 272 C117 198, 116 142, 122 103 Z"
              fill="#681522"
              stroke="#D4AF37"
              strokeWidth="1.1"
            />

            {/* Groom Head (Warm, Natural 3/4 Turn Inclined Gently Toward Bride) */}
            <path
              d="M136 52 C136 37, 151 31, 164 37 C173 41, 175 56, 170 68 C166 78, 154 83, 144 79 C137 76, 135 64, 136 52 Z"
              fill="url(#naturalSkin)"
            />
            {/* Groom Ear */}
            <path d="M170 57 C174 57, 175 64, 171 67" fill="url(#naturalSkin)" />
            {/* Groom Natural Wavy Hair */}
            <path
              d="M136 49 C134 34, 150 25, 166 31 C176 35, 179 49, 172 60 C171 50, 166 42, 156 41 C147 40, 140 44, 136 49 Z"
              fill="#221315"
            />
            {/* Groom Warm Eyebrows, Gentle Eyes & Affectionate Smile */}
            <path d="M140 53 Q145 51 150 53.5" strokeWidth="1.15" />
            <path d="M156 53.5 Q161 51.5 165 54" strokeWidth="1.1" />
            <path d="M141 58.5 Q145.5 60.5 150 58.5" strokeWidth="1.15" />
            <path d="M156 58.5 Q160 60.5 164 58.5" strokeWidth="1.1" />
            {/* Nose Bridge & Softly Groomed Beard/Mustache */}
            <path d="M151 57 L149 65 L153 66.5" strokeWidth="1" />
            <path
              d="M144 69 C149 67.5, 155 67.5, 160 69 M138 66 C141 77, 152 81, 164 75 C168 72, 170 66, 170 62"
              stroke="#221315"
              strokeWidth="1.1"
              strokeOpacity="0.72"
            />
            <path d="M146 71 Q152 74 158 71" strokeWidth="1.1" />

            {/* ----------------- BRIDE (GULISHTA - LEFT, GRACEFUL HIJAB/DUPATTA & ZARDOZI LEHENGA) ----------------- */}
            {/* Flowing Sheer Blush & Crimson Bridal Dupatta Draping Over Head & Shoulder */}
            <motion.path
              animate={{
                d: [
                  "M86 52 C56 72, 38 134, 28 242 L26 296 L148 296 C144 210, 132 142, 118 112",
                  "M86 52 C50 70, 32 130, 22 240 L22 296 L148 296 C144 210, 132 142, 118 112",
                  "M86 52 C56 72, 38 134, 28 242 L26 296 L148 296 C144 210, 132 142, 118 112",
                ],
              }}
              transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
              fill="url(#brideDupatta)"
              stroke="#D4AF37"
              strokeWidth="1.35"
            />

            {/* Bride Royal Crimson & Gold Zardozi Lehenga & Choli Silhouette */}
            <path
              d="M68 116 C80 108, 112 108, 124 116 C134 156, 146 218, 152 296 L42 296 C48 218, 58 156, 68 116 Z"
              fill="url(#brideLehenga)"
              stroke="#D4AF37"
              strokeWidth="1.25"
            />

            {/* Intricate Gold Zardozi Embroidery Panels on Lehenga */}
            <g stroke="#D4AF37">
              <line x1="96" y1="120" x2="96" y2="296" strokeWidth="0.95" strokeDasharray="3 2" />
              <path d="M78 164 C70 208, 62 252, 56 296" strokeWidth="0.9" strokeOpacity="0.75" />
              <path d="M114 164 C122 208, 130 252, 136 296" strokeWidth="0.9" strokeOpacity="0.75" />
              {/* Gold Kamarbandh (Waistband) */}
              <path d="M72 162 Q96 168 120 162" strokeWidth="2.4" />
              {/* Zardozi Gold Booti Motifs */}
              {[
                [76, 192], [96, 188], [116, 192],
                [68, 226], [88, 222], [108, 222], [126, 226],
                [62, 260], [84, 256], [106, 256], [128, 260],
              ].map(([bx, by], i) => (
                <circle key={i} cx={bx} cy={by} r="2.3" fill="#F0D58C" stroke="#9C7A32" strokeWidth="0.6" />
              ))}
            </g>

            {/* Bride Modest Draped Hijab & Dupatta Crown Framing Her Face */}
            <path
              d="M74 68 C73 48, 90 38, 108 44 C120 48, 122 64, 116 78 C111 88, 98 94, 84 91 C75 88, 73 78, 74 68 Z"
              fill="#7A1C2A"
              stroke="#D4AF37"
              strokeWidth="1.3"
            />

            {/* Bride Serene Face Tilted Affectionately Toward Groom */}
            <path
              d="M84 64 C85 51, 97 46, 108 51 C115 55, 117 67, 112 77 C108 85, 98 88, 90 85 C84 82, 83 72, 84 64 Z"
              fill="url(#naturalSkin)"
            />

            {/* Traditional Bridal Maang Tikka & Side Jhoomar (Passa) on Hijab Forehead */}
            <path d="M84 54 Q99 48 112 56" stroke="#D4AF37" strokeWidth="1.4" />
            <circle cx="102" cy="54" r="2.6" fill="#FFFDF9" stroke="#D4AF37" strokeWidth="0.9" />
            {/* Side Jhoomar */}
            <polygon points="86,53 93,51 95,58 85,58" fill="#D4AF37" stroke="none" />
            <circle cx="87" cy="60" r="1.3" fill="#FFFDF9" stroke="none" />
            <circle cx="90.5" cy="60.5" r="1.3" fill="#FFFDF9" stroke="none" />
            <circle cx="94" cy="59.5" r="1.3" fill="#FFFDF9" stroke="none" />

            {/* Bride Graceful Arched Brows, Soft Eyelashes, Bridal Nath & Sweet Smile */}
            <path d="M90 62 Q94 60 98 62" strokeWidth="1.05" />
            <path d="M104 62 Q108 60.5 111 62.5" strokeWidth="1.05" />
            <path d="M90 67 Q94 69.5 98 67" strokeWidth="1.15" />
            <path d="M104 67 Q107.5 69.5 111 67" strokeWidth="1.15" />
            <path d="M101 65 L103 72 L100 73.5" strokeWidth="0.95" />
            {/* Delicate Gold Bridal Nath (Nose Ring) & Pearl Chain */}
            <circle cx="104" cy="73" r="2.8" stroke="#D4AF37" strokeWidth="0.9" fill="none" />
            <path d="M101.5 74 Q93 76 85 72" stroke="#D4AF37" strokeWidth="0.75" />
            <path d="M96 78.5 Q100.5 81 105 78.5" strokeWidth="1.1" />

            {/* Modest Hijab Neck Drape + Royal Gold Kundan Choker & Pearl Rani Haar */}
            <path d="M82 86 L76 106 L118 106 L111 85 Z" fill="#6E1825" stroke="#D4AF37" strokeWidth="1" />
            <path d="M82 96 Q97 103 112 96" stroke="#D4AF37" strokeWidth="3.2" />
            <path d="M79 101 Q97 116 115 101" stroke="#FFFDF9" strokeWidth="1.7" strokeDasharray="2 2.5" />
            <path d="M76 105 Q97 126 118 105" stroke="#D4AF37" strokeWidth="1.5" strokeDasharray="2.5 2.5" />

            {/* Bride & Groom Joined Hands Holding the Wedding Rose Bouquet */}
            <path
              d="M70 120 C66 144, 78 164, 108 172"
              stroke="#631521"
              strokeWidth="9"
            />
            <path
              d="M122 118 C130 142, 132 160, 120 172"
              stroke="#631521"
              strokeWidth="8"
            />
            {/* Gold Bridal Bangles (Chura) at Wrists */}
            <circle cx="104" cy="171" r="4.5" fill="#D4AF37" />
            <circle cx="122" cy="171" r="4.5" fill="#D4AF37" />

            {/* Lush Crimson, Blush & Ivory Rose Bridal Bouquet Held Together */}
            <g transform="translate(115, 176)">
              <path d="M-18 2 Q-26 -6 -18 -14 Q-10 -8 -12 0" fill="#8FA882" strokeWidth="0.9" />
              <path d="M18 0 Q26 -8 18 -16 Q10 -10 12 -2" fill="#8FA882" strokeWidth="0.9" />
              <circle cx="-7" cy="-4" r="7" fill="#D84B6A" />
              <circle cx="6" cy="-4" r="7.5" fill="#FADADD" />
              <circle cx="0" cy="5" r="7" fill="#FFFDF9" />
              <circle cx="-10" cy="5" r="5.5" fill="#FADADD" />
              <circle cx="10" cy="4" r="5.5" fill="#D84B6A" />
              <circle cx="-4" cy="11" r="5" fill="#F8C8DC" />
              <circle cx="5" cy="11" r="5" fill="#FFFDF9" />
              {/* Flowing Gold Silk Bouquet Ribbons */}
              <path d="M-2 16 C-6 32, -11 48, -8 64" stroke="#D4AF37" strokeWidth="1.4" />
              <path d="M2 16 C7 32, 11 46, 14 60" stroke="#D4AF37" strokeWidth="1.4" />
            </g>
          </motion.g>
        </g>

        {/* Ornamental Gold Pedestal Base Framing the Portrait */}
        <path
          d="M26 296 L254 296"
          stroke="#C8B29B"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M65 306 Q140 316 215 306"
          stroke="#C5B097"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="140" cy="311" r="3" fill="#C59B6D" />
      </svg>
    </motion.div>
  );
}

/* 9. Vintage Charter Bus in Roman Cypress Hills */
export function VintageBusSketch({ className = "w-56 mx-auto" }) {
  return (
    <svg viewBox="0 0 260 160" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#FAF6F0" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M42 108 C37 82, 39 48, 44 26 C49 48, 51 82, 46 108 Z" />
        <path d="M44 26 L44 114" />
        <path d="M58 106 C54 86, 56 60, 60 44 C64 60, 66 86, 62 106 Z" />
        <path d="M60 44 L60 110" />
        <path d="M72 104 C69 90, 70 74, 73 62 C76 74, 77 90, 74 104 Z" />
        <path d="M22 114 C65 102, 115 108, 165 96 C195 88, 225 94, 245 104" />
        <rect x="150" y="64" width="22" height="14" />
        <path d="M148 64 L161 56 L174 64" />
        <g transform="translate(82, 72)">
          <path d="M8 38 L8 14 C8 6, 16 2, 36 2 L86 2 C94 2, 98 8, 98 16 L98 38 Z" fill="#581822" />
          <path d="M18 2 L82 2 M24 -2 L76 -2" />
          <rect x="13" y="8" width="14" height="13" rx="2" />
          <rect x="30" y="8" width="14" height="13" rx="2" />
          <rect x="48" y="8" width="13" height="12" rx="1.5" />
          <rect x="64" y="8" width="13" height="12" rx="1.5" />
          <rect x="80" y="8" width="12" height="12" rx="1.5" />
          <circle cx="14" cy="30" r="3" />
          <circle cx="34" cy="30" r="3" />
          <path d="M19 28 L29 28 M19 31 L29 31" />
          <path d="M5 38 L100 38" />
          <circle cx="24" cy="41" r="6" fill="#581822" />
          <circle cx="52" cy="41" r="6" fill="#581822" />
          <circle cx="84" cy="41" r="6" fill="#581822" />
        </g>
        <path d="M35 142 C85 136, 145 124, 210 105" />
        <path d="M115 148 C158 136, 195 122, 236 108" />
      </g>
    </svg>
  );
}

/* 10. Floral Roman Balcony Window */
export function BalconyWindowSketch({ className = "w-48 mx-auto" }) {
  return (
    <svg viewBox="0 0 220 210" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#4A1C21" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
        <path d="M78 135 L78 58 A32 32 0 0 1 142 58 L142 135 Z" />
        <path d="M73 135 L73 58 A37 37 0 0 1 147 58 L147 135" />
        <polygon points="73,56 48,62 48,136 73,134" fill="#FAF6F0" />
        <polygon points="147,56 172,62 172,136 147,134" fill="#FAF6F0" />
        {[68, 78, 88, 98, 108, 118, 128].map((y) => (
          <g key={y}>
            <line x1="51" y1={y} x2="70" y2={y - 2} />
            <line x1="150" y1={y - 2} x2="169" y2={y} />
          </g>
        ))}
        <rect x="64" y="135" width="92" height="10" fill="#FAF6F0" />
        <path d="M76 145 L76 168 L84 162 L84 145" />
        <path d="M144 145 L144 168 L136 162 L136 145" />
        {[
          [42, 54], [36, 74], [38, 96], [44, 118], [56, 142], [68, 162],
          [178, 54], [184, 74], [182, 96], [176, 118], [164, 142], [152, 162],
          [95, 146], [110, 152], [125, 144]
        ].map(([cx, cy], i) => (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4.5" fill="#FAF6F0" />
            <circle cx={cx} cy={cy} r="1.2" />
            <path d={`M${cx - 6} ${cy + 4} Q${cx} ${cy + 12} ${cx + 5} ${cy + 6}`} />
          </g>
        ))}
      </g>
    </svg>
  );
}

/* 11. Heart Locket & Bow Illustration (RSVP Section) */
export function HeartLocketIllustration({ className = "w-44 mx-auto" }) {
  return (
    <svg viewBox="0 0 200 185" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#FAF6F0" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">
        <path d="M100 34 C82 12, 56 20, 68 38 C76 46, 92 38, 100 34 Z" />
        <path d="M100 34 C118 12, 144 20, 132 38 C124 46, 108 38, 100 34 Z" />
        <path d="M96 34 C72 44, 52 60, 32 64" />
        <path d="M104 34 C128 44, 148 60, 168 64" />
        <circle cx="100" cy="44" r="6" />
        <path d="M100 62 C82 44, 48 54, 48 84 C48 118, 86 142, 100 162 C114 142, 152 118, 152 84 C152 54, 118 44, 100 62 Z" />
        <path d="M100 68 C85 52, 56 60, 56 85 C56 113, 88 135, 100 152 C112 135, 144 113, 144 85 C144 60, 115 52, 100 68 Z" />
        <circle cx="89" cy="88" r="6.5" />
        <circle cx="109" cy="84" r="7" />
        <path d="M78 122 C78 106, 86 98, 96 102" />
        <path d="M98 126 C98 104, 106 96, 120 102 L122 124" />
      </g>
    </svg>
  );
}

/* 12. Intertwined Diamond Wedding Rings (Footer Section) */
export function WeddingRingsSketch({ className = "w-32 mx-auto" }) {
  return (
    <svg viewBox="0 0 160 110" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <g stroke="#4A1C21" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="64" cy="64" rx="34" ry="22" transform="rotate(-14 64 64)" />
        <ellipse cx="64" cy="64" rx="28" ry="17" transform="rotate(-14 64 64)" />
        <ellipse cx="98" cy="58" rx="32" ry="21" transform="rotate(16 98 58)" />
        <ellipse cx="98" cy="58" rx="26" ry="16" transform="rotate(16 98 58)" />
        <polygon points="96,22 108,16 118,22 112,35 100,34" fill="#FAF6F0" />
        <path d="M96 22 L118 22 M102 19 L106 34 M112 19 L108 34" />
      </g>
    </svg>
  );
}