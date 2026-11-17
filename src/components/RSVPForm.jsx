import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Minus, Plus, CheckCircle2, Loader2 } from 'lucide-react';
import { weddingData } from '../config/weddingData';
import { CherubToilePattern, HeartLocketIllustration } from './Illustrations';
import { FloralLaceDivider } from './LaceBorders';

export default function RSVPForm({ onRSVPSubmit }) {
  const [formData, setFormData] = useState({
    fullName: '',
    attending: 'accepts', // 'accepts' | 'declines'
    plusOne: 'just_me',   // 'yes' | 'just_me'
    childrenCount: 0,
    dietaryGuest1: '',
    dietaryGuest2: '',
    note: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submittedPayload, setSubmittedPayload] = useState(null);

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    if (submitError) {
      setSubmitError('');
    }
  };

  const handleDecrementChildren = () => {
    setFormData((prev) => ({
      ...prev,
      childrenCount: Math.max(0, prev.childrenCount - 1),
    }));
  };

  const handleIncrementChildren = () => {
    setFormData((prev) => ({
      ...prev,
      childrenCount: Math.min(10, prev.childrenCount + 1),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedName = formData.fullName.trim();
    if (!trimmedName) {
      setSubmitError('Please enter your full name before sending your RSVP.');
      return;
    }

    setIsSubmitting(true);
    setSubmitError('');

    const payload = {
      id: `rsvp_${Date.now()}`,
      fullName: trimmedName,
      attending: formData.attending,
      bringingPlusOne: formData.plusOne === 'yes',
      childrenCount: formData.childrenCount,
      dietaryRequirements: {
        guest1: formData.dietaryGuest1.trim(),
        guest2: formData.plusOne === 'yes' ? formData.dietaryGuest2.trim() : '',
      },
      noteForCouple: formData.note.trim(),
      submittedAt: new Date().toISOString(),
    };

    try {
      // 1. Save locally so you can inspect submissions in DevTools -> Application -> Local Storage
      try {
        const existing = JSON.parse(
          localStorage.getItem('wedding_rsvp_submissions') || '[]'
        );
        existing.push(payload);
        localStorage.setItem('wedding_rsvp_submissions', JSON.stringify(existing));
      } catch {
        // Ignore storage errors in private browsing
      }

      // 2. Call optional parent callback prop if provided
      if (typeof onRSVPSubmit === 'function') {
        await onRSVPSubmit(payload);
      }

      // 3. Send POST request to your backend server when weddingData.rsvp.apiEndpoint is set
      if (weddingData.rsvp.apiEndpoint && weddingData.rsvp.apiEndpoint.trim() !== '') {
        const response = await fetch(weddingData.rsvp.apiEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error(`Server returned status ${response.status}`);
        }
      } else {
        // Smooth confirmation feedback when testing without backend URL
        await new Promise((resolve) => setTimeout(resolve, 450));
      }

      setSubmittedPayload(payload);
    } catch (error) {
      setSubmitError(
        error?.message || 'Could not submit RSVP. Please check your connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="rsvp-section" className="burgundy-surface relative z-20 text-[#FAF6F0]">
      <FloralLaceDivider />
      <CherubToilePattern />

      <div className="pointer-events-auto relative z-30 mx-auto max-w-[380px] px-6 py-10">
        <div className="text-center">
          <HeartLocketIllustration />

          <h2 className="font-serif mt-2 text-5xl font-normal tracking-wide text-[#FAF6F0]">
            {weddingData.rsvp.title}
          </h2>

          <p className="mx-auto mt-4 max-w-[320px] text-[12.5px] leading-relaxed font-light text-[#FAF6F0]/90">
            {weddingData.rsvp.description}
          </p>
        </div>

        {submittedPayload ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="mt-8 rounded-2xl border border-[#FAF6F0]/40 bg-[#FAF6F0]/10 p-7 text-center backdrop-blur-xs"
          >
            <CheckCircle2 className="mx-auto h-11 w-11 text-[#FAF6F0]" />
            <h3 className="font-serif mt-3 text-3xl text-[#FAF6F0]">
              Thank You, {submittedPayload.fullName}!
            </h3>
            <p className="mt-2 text-xs leading-relaxed font-light text-[#FAF6F0]/90">
              {submittedPayload.attending === 'accepts'
                ? 'Your RSVP has been confirmed. We cannot wait to celebrate with you!'
                : 'Thank you for letting us know. You will be dearly missed!'}
            </p>

            <div className="mt-4 rounded-xl border border-[#FAF6F0]/20 bg-black/15 p-3 text-left text-[11px] leading-relaxed text-[#FAF6F0]/85">
              <p>
                <strong>Status:</strong>{' '}
                {submittedPayload.attending === 'accepts'
                  ? 'Joyfully Accepts'
                  : 'Regretfully Declines'}
              </p>
              <p>
                <strong>Plus One (+1):</strong>{' '}
                {submittedPayload.bringingPlusOne ? 'Yes' : 'Just me'}
              </p>
              <p>
                <strong>Children:</strong> {submittedPayload.childrenCount}
              </p>
              {submittedPayload.dietaryRequirements.guest1 && (
                <p>
                  <strong>Dietary (Guest 1):</strong>{' '}
                  {submittedPayload.dietaryRequirements.guest1}
                </p>
              )}
              {submittedPayload.dietaryRequirements.guest2 && (
                <p>
                  <strong>Dietary (Guest 2):</strong>{' '}
                  {submittedPayload.dietaryRequirements.guest2}
                </p>
              )}
            </div>

            <button
              type="button"
              onClick={() => setSubmittedPayload(null)}
              className="mt-5 cursor-pointer rounded-full border border-[#FAF6F0]/50 px-6 py-2 text-[10.5px] tracking-[0.2em] text-[#FAF6F0] uppercase transition hover:bg-[#FAF6F0] hover:text-[#581822]"
            >
              Edit RSVP
            </button>
          </motion.div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="pointer-events-auto relative z-30 mt-8 space-y-6 text-left"
          >
            {/* 1. Your Name */}
            <div>
              <label
                htmlFor="rsvp-full-name"
                className="block text-[13px] font-normal text-[#FAF6F0]"
              >
                Your Name
              </label>
              <input
                id="rsvp-full-name"
                name="fullName"
                type="text"
                autoComplete="name"
                value={formData.fullName}
                onChange={(e) => handleFieldChange('fullName', e.target.value)}
                placeholder="Your full name"
                className="rsvp-input mt-2 block w-full rounded-xl px-4 py-3 text-sm"
              />
            </div>

            {/* 2. Will you be attending? */}
            <fieldset>
              <legend className="block text-[13px] font-normal text-[#FAF6F0]">
                Will you be attending?
              </legend>
              <div className="mt-3 space-y-3">
                <label className="flex cursor-pointer items-center gap-3 text-[13px] font-light select-none">
                  <input
                    type="radio"
                    name="attending"
                    value="accepts"
                    checked={formData.attending === 'accepts'}
                    onChange={() => handleFieldChange('attending', 'accepts')}
                    className="sr-only"
                  />
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition ${
                      formData.attending === 'accepts'
                        ? 'border-[#FAF6F0] bg-[#FAF6F0]'
                        : 'border-[#FAF6F0]/65 bg-transparent'
                    }`}
                  >
                    {formData.attending === 'accepts' && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#581822]" />
                    )}
                  </span>
                  <span>Joyfully accepts</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 text-[13px] font-light select-none">
                  <input
                    type="radio"
                    name="attending"
                    value="declines"
                    checked={formData.attending === 'declines'}
                    onChange={() => handleFieldChange('attending', 'declines')}
                    className="sr-only"
                  />
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition ${
                      formData.attending === 'declines'
                        ? 'border-[#FAF6F0] bg-[#FAF6F0]'
                        : 'border-[#FAF6F0]/65 bg-transparent'
                    }`}
                  >
                    {formData.attending === 'declines' && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#581822]" />
                    )}
                  </span>
                  <span>Regretfully declines</span>
                </label>
              </div>
            </fieldset>

            {/* 3. Will you be bringing a +1? */}
            <fieldset>
              <legend className="block text-[13px] font-normal text-[#FAF6F0]">
                Will you be bringing a +1?
              </legend>
              <div className="mt-3 space-y-3">
                <label className="flex cursor-pointer items-center gap-3 text-[13px] font-light select-none">
                  <input
                    type="radio"
                    name="plusOne"
                    value="yes"
                    checked={formData.plusOne === 'yes'}
                    onChange={() => handleFieldChange('plusOne', 'yes')}
                    className="sr-only"
                  />
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition ${
                      formData.plusOne === 'yes'
                        ? 'border-[#FAF6F0] bg-[#FAF6F0]'
                        : 'border-[#FAF6F0]/65 bg-transparent'
                    }`}
                  >
                    {formData.plusOne === 'yes' && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#581822]" />
                    )}
                  </span>
                  <span>Yes, with pleasure</span>
                </label>

                <label className="flex cursor-pointer items-center gap-3 text-[13px] font-light select-none">
                  <input
                    type="radio"
                    name="plusOne"
                    value="just_me"
                    checked={formData.plusOne === 'just_me'}
                    onChange={() => handleFieldChange('plusOne', 'just_me')}
                    className="sr-only"
                  />
                  <span
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border transition ${
                      formData.plusOne === 'just_me'
                        ? 'border-[#FAF6F0] bg-[#FAF6F0]'
                        : 'border-[#FAF6F0]/65 bg-transparent'
                    }`}
                  >
                    {formData.plusOne === 'just_me' && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#581822]" />
                    )}
                  </span>
                  <span>Just me</span>
                </label>
              </div>
            </fieldset>

            {/* 4. Children Stepper Counter (- No children +) */}
            <div>
              <span className="block text-[13px] font-normal text-[#FAF6F0]">
                Children
              </span>
              <div className="mt-2.5 flex max-w-[260px] items-center justify-between">
                <button
                  type="button"
                  onClick={handleDecrementChildren}
                  aria-label="Decrease children count"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#FAF6F0]/40 text-[#FAF6F0] transition hover:border-[#FAF6F0] active:scale-95"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>

                <span className="text-[13px] font-light text-[#FAF6F0] select-none">
                  {formData.childrenCount === 0
                    ? 'No children'
                    : `${formData.childrenCount} ${
                        formData.childrenCount === 1 ? 'child' : 'children'
                      }`}
                </span>

                <button
                  type="button"
                  onClick={handleIncrementChildren}
                  aria-label="Increase children count"
                  className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-[#FAF6F0]/40 text-[#FAF6F0] transition hover:border-[#FAF6F0] active:scale-95"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>

            {/* 5. Dietary Requirements */}
            <div>
              <label
                htmlFor="rsvp-dietary-guest1"
                className="block text-[13px] font-normal text-[#FAF6F0]"
              >
                Dietary Requirements
              </label>
              <span className="mt-1 block text-[10px] tracking-[0.16em] text-[#FAF6F0]/70 uppercase">
                GUEST 1
              </span>
              <input
                id="rsvp-dietary-guest1"
                name="dietaryGuest1"
                type="text"
                value={formData.dietaryGuest1}
                onChange={(e) => handleFieldChange('dietaryGuest1', e.target.value)}
                placeholder="Allergies or dietary requirements"
                className="rsvp-input mt-1.5 block w-full rounded-xl px-4 py-3 text-sm"
              />

              {formData.plusOne === 'yes' && (
                <div className="mt-3">
                  <label
                    htmlFor="rsvp-dietary-guest2"
                    className="block text-[10px] tracking-[0.16em] text-[#FAF6F0]/70 uppercase"
                  >
                    GUEST 2 (+1)
                  </label>
                  <input
                    id="rsvp-dietary-guest2"
                    name="dietaryGuest2"
                    type="text"
                    value={formData.dietaryGuest2}
                    onChange={(e) => handleFieldChange('dietaryGuest2', e.target.value)}
                    placeholder="Guest +1 allergies or dietary requirements"
                    className="rsvp-input mt-1.5 block w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>
              )}
            </div>

            {/* 6. A Note for the Couple */}
            <div>
              <label
                htmlFor="rsvp-couple-note"
                className="block text-[13px] font-normal text-[#FAF6F0]"
              >
                A Note for the Couple
              </label>
              <textarea
                id="rsvp-couple-note"
                name="note"
                rows={3}
                value={formData.note}
                onChange={(e) => handleFieldChange('note', e.target.value)}
                placeholder="Leave us a little message, if you’d like."
                className="rsvp-input mt-2 block w-full rounded-xl px-4 py-3 text-sm"
              />
            </div>

            {submitError && (
              <p className="rounded-lg border border-rose-300/40 bg-rose-950/40 px-3 py-2 text-center text-xs text-rose-100">
                {submitError}
              </p>
            )}

            {/* 7. SEND RSVP Button */}
            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full max-w-[280px] cursor-pointer items-center justify-center gap-2 rounded-full border border-[#FAF6F0]/60 bg-transparent px-8 py-3.5 text-[11px] tracking-[0.22em] text-[#FAF6F0] uppercase transition-all hover:bg-[#FAF6F0] hover:text-[#581822] active:scale-98 disabled:opacity-60"
              >
                {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
                <span>{isSubmitting ? 'SENDING RSVP...' : 'SEND RSVP'}</span>
              </button>
            </div>
          </form>
        )}
      </div>

      <FloralLaceDivider flip />
    </section>
  );
}