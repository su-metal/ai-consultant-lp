'use client';

import React from 'react';
import ContactSection from '@/components/ContactSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[var(--navy)] text-white font-sans pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <ContactSection />
            </motion.div>
        </main>
    );
}
