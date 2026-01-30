"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data";
import { motion } from "framer-motion";
import { Sparkles, Grid3X3, Filter, SlidersHorizontal, ChevronDown } from "lucide-react";

const ProductsPage = () => {
    return (
        <main className="min-h-screen bg-white selection:bg-[#003580] selection:text-white">
            <Navbar />

            {/* Premium Refined Products Header */}
            <div className="relative pt-44 pb-20 overflow-hidden bg-white">
                {/* Architectural Accents */}
                <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-blue-50/50 to-transparent -z-10" />
                <div className="absolute top-20 right-20 w-80 h-80 bg-blue-100/20 rounded-full blur-[100px] -z-10" />

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-4 text-[#003580] mb-8"
                        >
                            <div className="w-12 h-[1px] bg-blue-200" />
                            <span className="text-[11px] font-black uppercase tracking-[0.4em] text-blue-400">Pure Care Collection 2026</span>
                        </motion.div>

                        <h1 className="text-6xl md:text-[90px] font-black text-[#003580] uppercase tracking-tighter leading-[0.85] mb-10">
                            The Elite <br />
                            <span className="text-gradient-nivea">Experience.</span>
                        </h1>

                        <div className="flex flex-col md:flex-row md:items-center gap-10 border-l-[6px] border-blue-50 pl-10 ml-1">
                            <p className="text-xl text-[#4A5568] font-medium max-w-xl leading-relaxed opacity-80">
                                Curated essentials backed by a century of dermatological innovation. Trust your skin to the original masters of blue care.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Catalog Toolbar - Premium Sticky Overhaul */}
            <div className="sticky top-[85px] z-[40] bg-white/80 backdrop-blur-2xl border-y border-gray-100 py-6">
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <div className="flex items-center space-x-12">
                        {/* Refine Button */}
                        <button className="group flex items-center space-x-4 text-[11px] font-black uppercase tracking-[0.2em] text-[#003580] hover:bg-[#F8FBFF] px-8 py-3.5 rounded-2xl border border-blue-50 transition-all duration-500 shadow-sm active:scale-95">
                            <SlidersHorizontal size={16} strokeWidth={2.5} className="group-hover:rotate-180 transition-transform duration-500" />
                            <span>Refine Selection</span>
                        </button>

                        {/* Status Count */}
                        <div className="hidden md:flex items-center space-x-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">
                                {products.length} Products Available
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-6">
                        {/* Sort Dropdown */}
                        <div className="hidden lg:flex items-center px-6 py-3.5 bg-gray-50/50 rounded-2xl border border-gray-100 hover:border-blue-100 transition-colors cursor-pointer group">
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#0A1F44] mr-4 opacity-40">Sort By:</span>
                            <span className="text-[11px] font-black uppercase tracking-widest text-[#003580]">Recently Added</span>
                            <ChevronDown size={14} className="ml-4 text-gray-300 group-hover:text-blue-400 transition-colors" />
                        </div>

                        {/* Layout Toggle */}
                        <button className="w-14 h-14 rounded-2xl bg-[#003580] text-white flex items-center justify-center shadow-[0_15px_30px_-5px_rgba(0,53,128,0.25)] hover:scale-105 transition-all">
                            <Grid3X3 size={20} strokeWidth={2.5} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Product Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
                        {products.map((product, idx) => (
                            <motion.div
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.05, duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <ProductCard product={product} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-32 text-center">
                        <motion.button
                            whileHover={{ y: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white border-2 border-[#003580] text-[#003580] px-12 py-5 rounded-full font-black uppercase text-[11px] tracking-[0.3em] hover:bg-[#003580] hover:text-white transition-all duration-500 shadow-xl shadow-blue-50"
                        >
                            Load More Essentials
                        </motion.button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ProductsPage;
