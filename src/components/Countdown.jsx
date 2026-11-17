import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { weddingData } from '../config/weddingData';
import { CherubToilePattern, RibbonCartoucheFrame } from './Illustrations';
import { FloralLaceDivider } from './LaceBorders';

function calculateTimeLeft(targetIso) {
  const targetTime = new Date(targetIso).getTime();
  const now = Date.now();
  const diff = Math.max(0, targetTime - now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(() =>
    calculateTimeLeft(weddingData.date.isoTarget)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(weddingData.date.isoTarget));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="burgundy-surface relative text-[#FAF6F0]">
      <FloralLaceDivider />
      <CherubToilePattern />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.75 }}
        className="relative z-10 py-8 text-center"
      >
        <RibbonCartoucheFrame>
          <h2 className="font-serif mb-3 text-4xl font-normal tracking-wide text-[#FAF6F0]">
            Countdown
          </h2>

          {/* Constrained 4-column grid that stays strictly inside the ribbon border */}
          <div className="mx-auto grid max-w-[248px] grid-cols-4 items-baseline gap-1.5 text-center">
            <div className="flex flex-col items-center">
              <span className="font-serif text-[28px] leading-none font-normal tracking-wide sm:text-[32px]">
                {timeLeft.days}
              </span>
              <span className="mt-1.5 text-[8px] tracking-[0.14em] text-[#FAF6F0]/85 uppercase">
                DAYS
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-[28px] leading-none font-normal tracking-wide sm:text-[32px]">
                {timeLeft.hours}
              </span>
              <span className="mt-1.5 text-[8px] tracking-[0.14em] text-[#FAF6F0]/85 uppercase">
                HOURS
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-[28px] leading-none font-normal tracking-wide sm:text-[32px]">
                {timeLeft.minutes}
              </span>
              <span className="mt-1.5 text-[8px] tracking-[0.14em] text-[#FAF6F0]/85 uppercase">
                MINUTES
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-[28px] leading-none font-normal tracking-wide sm:text-[32px]">
                {timeLeft.seconds}
              </span>
              <span className="mt-1.5 text-[8px] tracking-[0.14em] text-[#FAF6F0]/85 uppercase">
                SECONDS
              </span>
            </div>
          </div>
        </RibbonCartoucheFrame>
      </motion.div>

      <FloralLaceDivider flip />
    </section>
  );
}