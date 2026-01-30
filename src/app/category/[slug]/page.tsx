"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data";
import { SlidersHorizontal, ChevronDown, Sparkles, Grid3X3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const CategoryPage = () => {
    const params = useParams();
    const categorySlug = params.slug as string;

    const categoryName = categorySlug?.split("-").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

    const [sortBy, setSortBy] = useState("Featured");

    const filteredProducts = products.filter(product => {
        const prodCat = product.category.toLowerCase().replace(/\s+/g, '-');
        if (categorySlug === 'shop-all') return true;
        if (categorySlug === 'face-care') return prodCat === 'face-care';
        if (categorySlug === 'body-care') return prodCat === 'body-care';
        if (categorySlug === 'sun') return prodCat === 'sun';
        if (categorySlug === 'men') return prodCat === 'men';
        return true;
    });

    return (
        <main className="min-h-screen bg-white selection:bg-[#003580] selection:text-white">
            <Navbar />

            {/* Premium Category Header Overhaul */}
            <div className="relative pt-44 pb-20 overflow-hidden bg-white">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-blue-50/40 to-transparent -z-10 rounded-l-[120px]" />
                <div className="absolute top-1/4 right-20 w-96 h-96 bg-blue-100/10 rounded-full blur-[120px] -z-10" />

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-4 text-[#003580] mb-8"
                        >
                            <Sparkles size={18} className="text-blue-400 animate-pulse" />
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400">Expert Range &bull; 2026</span>
                        </motion.div>

                        <h1 className="text-4xl md:text-[95px] font-black text-[#003580] uppercase tracking-tighter mb-8 leading-[0.85]">
                            {categoryName || "All Products"} <br />
                            <span className="text-gradient-nivea">Collection.</span>
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-center gap-10 border-l-[6px] border-blue-50 pl-10 ml-1">
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-lg md:text-xl text-[#4A5568] font-medium max-w-xl leading-relaxed opacity-80"
                            >
                                Experience the perfect harmony of science and skin care expertise. Our {categoryName || "complete"} range is dermatologically perfected for your well-being.
                            </motion.p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Premium Sticky Toolbar */}
            <div className="sticky top-[85px] z-[40] bg-white/80 backdrop-blur-2xl border-y border-gray-100 py-6">
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        {/* Refine Button */}
                        <button className="group flex items-center space-x-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#003580] hover:bg-[#F8FBFF] px-8 py-3.5 rounded-2xl border border-blue-50 transition-all duration-500 shadow-sm active:scale-95">
                            <SlidersHorizontal size={16} strokeWidth={2.5} className="group-hover:rotate-90 transition-transform duration-500" />
                            <span>Refine Search</span>
                        </button>

                        <div className="hidden md:flex items-center space-x-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            <span className="text-[11px] font-black text-gray-300 uppercase tracking-[0.2em]">
                                Inventory: <span className="text-[#003580]">{filteredProducts.length} Items</span>
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        {/* Interactive Sort */}
                        <div className="hidden lg:flex items-center px-6 py-3.5 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors cursor-pointer group">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#0A1F44] mr-4 opacity-40">View By:</span>
                            <span className="text-[11px] font-black uppercase tracking-widest text-[#003580]">{sortBy}</span>
                            <ChevronDown size={14} className="ml-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
                        </div>

                        {/* View Switcher */}
                        <button className="w-14 h-14 rounded-2xl bg-[#003580] text-white flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(0,53,128,0.25)] hover:bg-[#0056D2] transition-all">
                            <Grid3X3 size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid Area */}
            <div className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    {filteredProducts.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                            <AnimatePresence mode="popLayout">
                                {filteredProducts.map((product, idx) => (
                                    <motion.div
                                        key={product.id}
                                        layout
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <ProductCard product={product} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="py-48 text-center"
                        >
                            <div className="w-24 h-24 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-10">
                                <Sparkles size={40} className="text-blue-200" />
                            </div>
                            <h3 className="text-2xl font-black text-[#003580] uppercase tracking-tighter mb-4">No Products Discovered</h3>
                            <p className="text-gray-400 font-medium text-lg max-w-md mx-auto">This specific range is currently being updated in our labs. Please check other collections.</p>
                        </motion.div>
                    )}

                    {/* Designer Pagination */}
                    {filteredProducts.length > 0 && (
                        <div className="mt-32 flex justify-center items-center space-x-4">
                            {[1, 2].map(page => (
                                <button
                                    key={page}
                                    className={cn(
                                        "w-14 h-14 rounded-2xl font-black text-[12px] tracking-widest transition-all duration-500",
                                        page === 1
                                            ? "bg-[#003580] text-white shadow-2xl shadow-blue-900/20 scale-110"
                                            : "bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-[#003580]"
                                    )}
                                >
                                    {String(page).padStart(2, '0')}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default CategoryPage;
