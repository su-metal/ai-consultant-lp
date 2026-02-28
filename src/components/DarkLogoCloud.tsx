'use client';

import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { name: "TechNova", icon: "❖" },
    { name: "CloudSync", icon: "⎈" },
    { name: "AeroDynamics", icon: "⌬" },
    { name: "NexusGrid", icon: "⌗" },
    { name: "PulseHealth", icon: "♥" },
    { name: "QuantumDev", icon: "⌘" },
];

export default function DarkLogoCloud() {
    return (
        <section className="py-12 bg-white border-y border-slate-100 relative overflow-hidden">
            {/* Subtle top glow */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

            <div className="container mx-auto px-4 relative z-10">
                <p className="text-center text-slate-400 text-sm font-bold tracking-widest mb-8">
                    導入企業・連携パートナー
                </p>

                <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {logos.map((logo, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="flex items-center gap-2 text-xl font-bold text-slate-500 hover:text-slate-800 transition-colors cursor-default"
                        >
                            <span className="text-2xl text-blue-500">{logo.icon}</span>
                            {logo.name}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
