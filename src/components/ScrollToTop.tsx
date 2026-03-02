'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
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
