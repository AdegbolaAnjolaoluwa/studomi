"use client";

import { useState } from "react";
import SectionHead from "./SectionHead";

const faqs = [
  {
    q: "Is Studomi a booking platform?",
    a: "No. Studomi is for discovering and evaluating off-campus hostels — not for booking or paying for one. Reservation and payment handling are not part of the current version.",
  },
  {
    q: "Do I need to create an account to search?",
    a: "You can browse listings without one, but you'll need an account to save searches and to submit or read full resident reviews.",
  },
  {
    q: "Which universities does Studomi support?",
    a: "We're starting with a focused set of universities so listing data stays accurate, then expanding as more hostels and reviews are added.",
  },
  {
    q: 'How is "distance from campus" calculated?',
    a: "Each hostel and university has a set location, and the distance shown is calculated from those coordinates — not a vague estimate from a listing description.",
  },
  {
    q: "Who can leave a review?",
    a: "Reviews are limited to eligible current or past residents, based on the platform's eligibility rules, so feedback reflects real experience rather than hearsay.",
  },
  {
    q: "What do the category ratings mean?",
    a: "Each hostel is rated separately on things like electricity, water supply, security and cleanliness, so you can see exactly where a place is strong or weak instead of one vague overall score.",
  },
  {
    q: "How do I know listing information is current?",
    a: "Every hostel profile shows the date it was last updated, so you always know how recent the information is.",
  },
  {
    q: "Is Studomi free to use?",
    a: "Yes. Studomi is free for students during the beta.",
  },
  {
    q: "Can hostel owners list their own property?",
    a: "Not yet. In this version, listings are added and maintained by platform administrators. Self-service owner accounts are planned for later.",
  },
  {
    q: "When can I join?",
    a: "Studomi is currently in beta for a small group of universities. Join the waitlist and we'll notify you as your campus is added.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="mx-auto max-w-[1180px] px-6 py-[88px]">
      <SectionHead eyebrow="FAQ" title="Questions, answered." />
      <div className="mx-auto max-w-[760px]">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={item.q} className="border-b border-line">
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-[22px] text-left font-body text-[16.5px] font-bold"
              >
                {item.q}
                <span
                  className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent/[0.14] text-base text-accent-ink transition-transform duration-200 ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-250 ease-in-out"
                style={{ maxHeight: open ? "240px" : "0px" }}
              >
                <p className="max-w-[640px] pb-[22px] text-[14.5px] text-ink-soft">
                  {item.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <p className="mt-9 text-center text-[14.5px] text-ink-soft">
        Something else? Email{" "}
        <a href="mailto:hello@studomi.app" className="font-bold text-ink underline">
          hello@studomi.app
        </a>
      </p>
    </section>
  );
}
