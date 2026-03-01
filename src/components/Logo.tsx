'use client';

import React from 'react';

interface LogoProps {
    className?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
    const sizeMap = {
        sm: 'h-6',
        md: 'h-10',
        lg: 'h-16',
        xl: 'h-24',
    };

    return (
        <div className={`${sizeMap[size]} ${className}`}>
            <svg
                viewBox="0 0 280 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-auto overflow-visible"
            >
                {/* 'machinami' - Clean Modern Sans */}
                <text
                    x="0"
                    y="42"
                    className="font-sans"
                    style={{
                        fill: '#0f172a', // Slate 900
                        fontSize: '32px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                    }}
                >
                    machinami
                </text>

                {/* 'ai' - Bold Tech Sans */}
                <text
                    x="165"
                    y="42"
                    className="font-sans"
                    style={{
                        fill: '#0f172a',
                        fontSize: '32px',
                        fontWeight: 800,
                        letterSpacing: '0.02em',
                    }}
                >
                    ai
                </text>

                {/* '.' - Accent Dot with Pulse */}
                <circle
                    cx="198"
                    cy="40"
                    r="4.5"
                    fill="#3b82f6"
                    className="animate-pulse"
                    style={{ animationDuration: '3s' }}
                />

                {/* Subtle underline for 'ai' part to give it a tech logo feel */}
                <rect
                    x="165"
                    y="46"
                    width="30"
                    height="2.5"
                    fill="#3b82f6"
                    rx="1.25"
                    opacity="0.8"
                />
            </svg>
        </div>
    );
}
