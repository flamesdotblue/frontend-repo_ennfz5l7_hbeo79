import { useState } from 'react';
import { Menu, X, Search, User } from 'lucide-react';

const palette = {
  bg: '#FAF9F0',
  surface: '#FFFFFF',
  text: '#2F2F2F',
  textSecondary: '#6C6C6C',
  border: '#E5E5E5',
  gold: '#D1B280',
  goldHover: '#b89463', // ~15% darker
};

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b" style={{ borderColor: palette.border }}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            className="inline-flex md:hidden items-center justify-center w-10 h-10 rounded-xl border focus:outline-none focus-visible:ring-2"
            style={{ borderColor: palette.border, color: palette.text, boxShadow: '0 1px 2px rgba(0,0,0,0.04)', outlineColor: palette.gold }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <a href="#" className="flex items-baseline gap-1 select-none" aria-label="Festivaz home">
            <span className="text-xl md:text-2xl font-semibold" style={{ color: palette.text, fontFamily: 'Playfair Display, serif' }}>Festivaz</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full border" style={{ borderColor: palette.border, color: palette.textSecondary }}>SL</span>
          </a>
        </div>

        <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
          <a href="#vendors" className="hover:underline" style={{ color: palette.text }}>Vendors</a>
          <a href="#quotes" className="hover:underline" style={{ color: palette.text }}>Quotes</a>
          <a href="#about" className="hover:underline" style={{ color: palette.text }}>About</a>
          <a href="#contact" className="hover:underline" style={{ color: palette.text }}>Contact</a>
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-3 h-10 rounded-xl border bg-white hover:bg-black/5 transition" style={{ borderColor: palette.border, color: palette.text }}>
            <Search size={18} />
            <span>Search</span>
          </button>
          <button className="inline-flex items-center gap-2 px-4 h-10 rounded-xl text-white transition focus:outline-none focus-visible:ring-2" style={{ background: 'linear-gradient(180deg, #D8C193 0%, #D1B280 100%)', outlineColor: palette.gold }}>
            <User size={18} />
            <span>Login</span>
          </button>
        </div>
      </div>

      {/* Slide-down mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-out border-t`}
        style={{ maxHeight: open ? 240 : 0, borderColor: palette.border }}
        aria-hidden={!open}
      >
        <div className="px-4 py-3 grid gap-2 bg-white">
          <a href="#vendors" className="px-3 py-3 rounded-xl border hover:bg-black/5" style={{ borderColor: palette.border, color: palette.text }}>Vendors</a>
          <a href="#quotes" className="px-3 py-3 rounded-xl border hover:bg-black/5" style={{ borderColor: palette.border, color: palette.text }}>Quotes</a>
          <a href="#about" className="px-3 py-3 rounded-xl border hover:bg-black/5" style={{ borderColor: palette.border, color: palette.text }}>About</a>
          <a href="#contact" className="px-3 py-3 rounded-xl border hover:bg-black/5" style={{ borderColor: palette.border, color: palette.text }}>Contact</a>
          <div className="flex gap-2 pt-1">
            <button className="flex-1 h-11 rounded-xl border bg-white hover:bg-black/5" style={{ borderColor: palette.border, color: palette.text }}>Search</button>
            <button className="flex-1 h-11 rounded-xl text-white" style={{ background: 'linear-gradient(180deg, #D8C193 0%, #D1B280 100%)' }}>Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}
