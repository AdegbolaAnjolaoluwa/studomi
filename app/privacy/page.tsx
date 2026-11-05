import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy — Studomi",
  description: "How Studomi handles student and resident data.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-[760px] px-6 py-20">
      <Link
        href="/"
        className="mb-10 inline-block text-sm font-semibold text-ink-soft hover:text-ink"
      >
        ← Back to Studomi
      </Link>

      <h1 className="font-display text-[34px] font-extrabold tracking-tight sm:text-[42px]">
        Privacy
      </h1>
      <p className="mt-2 text-sm text-ink-soft">Last updated November 2026</p>

      <div className="mt-10 flex flex-col gap-8 text-[15.5px] leading-relaxed text-ink-soft">
        <p>
          Studomi is a student accommodation discovery and evaluation
          platform, currently in beta as a final-year university project.
          This page explains, in plain terms, what information the platform
          collects and how it is used. Because Studomi is still early-stage,
          this policy will be expanded as real accounts, listings, and
          reviews go live.
        </p>

        <section>
          <h2 className="mb-2 text-[18px] font-bold text-ink">
            What we collect
          </h2>
          <p>
            When you create an account, we collect basic information needed
            to identify you as a student and, where relevant, as a resident
            eligible to leave a review: name, email address, and your
            selected university. If you submit a review, we store the review
            text, category ratings, and the hostel it relates to.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-[18px] font-bold text-ink">
            How it&rsquo;s used
          </h2>
          <p>
            Account information is used to let you search listings, save
            preferences, and submit reviews. Review content is shown publicly
            on hostel profiles, attributed as a resident review rather than
            with your personal account details. Aggregate category scores are
            computed from all reviews for a hostel and shown with the number
            of reviews behind them.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-[18px] font-bold text-ink">
            What we don&rsquo;t do
          </h2>
          <p>
            Studomi does not sell personal data to third parties. We don&rsquo;t
            process payments or handle financial transactions between
            students and hostels — the platform is for discovery and
            evaluation only.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-[18px] font-bold text-ink">
            Hostel listing data
          </h2>
          <p>
            Hostel information (location, pricing, amenities, photos) is
            added and maintained by platform administrators. Each listing
            shows the date it was last updated, so information age is always
            visible rather than implied as current.
          </p>
        </section>

        <section>
          <h2 className="mb-2 text-[18px] font-bold text-ink">Questions</h2>
          <p>
            This is a student project and the policy above reflects current
            practice, not a finished legal document. If you have questions
            about data handling, reach out at{" "}
            <a href="mailto:hello@studomi.app" className="font-semibold text-ink underline">
              hello@studomi.app
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
