export default function Closing() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 pb-10">
      <div className="rounded-[28px] bg-panel bg-dots bg-[length:22px_22px] px-6 py-[72px] text-center text-white">
        <h2 className="font-display text-[30px] font-extrabold sm:text-[38px] lg:text-[48px]">
          Find your place. Know what to expect.
        </h2>
        <div className="mt-[30px] flex flex-wrap justify-center gap-3">
          <a
            href="#how"
            className="rounded-full border border-accent bg-white px-[26px] py-3.5 text-[15px] font-bold text-black transition hover:-translate-y-px"
          >
            See how it works →
          </a>
          <a
            href="#faq"
            className="rounded-full border border-white/30 bg-transparent px-[26px] py-3.5 text-[15px] font-bold text-white transition hover:-translate-y-px"
          >
            Read the FAQ
          </a>
        </div>
        <p className="mt-[18px] text-[13.5px] text-[#9FB6AB]">
          Free during the beta · Starting with a small group of universities
        </p>
      </div>
    </section>
  );
}
