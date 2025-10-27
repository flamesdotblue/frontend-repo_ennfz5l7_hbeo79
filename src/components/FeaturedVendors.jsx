const palette = {
  text: '#2F2F2F',
  textSecondary: '#6C6C6C',
  border: '#E5E5E5',
  gold: '#D1B280',
};

const vendors = [
  {
    name: 'Yalpanam Banquets',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    category: 'Venue • Jaffna',
    rating: 4.8,
  },
  {
    name: 'Karaiyaar Caterers',
    img: 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?q=80&w=1400&auto=format&fit=crop',
    category: 'Catering • Seafood',
    rating: 4.6,
  },
  {
    name: 'Lotus Frame Studio',
    img: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    category: 'Photography',
    rating: 4.9,
  },
  {
    name: 'Kolam Floral',
    img: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?q=80&w=1400&auto=format&fit=crop',
    category: 'Decor & Flowers',
    rating: 4.7,
  },
];

export default function FeaturedVendors() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10" id="vendors">
      <div className="flex items-end justify-between mb-4">
        <div>
          <h2 className="text-2xl md:text-3xl" style={{ color: palette.text, fontFamily: 'Playfair Display, serif' }}>Featured vendors</h2>
          <p className="text-sm" style={{ color: palette.textSecondary }}>Trusted professionals for your day</p>
        </div>
        <div className="hidden md:flex gap-2" aria-hidden>
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: palette.gold }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E5E5E5' }} />
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#E5E5E5' }} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="flex gap-4 md:gap-6 min-w-max pr-4">
          {vendors.map((v) => (
            <a key={v.name} href="#" className="w-64 md:w-72 shrink-0 rounded-2xl overflow-hidden border bg-white shadow-sm focus:outline-none focus-visible:ring-2" style={{ borderColor: palette.border, outlineColor: palette.gold }}>
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img src={v.img} alt={v.name} className="w-full h-full object-cover" loading="lazy" />
              </div>
              <div className="p-3">
                <div className="flex items-center justify-between">
                  <div className="font-medium" style={{ color: palette.text }}>{v.name}</div>
                  <div className="text-xs px-2 py-0.5 rounded-full border" style={{ borderColor: palette.border, color: palette.textSecondary }}>{v.rating}★</div>
                </div>
                <div className="text-xs mt-1" style={{ color: palette.textSecondary }}>{v.category}</div>
                <div className="mt-3 flex gap-2">
                  <button className="flex-1 h-9 rounded-xl border text-sm hover:bg-black/5" style={{ borderColor: palette.border, color: palette.text }}>View</button>
                  <button className="flex-1 h-9 rounded-xl text-white text-sm" style={{ background: 'linear-gradient(180deg, #D8C193 0%, #D1B280 100%)' }}>Quote</button>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
