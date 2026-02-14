'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Zap, Activity } from 'lucide-react';

/* ── Particle Canvas ── */
function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
        const COUNT = 60; // Slightly reduced for cleaner look

        const resize = () => {
            canvas.width = canvas.offsetWidth * window.devicePixelRatio;
            canvas.height = canvas.offsetHeight * window.devicePixelRatio;
            ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
        };
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < COUNT; i++) {
            particles.push({
                x: Math.random() * canvas.offsetWidth,
                y: Math.random() * canvas.offsetHeight,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                r: Math.random() * 2 + 0.5,
                o: Math.random() * 0.5 + 0.1,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;

            ctx.fillStyle = 'rgba(59, 130, 246, 0.4)'; // Blue 500
            ctx.strokeStyle = 'rgba(59, 130, 246, 0.1)'; // Faint Blue

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                // Bounce off walls for controlled movement
                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

                // Connect particles to form a network
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = p.x - particles[j].x;
                    const dy = p.y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 120) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.lineWidth = 0.5 * (1 - dist / 120);
                        ctx.stroke();
                    }
                }
            });
            animId = requestAnimationFrame(draw);
        };
        draw();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none"
        />
    );
}

/* ── Floating Icons ── */
const floatingIcons = [
    { Icon: Cpu, x: '10%', y: '20%', delay: 0, size: 28, color: 'text-blue-400' },
    { Icon: Zap, x: '85%', y: '15%', delay: 1.5, size: 24, color: 'text-amber-400' },
    { Icon: Sparkles, x: '75%', y: '70%', delay: 3, size: 26, color: 'text-purple-400' },
    { Icon: Activity, x: '15%', y: '75%', delay: 2, size: 22, color: 'text-emerald-400' },
];

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Particle background */}
            <ParticleField />

            {/* Soft Gradient Background Blobs */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-100/60 blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3 mix-blend-multiply" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-purple-100/60 blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/4 mix-blend-multiply" />

            {/* Floating tech icons */}
            {floatingIcons.map(({ Icon, x, y: fy, delay, size, color }, i) => (
                <motion.div
                    key={i}
                    className={`absolute ${color} pointer-events-none opacity-60`}
                    style={{ left: x, top: fy }}
                    animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
                >
                    <Icon size={size} />
                </motion.div>
            ))}

            <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-sm font-medium mb-8 shadow-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                        東三河の中小企業特化型AIコンサルティング
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] mb-8 tracking-tight text-slate-900"
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="block"
                        >
                            AIは「道具」から、
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600"
                        >
                            「パートナー」へ。
                        </motion.span>
                    </motion.h1>

                    {/* Sub copy */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        すでに日本の中小企業の<span className="text-blue-600 font-bold">42.3%</span>がAI活用を始めています。<br className="hidden md:block" />
                        私たちはその第一歩を、東三河の地で共に歩みます。
                    </motion.p>

                    {/* Stats bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="modern-card p-6 mb-12 max-w-xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-emerald-100">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                </div>
                                <span className="text-slate-600 text-sm font-medium">
                                    導入企業の<span className="text-slate-900 font-bold text-lg mx-1 counter-value">90%+</span>が業務効率化を実現
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <button className="btn-primary group relative overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                無料相談を予約する
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="px-8 py-3 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full font-bold text-slate-600 hover:text-slate-900 transition-all shadow-sm">
                            サービス詳細
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom fade - White to Transparent */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
