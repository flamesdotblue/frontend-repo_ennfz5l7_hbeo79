const palette = {
  text: '#2F2F2F',
  textSecondary: '#6C6C6C',
  border: '#E5E5E5',
  gold: '#D1B280',
};

const cards = [
  {
    title: 'Venues',
    img: 'https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1400&auto=format&fit=crop',
    desc: 'Banquet halls, beach fronts, heritage spaces',
  },
  {
    title: 'Catering',
    img: 'https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=1400&auto=format&fit=crop',
    desc: 'Jaffna flavors, seafood, vegetarian feasts',
  },
  {
    title: 'Photography',
    img: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1400&auto=format&fit=crop',
    desc: 'Wedding films, candid, traditional',
  },
  {
    title: 'Decor & Flowers',
    img: 'https://images.unsplash.com/photo-1504087697492-238a6bf49ce8?q=80&w=1400&auto=format&fit=crop',
    desc: 'Kolam motifs, jasmine, elegant backdrops',
  },
];

export default function PopularCategories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="flex items-end justify-between mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl" style={{ color: palette.text, fontFamily: 'Playfair Display, serif' }}>Popular categories</h2>
          <p className="text-sm" style={{ color: palette.textSecondary }}>Hand-picked for Sri Lankan celebrations</p>
        </div>
        <a href="#vendors" className="hidden md:inline-block text-sm px-4 h-10 rounded-xl border hover:bg-black/5" style={{ color: palette.text, borderColor: palette.border }}>
          Explore all
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
        {cards.map((c) => (
          <a key={c.title} href="#vendors" className="group block rounded-2xl overflow-hidden border bg-white shadow-sm focus:outline-none focus-visible:ring-2" style={{ borderColor: palette.border, outlineColor: palette.gold }}>
            <div className="aspect-[4/5] w-full overflow-hidden">
              <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" />
            </div>
            <div className="p-3">
              <div className="font-medium" style={{ color: palette.text }}>{c.title}</div>
              <div className="text-xs" style={{ color: palette.textSecondary }}>{c.desc}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
