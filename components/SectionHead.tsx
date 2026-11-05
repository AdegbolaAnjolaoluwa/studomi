export default function SectionHead({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-[680px] text-center">
      <span className="text-[13px] font-bold uppercase tracking-wide text-ink-soft">
        {eyebrow}
      </span>
      <h2 className="mt-2.5 font-display text-[30px] font-extrabold tracking-tight sm:text-[36px] lg:text-[44px]">
        {title}
      </h2>
      {sub ? <p className="mt-3.5 text-[17px] text-ink-soft">{sub}</p> : null}
    </div>
  );
}
