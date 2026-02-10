'use client';

import React, { useState, useEffect } from 'react';
import Hero from '@/components/Hero';
import Problems from '@/components/Problems';
import CaseStudies from '@/components/CaseStudies';
import Subsidies from '@/components/Subsidies';
import ROI_Calculator from '@/components/ROI_Calculator';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Bot, Mail, Phone, MapPin, ArrowRight, ArrowUp, Menu, X } from 'lucide-react';

/* ── Scroll-to-top button ── */
function ScrollToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-blue-900/40 border border-blue-500/30 text-blue-400 hover:bg-blue-800/60 hover:text-white transition-all backdrop-blur-sm shadow-lg shadow-blue-900/20"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* ── Navigation ── */
const navLinks = [
  { label: '課題', href: '#problems' },
  { label: '事例', href: '#cases' },
  { label: '補助金', href: '#subsidies' },
  { label: 'ROI', href: '#roi' },
  { label: 'お問合せ', href: '#contact' },
];

function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
        ? 'bg-[var(--navy)]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40'
        : 'bg-transparent'
        }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-blue-600 via-amber-400 to-blue-600 origin-left opacity-70"
        style={{ scaleX: scrollYProgress, width: '100%' }}
      />
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="p-2 rounded-lg bg-gradient-to-br from-blue-700 to-blue-900 border border-blue-500/30 group-hover:shadow-[0_0_20px_rgba(30,64,175,0.4)] transition-shadow">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight font-serif">
            まちなみ<span className="text-amber-500">.</span>
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-400 hover:text-white font-medium transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="px-6 py-2.5 rounded-sm bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-all shadow-lg shadow-blue-900/30 border border-blue-400/20 tracking-wide"
          >
            無料相談
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 text-slate-400 hover:text-white"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[var(--navy)]/95 backdrop-blur-xl border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-slate-300 hover:text-amber-400 font-medium transition-colors py-2 font-serif"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

/* ── Main Page ── */
export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--navy)] font-sans selection:bg-blue-900 selection:text-amber-200">
      <Navigation />
      <ScrollToTop />

      <Hero />

      <div className="section-divider opacity-30" />

      <div id="problems">
        <Problems />
      </div>

      <div className="section-divider opacity-30" />

      <div id="cases">
        <CaseStudies />
      </div>

      <div className="section-divider opacity-30" />

      <div id="subsidies">
        <Subsidies />
      </div>

      <div className="section-divider opacity-30" />

      <div id="roi">
        <ROI_Calculator />
      </div>

      <div className="section-divider opacity-30" />

      {/* Footer / Contact */}
      <footer id="contact" className="py-24 md:py-32 relative overflow-hidden bg-[var(--navy)]">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 rounded-lg bg-gradient-to-br from-blue-800 to-slate-900 border border-blue-700/50 shadow-xl">
                  <Bot className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white tracking-tight font-serif">まちなみ<span className="text-amber-500">.</span></h2>
                  <p className="text-xs text-slate-500 font-mono tracking-widest uppercase mt-1">AI Consulting & Solution</p>
                </div>
              </div>

              <p className="text-slate-400 mb-12 leading-loose text-lg max-w-lg font-light">
                「AIを使いこなす会社」か、<br />
                「AIに置いていかれる会社」か。<br />
                <span className="text-white font-medium border-b border-amber-500/50 pb-1">貴社の未来を、共に創りましょう。</span>
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-5 text-slate-400 group">
                  <div className="p-2.5 rounded-full bg-slate-800/50 border border-slate-700 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="group-hover:text-slate-200 transition-colors tracking-wide">info@machinami-ai.example.com</span>
                </div>
                <div className="flex items-center gap-5 text-slate-400 group">
                  <div className="p-2.5 rounded-full bg-slate-800/50 border border-slate-700 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="group-hover:text-slate-200 transition-colors tracking-wide">0532-XX-XXXX <span className="text-xs ml-2 text-slate-600">(平日 9:00 - 18:00)</span></span>
                </div>
                <div className="flex items-center gap-5 text-slate-400 group">
                  <div className="p-2.5 rounded-full bg-slate-800/50 border border-slate-700 group-hover:border-blue-500/50 group-hover:text-blue-400 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="group-hover:text-slate-200 transition-colors tracking-wide">愛知県豊橋市</span>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="glass-card p-8 md:p-12 border-t-4 border-t-amber-500/50">
              <h3 className="text-2xl font-bold text-white mb-2 font-serif">お問い合わせ</h3>
              <p className="text-sm text-slate-500 mb-8 font-mono">30 MINUTES FREE CONSULTATION</p>

              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Company Name</label>
                  <input
                    type="text"
                    placeholder="御社名"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-700 focus:outline-none focus:border-blue-500 focus:bg-blue-900/10 transition-all font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="メールアドレス"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-700 focus:outline-none focus:border-blue-500 focus:bg-blue-900/10 transition-all font-light"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">Message</label>
                  <textarea
                    rows={4}
                    placeholder="ご相談内容（簡単で構いません）"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg p-4 text-white placeholder-slate-700 focus:outline-none focus:border-blue-500 focus:bg-blue-900/10 transition-all resize-none font-light"
                  />
                </div>
                <button
                  type="button"
                  className="group w-full px-8 py-5 bg-gradient-to-r from-blue-700 to-blue-600 rounded-lg font-bold text-lg text-white overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(29,78,216,0.4)] active:scale-[0.98] flex items-center justify-center gap-3 border border-blue-500/30"
                >
                  <span className="relative z-10">無料相談を申し込む</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </button>
              </form>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-600 font-mono">
              &copy; 2026 Machinami AI Consulting. All rights reserved.
            </p>
            <p className="text-xs text-slate-600 font-serif">
              代表: 佐田真教
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
