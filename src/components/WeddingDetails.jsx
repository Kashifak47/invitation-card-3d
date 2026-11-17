import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Copy, X } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import {
  VillaMedallionIllustration,
  PearlGarlandDivider,
  TimelineWatermarkIcon,
  BanquetTableSketch,
  CoupleAttireSketch,
  VintageBusSketch,
  BalconyWindowSketch,
  CherubToilePattern,
} from './Illustrations';
import { FloralLaceDivider, DressCodeOrnateFrame } from './LaceBorders';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

export default function WeddingDetails() {
  const [copiedIban, setCopiedIban] = useState(false);
  const [actionNotice, setActionNotice] = useState(null);

  /**
   * 1. GET DIRECTIONS CLICK HANDLER
   * Add your Google Maps URL in weddingData.venue.mapsUrl or custom logic here.
   */
  const handleGetDirections = () => {
    if (weddingData.venue.mapsUrl) {
      window.open(weddingData.venue.mapsUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    // Ready for your Google Maps URL or custom logic:
    setActionNotice({
      title: weddingData.venue.name,
      subtitle: weddingData.venue.fullStreetAddress,
      detail: 'Set weddingData.venue.mapsUrl in src/config/weddingData.js to open Google Maps directly.',
    });
  };

  /**
   * 2. VIEW PICK-UP POINT CLICK HANDLER
   * Add your pickup data or map URL in weddingData.transportation.pickupMapUrl.
   */
  const handleViewPickupPoint = () => {
    if (weddingData.transportation.pickupMapUrl) {
      window.open(weddingData.transportation.pickupMapUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    const info = weddingData.transportation.pickupPointDetails;
    setActionNotice({
      title: `Pick-Up Point: ${info.locationName}`,
      subtitle: `Departure Time: ${info.departureTime}`,
      detail: info.notes,
    });
  };

  /**
   * 3. BOOK YOUR STAY CLICK HANDLER
   * Add your booking URL or custom functionality per hotel here.
   */
  const handleBookStay = (hotel) => {
    if (hotel.bookingUrl) {
      window.open(hotel.bookingUrl, '_blank', 'noopener,noreferrer');
      return;
    }
    if (navigator.clipboard && hotel.discountCode) {
      navigator.clipboard.writeText(hotel.discountCode);
    }
    setActionNotice({
      title: hotel.name,
      subtitle: `Recommended Stay: ${hotel.recommendedStay}`,
      detail: `Guest rate code "${hotel.discountCode}" copied! Add hotel.bookingUrl or custom booking logic in WeddingDetails.jsx.`,
    });
  };

  const handleCopyIban = () => {
    navigator.clipboard?.writeText(weddingData.gift.iban);
    setCopiedIban(true);
    setTimeout(() => setCopiedIban(false), 2500);
  };

  return (
    <>
      {/* ==================== LOCATION SECTION (00:18 - 00:25) ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="px-7 pt-12 pb-8 text-center"
      >
        <h2 className="font-serif text-5xl font-normal text-[#4A1C21]">
          Location
        </h2>
        <p className="font-script mt-3 text-4xl text-[#5A3E36]">
          {weddingData.venue.name}
        </p>
        <p className="mt-1 text-xs tracking-[0.25em] text-[#8C7365] uppercase">
          {weddingData.venue.address}
        </p>

        <div className="mx-auto mt-6 max-w-[330px] space-y-4 text-[13px] leading-relaxed font-light text-[#5E453E]">
          {weddingData.venue.descriptionParagraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* Ornate Oval Lace Medallion with Villa Courtyard Sketch */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-8"
        >
          <VillaMedallionIllustration />
        </motion.div>

        <motion.button
          type="button"
          onClick={handleGetDirections}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="inline-block w-full max-w-[280px] cursor-pointer rounded-full border border-[#8E7668]/60 bg-transparent px-8 py-3.5 text-[11px] tracking-[0.22em] text-[#4A1C21] uppercase transition-all hover:border-[#4A1C21] hover:bg-[#4A1C21] hover:text-[#FAF6F0]"
        >
          GET DIRECTIONS
        </motion.button>
      </motion.section>

      {/* ==================== THE DAY TIMELINE SECTION (00:25 - 00:32) ==================== */}
      <section className="pt-4 pb-8">
        <PearlGarlandDivider />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="px-6 text-center"
        >
          <h2 className="font-serif text-5xl font-normal text-[#4A1C21]">
            {weddingData.timeline.title}
          </h2>
          <p className="mt-3 whitespace-pre-line text-[13px] leading-relaxed font-light text-[#7C5D58]">
            {weddingData.timeline.subtitle}
          </p>
        </motion.div>

        {/* Central Vertical Timeline with Heart Nodes & Faint Left Watermarks */}
        <div className="relative mx-auto mt-10 max-w-[370px] px-4">
          <div className="absolute top-2 bottom-2 left-1/2 w-[1px] -translate-x-1/2 bg-[#7A4449]" />

          <div className="space-y-11">
            {weddingData.timeline.events.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ delay: idx * 0.09, duration: 0.65 }}
                className="relative grid grid-cols-[1fr_24px_1fr] items-start"
              >
                {/* Left Column: Faint Sketch Watermark + Time */}
                <div className="relative flex items-center justify-end pr-3 pt-1 text-right">
                  <div className="pointer-events-none absolute -top-2 left-2 opacity-80">
                    <TimelineWatermarkIcon type={item.iconType} />
                  </div>
                  <span className="font-serif relative z-10 text-2xl font-normal text-[#5E403B]">
                    {item.time}
                  </span>
                </div>

                {/* Center Node: Tiny Burgundy Heart */}
                <div className="flex justify-center pt-2.5">
                  <svg width="10" height="10" viewBox="0 0 12 12" className="fill-[#581822]">
                    <path d="M6 10.5 C6 10.5 1 7.2 1 3.8 C1 2.1 2.3 1 3.8 1 C4.8 1 5.6 1.5 6 2.3 C6.4 1.5 7.2 1 8.2 1 C9.7 1 11 2.1 11 3.8 C11 7.2 6 10.5 6 10.5 Z" />
                  </svg>
                </div>

                {/* Right Column: Title & Description */}
                <div className="pl-3 text-left">
                  <h3 className="font-serif text-sm font-medium tracking-[0.16em] text-[#4A1C21] uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[11.5px] leading-relaxed font-light text-[#7C5D58]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Full-Width Candlelit Banquet Table Sketch */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-8"
        >
          <BanquetTableSketch />
        </motion.div>
      </section>

      {/* ==================== ENHANCED ANIMATED DRESS CODE SECTION (00:32 - 00:40) ==================== */}
      <section className="px-4 py-10 text-center">
        <DressCodeOrnateFrame>
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="font-serif text-4xl font-normal text-[#4A1C21] sm:text-5xl"
          >
            {weddingData.dressCode.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12, duration: 0.65 }}
            className="font-serif mt-1.5 text-2xl font-normal text-[#5E403B]"
          >
            {weddingData.dressCode.subtitle}
          </motion.p>

          {/* Animated Bride & Groom Sketch with Gentle Breathing Motion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 16 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.22, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="my-7"
          >
            <motion.div
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <CoupleAttireSketch />
            </motion.div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.34, duration: 0.7 }}
            className="mx-auto max-w-[260px] text-[12.5px] leading-relaxed font-light text-[#6B5048]"
          >
            {weddingData.dressCode.description}
          </motion.p>
        </DressCodeOrnateFrame>
      </section>

      {/* ==================== TRANSPORTATION SECTION (00:40 - 00:46) ==================== */}
      <section className="burgundy-surface relative text-[#FAF6F0]">
        <FloralLaceDivider />
        <CherubToilePattern />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          className="relative z-10 px-7 py-10 text-center"
        >
          <VintageBusSketch />

          <h2 className="font-serif mt-4 text-5xl font-normal text-[#FAF6F0]">
            {weddingData.transportation.title}
          </h2>

          <div className="mx-auto mt-6 max-w-[320px] space-y-4 text-[13px] leading-relaxed font-light text-[#FAF6F0]/90">
            {weddingData.transportation.paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={handleViewPickupPoint}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="mt-8 inline-block w-full max-w-[280px] cursor-pointer rounded-full border border-[#FAF6F0]/55 bg-transparent px-8 py-3.5 text-[11px] tracking-[0.22em] text-[#FAF6F0] uppercase transition-all hover:bg-[#FAF6F0] hover:text-[#581822]"
          >
            {weddingData.transportation.buttonText}
          </motion.button>
        </motion.div>

        <FloralLaceDivider flip />
      </section>

      {/* ==================== WHERE TO STAY SECTION (00:46 - 00:56) ==================== */}
      <section className="px-6 py-12 text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
        >
          <BalconyWindowSketch />

          <h2 className="font-serif mt-4 text-5xl font-normal text-[#4A1C21]">
            {weddingData.accommodations.title}
          </h2>
          <p className="mx-auto mt-3 max-w-[320px] text-[13px] leading-relaxed font-light text-[#6B5048]">
            {weddingData.accommodations.subtitle}
          </p>
        </motion.div>

        <div className="mt-12 space-y-12">
          {weddingData.accommodations.hotels.map((hotel) => (
            <motion.div
              key={hotel.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={fadeUp}
              className="relative mx-auto max-w-[360px] pt-6"
            >
              <div className="pointer-events-none absolute -top-2 left-1/2 z-20 -translate-x-1/2">
                <div className="flex h-14 w-12 items-center justify-center rounded-[50%] border border-[#D3C4B3] bg-[#FAF6F0] font-serif text-lg text-[#7A6254] shadow-sm">
                  {hotel.numeral}
                </div>
              </div>

              <div className="hotel-card-chamfer border border-[#C9B7A6] bg-[#F5EFE6]/90 px-6 pt-12 pb-9 shadow-[0_8px_24px_rgba(74,28,33,0.06)]">
                <h3 className="font-serif text-3xl font-normal text-[#4A1C21]">
                  {hotel.name}
                </h3>

                <div className="mt-5 space-y-2 text-[11px] tracking-[0.12em] text-[#7A5E54]">
                  <p>
                    <span className="uppercase opacity-75">RECOMMENDED STAY</span>
                    <span className="mx-1.5">·</span>
                    <span className="tracking-normal">{hotel.recommendedStay}</span>
                  </p>
                  <p>
                    <span className="uppercase opacity-75">WEDDING GUEST RATE</span>
                    <span className="mx-1.5">·</span>
                    <span className="tracking-normal">{hotel.guestRateCode}</span>
                  </p>
                  <p>
                    <span className="uppercase opacity-75">PARKING</span>
                    <span className="mx-1.5">·</span>
                    <span className="tracking-normal">{hotel.parking}</span>
                  </p>
                </div>

                <p className="mx-auto mt-5 max-w-[270px] text-[12.5px] leading-relaxed font-light text-[#6B5048]">
                  {hotel.description}
                </p>

                <motion.button
                  type="button"
                  onClick={() => handleBookStay(hotel)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 inline-block w-full max-w-[240px] cursor-pointer rounded-full border border-[#8E7668]/60 bg-transparent px-6 py-3 text-[10.5px] tracking-[0.2em] text-[#4A1C21] uppercase transition-all hover:border-[#4A1C21] hover:bg-[#4A1C21] hover:text-[#FAF6F0]"
                >
                  BOOK YOUR STAY
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==================== WEDDING GIFT SECTION (00:56 - 01:00) ==================== */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={fadeUp}
        className="pt-6 pb-12 text-center"
      >
        <h2 className="font-serif mb-6 text-5xl font-normal text-[#4A1C21]">
          {weddingData.gift.title}
        </h2>

        <div className="relative mx-auto max-w-[400px] border-y border-[#DED2C3] bg-[#FDFBF8] px-6 py-12 shadow-[0_8px_28px_rgba(74,28,33,0.06)]">
          <h3 className="font-serif whitespace-pre-line text-3xl leading-snug font-normal text-[#4A1C21]">
            {weddingData.gift.headline}
          </h3>

          <p className="mx-auto mt-4 max-w-[280px] text-[12.5px] leading-relaxed font-light text-[#6B5048]">
            {weddingData.gift.description}
          </p>

          <button
            type="button"
            onClick={handleCopyIban}
            className="mt-5 inline-flex cursor-pointer items-center gap-2 rounded-full border border-[#D8CBB8] bg-[#FAF6F0] px-4 py-2 text-[11.5px] tracking-wider text-[#4A1C21] transition-colors hover:border-[#4A1C21]"
          >
            <span>{weddingData.gift.iban}</span>
            {copiedIban ? (
              <Check className="h-3.5 w-3.5 text-emerald-700" />
            ) : (
              <Copy className="h-3.5 w-3.5 opacity-60" />
            )}
          </button>
          {copiedIban && (
            <p className="mt-1.5 text-[10px] tracking-widest text-[#581822] uppercase">
              IBAN Copied to Clipboard
            </p>
          )}
        </div>
      </motion.section>

      {/* ==================== INTERACTIVE CLICK PREVIEW MODAL (For Get Directions / Pick-up Point / Book Stay) ==================== */}
      <AnimatePresence>
        {actionNotice && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActionNotice(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
          >
            <motion.div
              initial={{ scale: 0.92, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="paper-surface relative w-full max-w-[360px] rounded-2xl border border-[#D4C4B0] p-6 text-center shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setActionNotice(null)}
                aria-label="Close modal"
                className="absolute top-3.5 right-3.5 cursor-pointer rounded-full p-1 text-[#7C5D58] hover:text-[#4A1C21]"
              >
                <X className="h-4 w-4" />
              </button>
              <h4 className="font-serif text-2xl text-[#4A1C21]">{actionNotice.title}</h4>
              <p className="mt-1.5 text-xs font-medium tracking-wider text-[#581822] uppercase">
                {actionNotice.subtitle}
              </p>
              <p className="mt-3 text-xs leading-relaxed font-light text-[#6B5048]">
                {actionNotice.detail}
              </p>
              <button
                type="button"
                onClick={() => setActionNotice(null)}
                className="mt-5 cursor-pointer rounded-full border border-[#4A1C21] px-6 py-2 text-[10px] tracking-[0.2em] text-[#4A1C21] uppercase transition hover:bg-[#4A1C21] hover:text-[#FAF6F0]"
              >
                CLOSE
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}