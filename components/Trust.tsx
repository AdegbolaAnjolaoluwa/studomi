const points = [
  "Only eligible residents can submit reviews — reviews aren't open to anonymous visitors.",
  "Every hostel profile shows the date its information was last updated.",
  "Category averages are shown with the number of reviews behind them, so one opinion never looks like consensus.",
  "Administrators review and moderate submitted content before it stays live.",
  "Unverified details are never presented as confirmed facts.",
];

const ratings = [
  { label: "Electricity", value: "4.6 ★" },
  { label: "Water", value: "4.8 ★" },
  { label: "Security", value: "4.9 ★" },
  { label: "Cleanliness", value: "4.3 ★" },
];

export default function Trust() {
  return (
    <section id="trust" className="mx-auto max-w-[1180px] px-6 py-[88px]">
      <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="text-[13px] font-bold uppercase tracking-wide text-ink-soft">
            Trust &amp; data
          </span>
          <h2 className="mt-3 font-display text-[26px] font-extrabold sm:text-[32px] lg:text-[38px]">
            Information you can actually rely on.
          </h2>
          <ul className="mt-7 flex flex-col gap-4">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-[15px] text-ink-soft">
                <span
                  className="relative top-0.5 h-5 w-5 flex-shrink-0 rounded-full bg-accent"
                  style={{
                    maskImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z'/%3E%3C/svg%3E\")",
                    WebkitMaskImage:
                      "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='black' d='M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z'/%3E%3C/svg%3E\")",
                    maskSize: "cover",
                    WebkitMaskSize: "cover",
                  }}
                />
                {p}
              </li>
            ))}
          </ul>
          <a
            href="#faq"
            className="mt-6 inline-block border-b-2 border-accent pb-0.5 text-[14.5px] font-bold"
          >
            Read more in the FAQ →
          </a>
        </div>

        <div className="rounded-[20px] border border-line bg-white p-6 shadow-[0_20px_50px_rgba(16,35,28,0.08)]">
          <div className="mb-3.5 flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-ink-soft">
            <span className="inline-block h-4 w-4 rounded bg-accent" />
            Rating summary · Live
          </div>
          {ratings.map((r) => (
            <div
              key={r.label}
              className="flex items-center justify-between border-b border-line py-2.5 text-[14.5px]"
            >
              <span>{r.label}</span>
              <strong className="font-bold">{r.value}</strong>
            </div>
          ))}
          <button className="mt-1.5 w-full rounded-xl bg-accent py-3.5 text-[14.5px] font-extrabold text-accent-ink">
            View all 27 reviews
          </button>
          <p className="mt-3 text-center text-xs text-ink-soft">
            Averages shown with review count for context.
          </p>
        </div>
      </div>
    </section>
  );
}
