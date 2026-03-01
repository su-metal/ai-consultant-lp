'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, Cpu, Zap, Activity } from 'lucide-react';
import Link from 'next/link';

/* ── Particle Canvas (Monochrome) ── */
function ParticleField() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animId: number;
        const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];
        const COUNT = 40;

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
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
                r: Math.random() * 1.5 + 0.5,
                o: Math.random() * 0.3 + 0.1,
            });
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;

            ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
            ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)';

            particles.forEach((p, i) => {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0 || p.x > w) p.vx *= -1;
                if (p.y < 0 || p.y > h) p.vy *= -1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();

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
            className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
        />
    );
}

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start'],
    });
    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    const floatingIcons = [
        { Icon: Cpu, x: '8%', y: '15%', delay: 0, size: 24 },
        { Icon: Zap, x: '90%', y: '12%', delay: 1.5, size: 22 },
        { Icon: Sparkles, x: '88%', y: '75%', delay: 3, size: 20 },
        { Icon: Activity, x: '12%', y: '80%', delay: 2, size: 18 },
    ];

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <ParticleField />

            {/* Floating icons (Monochrome) */}
            {floatingIcons.map(({ Icon, x, y: fy, delay, size }, i) => (
                <motion.div
                    key={i}
                    className="absolute text-black pointer-events-none opacity-20 hidden md:block"
                    style={{ left: x, top: fy }}
                    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 7, repeat: Infinity, delay, ease: 'easeInOut' }}
                >
                    <Icon size={size} />
                </motion.div>
            ))}

            <motion.div style={{ y, opacity }} className="relative z-10 container mx-auto px-4 py-20 lg:py-32">
                <div className="max-w-5xl mx-auto text-center">
                    {/* Badge (Monochrome & Thick Border) */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 py-2.5 px-6 border-2 border-black bg-white text-black text-xs font-black tracking-[0.2em] mb-12 uppercase"
                    >
                        <span className="w-2 h-2 bg-black animate-pulse" />
                        AI Consulting & Solution
                    </motion.div>

                    {/* Main heading (Bold Monochrome) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] mb-12 tracking-tighter text-black uppercase"
                    >
                        <span className="block mb-2">AIは「道具」から、</span>
                        <span className="inline-block bg-black text-white px-6 py-2">
                            「パートナー」へ
                        </span>
                    </motion.h1>

                    {/* Sub copy (Bold & Clean) */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-2xl text-black mb-16 max-w-3xl mx-auto leading-relaxed font-bold"
                    >
                        すでに日本の中小企業の半分近くがAI活用を始めています。<br className="hidden md:block" />
                        私たちはあなたのビジネスに最適なAIの形を提案し、共に実装します。
                    </motion.p>

                    {/* CTA section (Bold Buttons w/ Shadows) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                    >
                        <Link
                            href="#contact"
                            className="group relative px-10 py-5 bg-black text-white font-black text-lg uppercase tracking-widest border-4 border-black transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] flex items-center gap-3"
                        >
                            無料相談を予約
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <Link
                            href="#problems"
                            className="px-10 py-5 bg-white text-black font-black text-lg uppercase tracking-widest border-4 border-black hover:bg-black hover:text-white transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none translate-x-1 translate-y-1"
                        >
                            課題から探す
                        </Link>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom thick border */}
            <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-black" />
        </section>
    );
};

export default Hero;

