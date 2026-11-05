export default function Hero() {
  return (
    <section className="mx-auto max-w-[1280px] px-6 pb-16 pt-24 sm:pb-20 sm:pt-28 lg:pb-28 lg:pt-36">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
        <div className="text-center lg:text-left">
          <h1 className="font-display text-[54px] font-extrabold leading-[0.96] tracking-[-0.02em] sm:text-[76px] sm:leading-[0.98] sm:tracking-tight lg:text-[96px]">
            Find your place.
            <br />
            Know what to{" "}
            <span className="inline-block rounded-[14px] bg-accent px-[0.15em]">
              expect.
            </span>
          </h1>

          <p className="mx-auto mt-9 max-w-[560px] text-xl text-ink-soft sm:text-[22px] lg:mx-0">
            Studomi helps university students find off-campus hostels near
            their school, compare real distances and prices, and read
            structured reviews from residents who actually lived there.
          </p>

          <div className="mt-11 flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="#how"
              className="rounded-full border border-accent bg-white px-[32px] py-4 text-[16px] font-bold text-black transition hover:-translate-y-px"
            >
              See how it works →
            </a>
            <a
              href="#listings"
              className="rounded-full border border-line bg-white px-[32px] py-4 text-[16px] font-bold transition hover:-translate-y-px"
            >
              Explore listings
            </a>
          </div>

          <p className="mt-6 text-base text-ink-soft">
            Built for one university at a time, starting in Abuja with{" "}
            <b className="text-ink">Nile University and Baze University</b>.
          </p>
          <p className="mt-2 text-sm text-ink-soft">
            Hostel data verified by admins · Reviews from real residents ·
            Free for students
          </p>
        </div>

        <Ledger />
      </div>
    </section>
  );
}

function Ledger() {
  const rows = [
    ["Distance to campus", "1.2 km"],
    ["Annual rent", "₦380,000"],
    ["Room type", "Self-contain"],
    ["Electricity", "4.6 / 5"],
    ["Water supply", "4.8 / 5"],
    ["Security", "4.9 / 5"],
    ["Cleanliness", "4.3 / 5"],
  ];

  return (
    <div className="mx-auto w-full max-w-[420px] self-start overflow-hidden rounded-[24px] border border-line bg-card shadow-[0_30px_70px_rgba(16,35,28,0.12)] lg:mx-0 lg:max-w-none">
      <div className="flex items-center justify-between border-b border-line bg-white px-7 py-6">
        <div>
          <div className="font-display text-[22px] font-extrabold text-black">
            Sunview Lodge
          </div>
          <div className="mt-1 text-[13.5px] text-black">
            Nile University, Abuja
          </div>
        </div>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent text-base text-accent-ink">
          ✓
        </span>
      </div>

      <dl className="tnum text-[15px]">
        {rows.map(([label, value], i) => (
          <div
            key={label}
            className={`flex items-center justify-between px-7 py-4 ${
              i !== rows.length - 1 ? "border-b border-line" : ""
            }`}
          >
            <dt className="text-ink-soft">{label}</dt>
            <dd className="font-bold">{value}</dd>
          </div>
        ))}
      </dl>

      <div className="border-t border-line bg-[#F6F4EC] px-7 py-6">
        <p className="text-[15px] leading-snug text-ink-soft">
          &ldquo;Lived here two years. Water never stopped, landlord fixes
          issues fast.&rdquo;
        </p>
        <p className="mt-2 text-[13px] font-semibold text-ink-soft">
          — Resident review, 27 total
        </p>
      </div>
    </div>
  );
}
