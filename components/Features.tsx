import SectionHead from "./SectionHead";

const features = [
  {
    title: "Geospatial search",
    body: "Hostels ranked and shown by real distance from your selected university, not alphabetical lists.",
    path: "M12 2C8 2 5 5 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-4-3-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z",
  },
  {
    title: "Smart filters",
    body: "Narrow results by price, distance and amenities so you only see what actually fits.",
    path: "M4 6h16v2H4zm0 5h16v2H4zm0 5h10v2H4z",
  },
  {
    title: "Category ratings",
    body: "Electricity, water, security and cleanliness, scored separately so you know exactly what's strong and what's not.",
    path: "M12 17.3l-5.5 3 1-6-4.5-4.1 6.1-.7L12 3l2.9 6 6.1.7-4.5 4.1 1 6z",
  },
  {
    title: "Written resident reviews",
    body: "Honest, structured feedback from eligible past and current residents — not anonymous posts.",
    path: "M4 4h16v12H5.2L4 17.2V4z",
  },
  {
    title: "Admin-verified listings",
    body: "Hostel information is added and maintained by admins, with a visible last-updated date.",
    path: "M12 2l9 4.5v6c0 5-3.6 8.6-9 9.5-5.4-.9-9-4.5-9-9.5v-6L12 2z",
  },
  {
    title: "Built for every screen",
    body: "Search and compare hostels comfortably from your phone, tablet or laptop.",
    path: "M4 11h16v2H4zm3-5h10v2H7zm-3 10h16v2H4z",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-[1180px] px-6 py-[88px]">
      <SectionHead
        eyebrow="Features"
        title="Everything you need to decide, in one place."
        sub="Studomi brings accommodation details and honest resident feedback together, so you stop guessing."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div key={f.title} className="rounded-[20px] border border-line bg-white p-7">
            <div className="mb-[18px] flex h-[42px] w-[42px] items-center justify-center rounded-xl bg-[#EAF7EE]">
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                <path d={f.path} fill="#0B2E1C" />
              </svg>
            </div>
            <h3 className="mb-2 text-lg font-bold">{f.title}</h3>
            <p className="text-[14.5px] text-ink-soft">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
