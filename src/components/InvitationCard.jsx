import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import {
  VillaHeroSketch,
  SwansIllustration,
  WeddingRingsSketch,
} from './Illustrations';
import { FloralLaceDivider } from './LaceBorders';
import Countdown from './Countdown';
import WeddingDetails from './WeddingDetails';
import RSVPForm from './RSVPForm';

export default function InvitationCard({ isVisible }) {
  return (
    <main
      id="top"
      className="relative flex min-h-screen w-full justify-center bg-[#181213] px-0 sm:px-4 sm:py-6"
    >
      <motion.article
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className="paper-surface relative w-full max-w-[440px] overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.7)] sm:rounded-[28px]"
      >
        {/* ==================== SINGLE-VIEWPORT FIRST PAGE HERO (FITS 100% ON OPEN) ==================== */}
        <section className="relative flex h-[100dvh] max-h-[860px] min-h-[640px] flex-col justify-between overflow-hidden pt-4 pb-0 text-center">
          {/* Soft Warm Radial Spotlight Behind Hero Content */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 42%, rgba(255, 253, 249, 0.94) 0%, rgba(250, 246, 240, 0.4) 60%, transparent 85%)',
            }}
          />

          {/* Double-Layered Royal Arch Frame & Inner Gold Filigree Border */}
          <div className="pointer-events-none absolute inset-x-3 top-2.5 bottom-14 rounded-t-[175px] border-2 border-[#D2BFA9] shadow-[inset_0_0_36px_rgba(198,178,154,0.3),inset_0_0_0_5px_#FAF6F0,inset_0_0_0_6.5px_#DECBB5]" />

          {/* 3D Pearl Studs Around the Royal Arch */}
          <span className="pearl-bead pointer-events-none absolute top-5 left-6 h-2.5 w-2.5" />
          <span className="pearl-bead pointer-events-none absolute top-5 right-6 h-2.5 w-2.5" />
          <span className="pearl-bead pointer-events-none absolute top-1/2 left-2 h-2 w-2" />
          <span className="pearl-bead pointer-events-none absolute top-1/2 right-2 h-2 w-2" />

          {/* Seamless Non-Overlapping Vertical Stack (Guaranteed to fit in 100dvh) */}
          <div className="relative z-10 mx-auto flex w-full max-w-[375px] flex-1 flex-col items-center justify-evenly px-6 pt-3 pb-1">
            {/* 1. SEAMLESS ROYAL CALLIGRAPHIC URDU SHAYARI & BISMILLAH HEADER (No Clunky Box) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.35, duration: 0.85 }}
              dir="rtl"
              className="w-full px-1 text-center"
            >
              {/* Delicate Gold Crescent & Star Emblem Above Bismillah */}
              <div className="mb-1 flex items-center justify-center gap-2">
                <span className="h-[1px] w-10 bg-gradient-to-r from-transparent to-[#C59B6D]" />
                <svg viewBox="0 0 24 20" className="h-3.5 w-4 fill-[#B8894A]">
                  <path d="M14.5 16.5 A7.5 7.5 0 1 1 14.5 3.5 A6 6 0 1 0 14.5 16.5 Z" />
                  <polygon points="17,7.5 17.8,9.3 19.7,9.5 18.2,10.7 18.6,12.5 17,11.5 15.4,12.5 15.8,10.7 14.3,9.5 16.2,9.3" />
                </svg>
                <span className="h-[1px] w-10 bg-gradient-to-l from-transparent to-[#C59B6D]" />
              </div>

              {/* Bismillah */}
              <p
                style={{
                  fontFamily: "'Noto Nastaliq Urdu', serif",
                  textShadow: '0 1px 1px rgba(255,255,255,0.9)',
                }}
                className="text-[14px] leading-[1.95] font-semibold text-[#581822]"
              >
                {weddingData.islamicBlessing.bismillah}
              </p>

              {/* 2-Line Urdu Shadi Dawat Shayari */}
              <div className="mt-1 space-y-0.5">
                <p
                  style={{
                    fontFamily: "'Noto Nastaliq Urdu', serif",
                    textShadow: '0 1px 0 rgba(255,255,255,0.85)',
                  }}
                  className="text-[11.5px] leading-[2.1] font-normal text-[#4A1C21] sm:text-[12px]"
                >
                  {weddingData.islamicBlessing.urduShayariLine1}
                </p>
                <p
                  style={{
                    fontFamily: "'Noto Nastaliq Urdu', serif",
                    textShadow: '0 1px 0 rgba(255,255,255,0.85)',
                  }}
                  className="text-[11.5px] leading-[2.1] font-normal text-[#4A1C21] sm:text-[12px]"
                >
                  {weddingData.islamicBlessing.urduShayariLine2}
                </p>
              </div>

              {/* Urdu Blessing / Dawat Line */}
              <p
                style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
                className="mt-1 text-[10px] leading-[1.85] text-[#7C5D58]"
              >
                {weddingData.islamicBlessing.urduDawatLine}
              </p>

              {/* Ornamental Gold Filigree Flourish Under Shayari */}
              <div className="mx-auto mt-2 flex max-w-[160px] items-center justify-center gap-2">
                <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#C9B39B]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#B8894A]" />
                <span className="h-1 w-1 rotate-45 bg-[#D5C3AE]" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#B8894A]" />
                <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#C9B39B]" />
              </div>
            </motion.div>

            {/* 2. COUPLE CALLIGRAPHIC NAMES: Gulishta & Asif */}
            <motion.h1
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-script text-[48px] leading-[1.02] text-[#4A1C21] drop-shadow-[0_2px_2px_rgba(255,255,255,0.9)] sm:text-[54px]"
            >
              {weddingData.couple.groom}
              <span className="my-0 flex items-center justify-center gap-2.5 font-serif text-sm italic font-light text-[#8C7365]">
                <span className="h-[1px] w-6 bg-[#D5C3AE]" />
                <span>&amp;</span>
                <span className="h-[1px] w-6 bg-[#D5C3AE]" />
              </span>
              {weddingData.couple.bride}
            </motion.h1>

            {/* 3. WEDDING DATE */}
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.7 }}
              className="font-serif text-[17px] font-medium tracking-[0.22em] text-[#581822]"
            >
              {weddingData.date.displayDots}
            </motion.p>

            {/* 4. VILLA AURELIA ARCHITECTURAL INK SKETCH */}
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.85, duration: 0.8 }}
              className="w-full text-[#4A1C21]"
            >
              <VillaHeroSketch className="mx-auto w-52 sm:w-60" />
            </motion.div>

            {/* 5. VENUE TITLE & CITY + SCROLL HINT */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.0, duration: 0.7 }}
              className="flex flex-col items-center"
            >
              <p className="font-serif text-[22px] leading-tight font-normal text-[#4A1C21]">
                {weddingData.venue.name}
              </p>
              <p className="mt-0.5 text-[9.5px] tracking-[0.28em] text-[#8C7365] uppercase">
                {weddingData.venue.address}
              </p>

              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-1 flex items-center gap-1 text-[#8C7365]/80"
              >
                <ChevronDown className="h-3.5 w-3.5" />
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Scalloped 3D Lace Arch Framing the First Page */}
          <div className="relative z-10 w-full shrink-0">
            <FloralLaceDivider flip />
          </div>
        </section>

        {/* ==================== SWANS INVITATION MESSAGE ==================== */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8 }}
          className="px-7 py-12 text-center"
        >
          <div className="text-[#4A1C21]">
            <SwansIllustration />
          </div>

          {weddingData.invitationText.leadIn && (
            <h2 className="font-serif mt-5 whitespace-pre-line text-3xl leading-snug font-normal text-[#4A1C21]">
              {weddingData.invitationText.leadIn}
            </h2>
          )}

          <p className="mx-auto mt-5 max-w-[320px] text-[13.5px] leading-relaxed font-light text-[#6B5048]">
            {weddingData.invitationText.body}
          </p>
        </motion.section>

        {/* ==================== COUNTDOWN SECTION ==================== */}
        <Countdown />

        {/* ==================== LOCATION, THE DAY, DRESS CODE, TRANSPORT, HOTELS, GIFT ==================== */}
        <WeddingDetails />

        {/* ==================== RSVP SECTION ==================== */}
        <RSVPForm />

        {/* ==================== CLOSING FOOTER SECTION ==================== */}
        <motion.footer
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-6 pt-12 pb-16 text-center"
        >
          <WeddingRingsSketch />

          <p className="font-serif mt-6 text-xl font-normal text-[#5A3E36]">
            {weddingData.footer.message}
          </p>

          <p className="mt-5 text-xs tracking-wide font-light text-[#7C5D58]">
            {weddingData.footer.signOff}
          </p>

          <h2 className="font-serif mt-2 text-4xl font-normal text-[#4A1C21]">
            {weddingData.couple.groom}{' '}
            <span className="font-script text-3xl text-[#8C7365]">&amp;</span>{' '}
            {weddingData.couple.bride}
          </h2>

          <p className="mt-3 text-xs tracking-[0.2em] text-[#7C5D58]">
            {weddingData.date.displayFull}
          </p>

          <p className="mt-12 text-[11px] font-light text-[#8C7365]">
            {weddingData.footer.creditText}{' '}
            <a
              href={weddingData.footer.creditUrl}
              className="underline transition-colors hover:text-[#4A1C21]"
            >
              {weddingData.footer.creditBrand}
            </a>
          </p>
        </motion.footer>
      </motion.article>
    </main>
  );
}