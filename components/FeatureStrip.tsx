const items = [
  { title: "Distance you can trust", sub: "Calculated from your selected university, not a guess." },
  { title: "Reviews, not ads", sub: "Written by students who actually lived there." },
  { title: "Rated by category", sub: "Electricity, water, security, cleanliness — scored." },
  { title: "No booking pressure", sub: "Discover and compare. No payments, no deposits here." },
];

export default function FeatureStrip() {
  return (
    <section className="mx-auto max-w-[1180px] px-6 pb-10 pt-14">
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.title} className="bg-bg px-[22px] py-6">
            <strong className="mb-1 block text-[15.5px]">{item.title}</strong>
            <span className="text-[13.5px] text-ink-soft">{item.sub}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
