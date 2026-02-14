import React from 'react';
import { Bot } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="py-8 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-2">
                    <Bot className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-700 font-serif font-bold">Machinami AI</span>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                    <p className="text-xs text-slate-500 font-mono">
                        &copy; 2026 Machinami AI. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-500 font-serif">
                        代表: 佐田真教
                    </p>
                </div>
            </div>
        </footer>
    );
}
