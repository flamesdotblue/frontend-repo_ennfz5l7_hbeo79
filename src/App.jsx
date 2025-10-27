import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PopularCategories from './components/PopularCategories';
import FeaturedVendors from './components/FeaturedVendors';
import { Home, Search, FileText, MessageCircle, User } from 'lucide-react';

const palette = {
  bg: '#FAF9F0',
  surface: '#FFFFFF',
  text: '#2F2F2F',
  textSecondary: '#6C6C6C',
  border: '#E5E5E5',
  gold: '#D1B280',
  goldHover: '#b89463',
};

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.bg }}>
      {/* Load Playfair Display for headings */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');`}</style>

      <Navbar />

      <main>
        <HeroSection />
        <PopularCategories />

        {/* Trust banner */}
        <section className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl border bg-white p-5 md:p-6 flex items-center gap-4 shadow-sm" style={{ borderColor: palette.border }}>
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FFF5E5', color: palette.text }}>
              ★
            </div>
            <div className="flex-1">
              <div className="font-medium" style={{ color: palette.text }}>Trusted by couples and families across Sri Lanka</div>
              <div className="text-sm" style={{ color: palette.textSecondary }}>Verified reviews, secure messaging, and clear quotes.</div>
            </div>
            <a href="#about" className="hidden md:inline-block px-4 h-10 rounded-xl border hover:bg-black/5" style={{ color: palette.text, borderColor: palette.border }}>Learn more</a>
          </div>
        </section>

        <FeaturedVendors />

        {/* Minimal About & Contact anchors */}
        <section id="about" className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl md:text-3xl mb-2" style={{ color: palette.text, fontFamily: 'Playfair Display, serif' }}>About Festivaz</h2>
          <p className="text-sm md:text-base max-w-2xl" style={{ color: palette.textSecondary }}>
            Festivaz connects you with premium event vendors across Sri Lanka with a special nod to Jaffna traditions. Browse, compare, and request quotes in a few taps.
          </p>
        </section>
        <section id="contact" className="mx-auto max-w-6xl px-4 pb-24 md:pb-12">
          <h2 className="text-2xl md:text-3xl mb-2" style={{ color: palette.text, fontFamily: 'Playfair Display, serif' }}>Contact</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <form className="rounded-2xl border bg-white p-4 shadow-sm grid gap-3" style={{ borderColor: palette.border }}>
              <input className="h-11 px-3 rounded-xl border focus:outline-none focus-visible:ring-2" placeholder="Your name" style={{ borderColor: palette.border, color: palette.text, outlineColor: palette.gold }} />
              <input type="email" className="h-11 px-3 rounded-xl border focus:outline-none focus-visible:ring-2" placeholder="Email" style={{ borderColor: palette.border, color: palette.text, outlineColor: palette.gold }} />
              <textarea rows="4" className="px-3 py-2 rounded-xl border focus:outline-none focus-visible:ring-2" placeholder="Message" style={{ borderColor: palette.border, color: palette.text, outlineColor: palette.gold }} />
              <button className="h-11 rounded-xl text-white" style={{ background: 'linear-gradient(180deg, #D8C193 0%, #D1B280 100%)' }}>Send</button>
            </form>
            <div className="rounded-2xl border bg-white p-4 shadow-sm" style={{ borderColor: palette.border }}>
              <div className="text-sm" style={{ color: palette.textSecondary }}>
                Email: hello@festivaz.lk
                <br />
                Based in Jaffna • Serving all Sri Lanka
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Tab Bar for mobile */}
      <nav
        className="fixed bottom-3 left-0 right-0 mx-auto w-[92%] md:hidden rounded-2xl border bg-white/85 backdrop-blur shadow-lg"
        role="navigation"
        aria-label="Bottom navigation"
        style={{ borderColor: palette.border }}
      >
        <ul className="grid grid-cols-5">
          {[
            { label: 'Home', icon: Home, href: '#' },
            { label: 'Search', icon: Search, href: '#', },
            { label: 'Quotes', icon: FileText, href: '#quotes' },
            { label: 'Messages', icon: MessageCircle, href: '#', },
            { label: 'Profile', icon: User, href: '#', },
          ].map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="flex flex-col items-center justify-center gap-1 py-2.5 focus:outline-none focus-visible:ring-2 rounded-2xl"
                style={{ color: palette.text, outlineColor: palette.gold }}
              >
                <item.icon size={20} />
                <span className="text-[11px]">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <footer className="py-8 text-center text-xs" style={{ color: palette.textSecondary }}>
        © {new Date().getFullYear()} Festivaz • Crafted for elegant Sri Lankan events
      </footer>
    </div>
  );
}
