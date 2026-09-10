"use client";

import { useState, type FormEvent } from "react";
import { contact } from "@/lib/content";

const WHATSAPP_NUMBER = contact.phone.replace(/\D/g, "");

const fieldClass =
  "w-full rounded-[4px] border border-brass/40 bg-cream/[0.06] px-3.5 py-2.5 text-[0.92rem] text-cream placeholder:text-cream/40 outline-none transition-colors focus:border-brass focus:bg-cream/[0.1]";

const labelClass =
  "mb-1.5 block text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brass-light";

export function ContactForm() {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState("");
  const [dates, setDates] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const details = [
      `Name: ${name}`,
      guests && `Guests: ${guests}`,
      dates && `Preferred dates: ${dates}`,
      message && `Message: ${message}`,
    ].filter((line): line is string => Boolean(line));

    const lines = [
      "Hello Rawhew Ranch, I'd like to enquire about a stay.",
      "",
      ...details,
    ];

    const text = encodeURIComponent(lines.join("\n"));
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="cf-name" className={labelClass}>
            Name
          </label>
          <input
            id="cf-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor="cf-guests" className={labelClass}>
            Guests
          </label>
          <input
            id="cf-guests"
            value={guests}
            onChange={(e) => setGuests(e.target.value)}
            placeholder="e.g. 2 adults, 1 child"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="cf-dates" className={labelClass}>
          Preferred dates
        </label>
        <input
          id="cf-dates"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          placeholder="e.g. 12 – 14 December"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="cf-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="cf-message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell us what you're interested in: camping, the cottage, a wedding, team building…"
          className={`${fieldClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2.5 rounded-full border border-brass/70 bg-brass/15 px-6 py-2.5 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-cream transition-colors hover:bg-brass/25"
      >
        <IconChat className="h-4 w-4" />
        Send via WhatsApp
      </button>
    </form>
  );
}

function IconChat({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 12a8 8 0 1 1 3.4 6.5L4 20l1.3-3.6A7.96 7.96 0 0 1 4 12Z" />
      <path d="M8.5 11h.01M12 11h.01M15.5 11h.01" />
    </svg>
  );
}
