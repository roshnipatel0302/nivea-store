"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-white">
            {/* Minimalist Background Layout */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F8FBFF] -z-10 hidden lg:block" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Content Side */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 text-[#003580] mb-8 font-black text-[10px] uppercase tracking-[0.4em]">
                            <span className="w-8 h-[2px] bg-[#003580]" />
                            <span>Skin Science Heritage</span>
                        </div>

                        <h1 className="text-5xl md:text-[80px] font-black text-[#003580] leading-[0.9] tracking-tighter mb-8">
                            Pure Care. <br />
                            <span className="text-gradient-nivea">Daily Glow.</span>
                        </h1>

                        <p className="text-base md:text-xl text-[#4A5568] font-medium leading-relaxed max-w-lg mb-12 opacity-80">
                            Experience 100 years of dermatologically tested care. Our formulas are crafted to protect and nurture your skin's natural beauty.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center gap-8">
                            <button className="btn-nivea">
                                <span>Shop Essentials</span>
                                <ArrowRight className="ml-3" size={16} />
                            </button>

                            <div className="flex items-center space-x-3">
                                <CheckCircle2 className="text-green-500" size={18} />
                                <span className="text-[10px] font-black text-[#003580] uppercase tracking-widest">
                                    Dermatologically Approved
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Side */}
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="relative aspect-square max-w-[550px] mx-auto"
                    >
                        <div className="absolute inset-0 rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                            <Image
                                src="https://images.unsplash.com/photo-1552046122-03184de85e08?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D"
                                alt="NIVEA Model"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Simple floating badge */}
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-[30px] shadow-xl border border-gray-50 hidden md:block">
                            <p className="text-[8px] font-black text-gray-400 uppercase tracking-widest mb-1">Innovation</p>
                            <p className="text-lg font-black text-[#003580]">Pro-Vitamin B5</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
