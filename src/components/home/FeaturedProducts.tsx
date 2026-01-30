"use client";

import React, { useState } from "react";
import ProductCard from "../products/ProductCard";
import { products } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";

const FeaturedProducts = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const displayCount = 4;

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const next = () => {
        if (currentIndex < products.length - displayCount) {
            setCurrentIndex(prev => prev + 1);
        }
    };

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        }
    };

    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex items-center justify-between mb-16 px-2">
                    <div>
                        <div className="flex items-center space-x-2 text-[#003580] mb-3">
                            <Sparkles size={16} className="text-blue-400" />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Editor's Picks</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#003580] uppercase tracking-tighter leading-none">
                            The <span className="text-gradient-nivea">New Essentials.</span>
                        </h2>
                    </div>

                    <div className="hidden md:flex space-x-3">
                        <button
                            onClick={prev}
                            disabled={currentIndex === 0}
                            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#003580] hover:bg-[#F8FBFF] disabled:opacity-30 transition-all shadow-sm"
                        >
                            <ArrowLeft size={18} />
                        </button>
                        <button
                            onClick={next}
                            disabled={currentIndex >= products.length - displayCount}
                            className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center text-[#003580] hover:bg-[#F8FBFF] disabled:opacity-30 transition-all shadow-sm"
                        >
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    {/* Responsive Container: Snap-scroll on mobile, controlled on desktop */}
                    <div className="overflow-x-auto md:overflow-hidden no-scrollbar -mx-6 px-6 pb-8 md:pb-0 snap-x snap-mandatory scroll-smooth">
                        <motion.div
                            className="flex gap-6 w-max md:w-full"
                            animate={{
                                x: !isMobile
                                    ? `calc(-${currentIndex * (100 / displayCount)}% - ${currentIndex * 24}px)`
                                    : 0
                            }}
                            transition={{ type: "spring", stiffness: 200, damping: 30 }}
                        >
                            {products.map((product) => (
                                <div
                                    key={product.id}
                                    className="w-[82vw] sm:w-[45vw] md:w-[calc(25%-18px)] flex-shrink-0 snap-center px-1"
                                >
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                {/* Simplified Progress Indicator - Hidden on Mobile if free-scrolling */}
                <div className="mt-12 md:mt-16 flex justify-center items-center">
                    <div className="w-48 md:w-64 h-[2px] bg-gray-100 rounded-full relative">
                        <motion.div
                            className="absolute inset-y-0 left-0 bg-[#003580] rounded-full"
                            style={{
                                width: `${((currentIndex + displayCount) / products.length) * 100}%`
                            }}
                            transition={{ duration: 0.5 }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
