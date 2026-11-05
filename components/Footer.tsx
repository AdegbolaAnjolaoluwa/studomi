import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 pb-10 pt-14">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 font-display text-lg font-extrabold">
            <Image
              src="/brand/studomi-icon.png"
              alt="Studomi"
              width={26}
              height={26}
              className="flex-shrink-0 rounded-[8px]"
            />
            Studomi
          </div>
          <a
            href="#how"
            className="rounded-full bg-[rgba(12,42,32,0.06)] px-[18px] py-2.5 text-sm font-bold transition hover:-translate-y-px"
          >
            See how it works
          </a>
        </div>

        <p className="max-w-[600px] text-[13.5px] text-ink-soft">
          Studomi is a student accommodation discovery and evaluation
          platform. It does not manage bookings, payments or reservations,
          and does not act as a letting agent.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-between gap-4 text-[13px] text-ink-soft">
          <span>
            Built for university students ·{" "}
            <a href="mailto:hello@studomi.app" className="font-bold">
              hello@studomi.app
            </a>
          </span>
          <span>© 2026 Studomi</span>
          <div className="flex gap-5">
            <a href="#trust" className="font-semibold hover:underline">
              Trust
            </a>
            <a href="#faq" className="font-semibold hover:underline">
              FAQ
            </a>
            <a href="#" className="font-semibold hover:underline">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
