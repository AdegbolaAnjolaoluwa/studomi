import SectionHead from "./SectionHead";

const steps = [
  {
    title: "Select your university",
    body: "Choose your school as the reference point. Every search and distance is calculated from there.",
    chips: ["University of Lagos", "Covenant University"],
  },
  {
    title: "Search and filter",
    body: "Browse hostels around campus, filter by price range and distance, open a profile to see the full picture.",
    chips: ["Under ₦200k", "Within 1 km"],
  },
  {
    title: "Read real resident reviews",
    body: "See category ratings and written reviews from people who lived there, not promotional photos alone.",
    chips: ["Water 4.8 ★", "27 reviews"],
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-[1180px] px-6 py-[88px]">
      <SectionHead
        eyebrow="How it works"
        title="Three steps. Then you know exactly what to expect."
        sub="No listings to dig through across five different pages. Pick your school, see what's around it, read what residents actually say."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={step.title}
            className="rounded-[20px] border border-line bg-white p-[30px_26px]"
          >
            <div className="mb-[18px] flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-panel font-display font-extrabold text-accent">
              {i + 1}
            </div>
            <h3 className="mb-2 text-[19px] font-bold">{step.title}</h3>
            <p className="mb-4 text-[14.5px] text-ink-soft">{step.body}</p>
            <div className="flex flex-wrap gap-2">
              {step.chips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full bg-accent/[0.12] px-3 py-1.5 text-xs font-bold text-[#166534]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
