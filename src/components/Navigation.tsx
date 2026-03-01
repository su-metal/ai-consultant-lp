'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { label: 'Top', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Works', href: '/works' },
    { label: 'Blog', href: '/blog' },
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
                ? 'bg-white border-b-4 border-black'
                : 'bg-transparent'
                }`}
        >
            {/* Scroll progress bar - Monochrome */}
            <motion.div
                className="absolute bottom-0 left-0 h-[4px] bg-black origin-left opacity-100"
                style={{ scaleX: scrollYProgress, width: '100%' }}
            />
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center group py-2 relative">
                    <div className="flex flex-col transition-all duration-300">
                        <div className="flex items-baseline leading-none">
                            <span className="text-2xl tracking-tight text-black font-black uppercase">
                                machinami
                            </span>
                            <span className="text-2xl tracking-tight ml-1.5 font-black text-white bg-black px-2 pb-0.5">
                                AI
                            </span>
                        </div>
                        <div className="flex items-center mt-1.5 opacity-80">
                            <span className="text-[10px] tracking-[0.3em] text-black font-black uppercase shrink-0">
                                まちなみ
                            </span>
                            <div className="w-[2px] h-2 bg-black mx-2" />
                            <span className="text-[8px] tracking-[0.2em] text-black font-black uppercase whitespace-nowrap">
                                Strategic Intelligence
                            </span>
                        </div>
                    </div>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`text-sm font-black transition-colors relative group py-1 uppercase tracking-widest ${pathname === link.href ? 'text-black' : 'text-black/40 hover:text-black'
                                }`}
                        >
                            {link.label}
                            {pathname === link.href && (
                                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-black" />
                            )}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all group-hover:w-full" />
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-black text-white text-sm font-black border-2 border-black hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 tracking-widest uppercase"
                    >
                        無料相談
                    </Link>
                </div>

                {/* Mobile hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-black hover:text-black/70"
                >
                    {menuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b-4 border-black overflow-hidden"
                    >
                        <div className="px-4 py-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className={`block font-black transition-all py-6 border-b-2 border-black/10 uppercase tracking-widest text-lg ${pathname === link.href ? 'text-white bg-black px-6' : 'text-black hover:bg-black hover:text-white px-6 transition-all'
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
