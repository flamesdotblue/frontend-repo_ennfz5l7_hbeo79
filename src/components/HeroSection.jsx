const palette = {
  bg: '#FAF9F0',
  surface: '#FFFFFF',
  text: '#2F2F2F',
  textSecondary: '#6C6C6C',
  border: '#E5E5E5',
  gold: '#D1B280',
};

export default function HeroSection() {
  return (
    <section
      className="relative w-full"
      style={{
        background: 'linear-gradient(180deg, #FAF9F0 0%, #FFFFFF 100%)',
      }}
    >
      {/* Soft radial gold accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            'radial-gradient(600px 200px at 80% 20%, rgba(209,178,128,0.08), rgba(209,178,128,0) 60%)',
        }}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16 relative">
        <div className="max-w-2xl">
          <h1
            className="text-3xl md:text-5xl leading-tight mb-3"
            style={{ color: palette.text, fontFamily: 'Playfair Display, serif' }}
          >
            Plan unforgettable moments in Sri Lanka
          </h1>
          <p className="text-sm md:text-base" style={{ color: palette.textSecondary }}>
            Discover Jaffna-inspired venues, caterers, decorators, and more. Request quotes and book trusted vendors with confidence.
          </p>

          {/* Search and chips */}
          <div className="mt-6 grid gap-3">
            <div className="flex items-center gap-2 bg-white rounded-2xl border p-2 shadow-sm" style={{ borderColor: palette.border }}>
              <input
                type="text"
                placeholder="Search venues, catering, music..."
                className="flex-1 bg-transparent px-3 py-2 rounded-xl focus:outline-none focus-visible:ring-2"
                style={{ color: palette.text, outlineColor: palette.gold }}
                aria-label="Search vendors"
              />
              <button
                className="px-4 h-10 rounded-xl text-white"
                style={{ background: 'linear-gradient(180deg, #D8C193 0%, #D1B280 100%)' }}
              >
                Search
              </button>
            </div>

            <div className="flex flex-wrap gap-2" aria-label="Popular quick filters">
              {['Venues', 'Catering', 'Photography', 'Decor', 'Music', 'Traditional'].map((chip) => (
                <button
                  key={chip}
                  className="px-3 py-1.5 rounded-full border text-sm hover:bg-black/5 transition"
                  style={{ borderColor: palette.border, color: palette.text }}
                >
                  {chip}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hero image collage */}
        <div className="mt-10 grid grid-cols-3 gap-3 md:absolute md:right-4 md:top-1/2 md:-translate-y-1/2 md:w-[44%]">
          {[
            'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1566814433448-059ad08a940f?q=80&w=1400&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1606114741759-6a89f4aa0b2b?q=80&w=1400&auto=format&fit=crop',
          ].map((src, i) => (
            <img
              key={src}
              src={src}
              alt={i === 0 ? 'Temple wedding decor in Sri Lanka' : i === 1 ? 'Jaffna catering and sweets' : 'Sri Lankan cultural performance'}
              className="aspect-[3/4] w-full object-cover rounded-2xl border shadow-sm"
              style={{ borderColor: palette.border }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
