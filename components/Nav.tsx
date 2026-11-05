import Image from "next/image";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-2.5 font-display text-xl font-extrabold">
          <Image
            src="/brand/studomi-icon.png"
            alt="Studomi"
            width={30}
            height={30}
            className="flex-shrink-0 rounded-[9px]"
          />
          Studomi
        </div>

        <nav className="hidden items-center gap-7 text-[15px] font-semibold text-ink-soft md:flex">
          <a href="#how" className="hover:text-ink">
            How it works
          </a>
          <a href="#listings" className="hover:text-ink">
            Listings
          </a>
          <a href="#trust" className="hover:text-ink">
            Trust &amp; data
          </a>
          <a href="#faq" className="hover:text-ink">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href="#listings"
            className="hidden rounded-full border border-line bg-white px-[18px] py-2.5 text-sm font-bold transition hover:-translate-y-px sm:inline-block"
          >
            See a hostel profile
          </a>
          <a
            href="#how"
            className="rounded-full border border-accent bg-white px-[18px] py-2.5 text-sm font-bold text-black transition hover:-translate-y-px"
          >
            See how it works
          </a>
        </div>
      </div>
    </header>
  );
}
