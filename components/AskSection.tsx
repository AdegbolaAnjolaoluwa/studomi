import SectionHead from "./SectionHead";

const listings = [
  { name: "Sunview Lodge", distance: "1.2 km", rent: "₦380,000", water: "4.8", security: "4.9", reviews: 27 },
  { name: "Jabi Heights", distance: "2.1 km", rent: "₦420,000", water: "3.9", security: "4.2", reviews: 14 },
  { name: "Kado Court", distance: "2.8 km", rent: "₦350,000", water: "4.6", security: "4.7", reviews: 31 },
  { name: "Katampe Residence", distance: "3.4 km", rent: "₦310,000", water: "4.1", security: "3.8", reviews: 9 },
];

export default function AskSection() {
  return (
    <section id="listings" className="mx-auto max-w-[1180px] px-6 py-[88px]">
      <SectionHead
        eyebrow="See it in action"
        title="Compare hostels the way you'd compare anything else."
        sub="Side by side, with the numbers that actually matter — not a wall of photos. Example listings near Nile University, Abuja."
      />

      <div className="overflow-x-auto rounded-[20px] border border-line bg-white shadow-[0_20px_50px_rgba(16,35,28,0.06)]">
        <table className="w-full min-w-[640px] border-collapse text-[14px]">
          <thead>
            <tr className="border-b border-line bg-[#F6F4EC] text-left text-ink-soft">
              <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Hostel</th>
              <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Distance</th>
              <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Rent / yr</th>
              <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Water</th>
              <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Security</th>
              <th className="px-5 py-3.5 text-xs font-bold uppercase tracking-wide">Reviews</th>
            </tr>
          </thead>
          <tbody className="tnum">
            {listings.map((l, i) => (
              <tr
                key={l.name}
                className={i !== listings.length - 1 ? "border-b border-line" : ""}
              >
                <td className="px-5 py-4 font-bold text-ink">{l.name}</td>
                <td className="px-5 py-4 text-ink-soft">{l.distance}</td>
                <td className="px-5 py-4 text-ink-soft">{l.rent}</td>
                <td className="px-5 py-4 text-ink-soft">{l.water} ★</td>
                <td className="px-5 py-4 text-ink-soft">{l.security} ★</td>
                <td className="px-5 py-4 text-ink-soft">{l.reviews}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-[13px] text-ink-soft">
        Example data shown for illustration. Live listings vary by university.
      </p>
    </section>
  );
}
