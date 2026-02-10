'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Zap } from 'lucide-react';

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
        const COUNT = 80;

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
                vx: (Math.random() - 0.5) * 0.4,
                vy: (Math.random() - 0.5) * 0.4,
                r: Math.random() * 2 + 0.5,
                o: Math.random() * 0.5 + 0.1,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;

            ctx.fillStyle = 'rgba(30, 64, 175, 0.5)'; // Royal Blue nodes
            ctx.strokeStyle = 'rgba(30, 64, 175, 0.15)'; // Faint lines

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

                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.lineWidth = 0.5 * (1 - dist / 150);
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
            style={{ opacity: 0.6 }}
        />
    );
}

/* ── Floating Icons ── */
const floatingIcons = [
    { Icon: Cpu, x: '10%', y: '20%', delay: 0, size: 28 },
    { Icon: Zap, x: '85%', y: '15%', delay: 1.5, size: 24 },
    { Icon: Sparkles, x: '75%', y: '70%', delay: 3, size: 26 },
    { Icon: Cpu, x: '15%', y: '75%', delay: 2, size: 22 },
];

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
            {/* Particle background */}
            <ParticleField />

            {/* Gradient orbs */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

            {/* Floating tech icons */}
            {floatingIcons.map(({ Icon, x, y: fy, delay, size }, i) => (
                <motion.div
                    key={i}
                    className="absolute text-blue-500/20 pointer-events-none"
                    style={{ left: x, top: fy }}
                    animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, delay, ease: 'easeInOut' }}
                >
                    <Icon size={size} />
                </motion.div>
            ))}

            <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 py-32">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 py-2 px-5 rounded-full bg-blue-900/20 border border-blue-500/20 text-blue-200 text-sm font-mono mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                        東三河の中小企業特化型AIコンサルティング
                    </motion.div>

                    {/* Main heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.2] mb-10 tracking-tight font-serif"
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="block text-white"
                        >
                            AIは「道具」から、
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-blue-100 to-amber-200 glow-text-primary"
                        >
                            「パートナー」へ。
                        </motion.span>
                    </motion.h1>

                    {/* Sub copy */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light"
                    >
                        すでに日本の中小企業の<span className="text-white font-medium">42.3%</span>がAI活用を始めています。<br className="hidden md:block" />
                        私たちはその第一歩を、東三河の地で共に歩みます。
                    </motion.p>

                    {/* Stats bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="glass-card p-6 mb-12 max-w-2xl mx-auto"
                    >
                        <div className="flex items-center justify-center gap-4 flex-wrap">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                                <span className="text-slate-300 text-sm">
                                    導入企業の<span className="text-white font-bold text-lg mx-1 counter-value">90%+</span>が業務効率化を実現
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center"
                    >
                        <button className="group relative px-10 py-4 bg-blue-700 hover:bg-blue-600 rounded-lg font-bold text-lg text-white overflow-hidden transition-all hover:shadow-lg hover:shadow-blue-900/40">
                            <span className="relative z-10 flex items-center justify-center gap-2">
                                無料相談を予約する
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </button>
                        <button className="px-10 py-4 bg-transparent border border-slate-600 hover:border-amber-500/50 rounded-lg font-bold text-lg text-slate-300 hover:text-amber-400 transition-all">
                            サービス詳細
                        </button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--navy)] to-transparent pointer-events-none" />
        </section>
    );
};

export default Hero;
