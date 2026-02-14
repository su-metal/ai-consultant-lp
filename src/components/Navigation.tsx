'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Bot, Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Top', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Works', href: '/works' },
    { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollYProgress } = useScroll();
    const pathname = usePathname();

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
                ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-sm'
                : 'bg-transparent'
                }`}
        >
            {/* Scroll progress bar */}
            <motion.div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 origin-left opacity-100"
                style={{ scaleX: scrollYProgress, width: '100%' }}
            />
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="p-2 rounded-lg bg-blue-600 shadow-md shadow-blue-500/30 group-hover:scale-105 transition-transform">
                        <Bot className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold tracking-tight font-serif text-slate-900 transition-colors">
                        Machinami AI<span className="text-blue-600">.</span>
                    </span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-medium transition-colors relative group py-1 ${pathname === link.href ? 'text-blue-600 font-bold' : 'text-slate-500 hover:text-blue-600'
                                }`}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full rounded-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 rounded-full bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40 tracking-wide"
                    >
                        無料相談
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-slate-600 hover:text-slate-900"
                >
                    {menuOpen ? <X className="w-6 h-6 text-slate-900" /> : <Menu className="w-6 h-6 text-slate-900" />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block font-medium transition-colors py-2 font-serif ${pathname === link.href ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
