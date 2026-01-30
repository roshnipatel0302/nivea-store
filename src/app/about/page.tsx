"use client";

import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Leaf, Heart, Globe, Quote } from "lucide-react";

const AboutPage = () => {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[#EBF2FA] -z-10 opacity-50" />
                <div className="container mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center space-x-2 text-[#003580] mb-6 font-black text-[10px] uppercase tracking-[0.4em]">
                            <span className="w-8 h-[2px] bg-[#003580]" />
                            <span>Since 1911 Legacy</span>
                        </div>
                        <h1 className="text-4xl md:text-[85px] font-black text-[#003580] leading-[0.85] tracking-tighter mb-8">
                            Trust Is The <br />
                            <span className="text-gradient-nivea">Best Skin Care.</span>
                        </h1>
                        <p className="text-base md:text-lg text-gray-500 font-medium leading-relaxed max-w-lg mb-10">
                            For over 100 years, NIVEA has been a companion for life. We understand skin like no one else, providing care that is simple, reliable, and effective.
                        </p>
                    </motion.div>
                    <div className="relative aspect-square rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl border-4 md:border-8 border-white group bg-gray-50">
                        <Image
                            src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200"
                            alt="NIVEA Heritage"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-[2s]"
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-[#F8FBFF]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { icon: ShieldCheck, title: "Pure Quality", desc: "Rigorous testing for your safety." },
                            { icon: Leaf, title: "Sustainability", desc: "Commitment to a greener planet." },
                            { icon: Heart, title: "Human Care", desc: "Inclusive care for all skin types." },
                            { icon: Globe, title: "Global Reach", desc: "Trusted by millions worldwide." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative bg-white p-10 md:p-12 rounded-[40px] md:rounded-[50px] border border-gray-100 transition-all duration-500 hover:shadow-[0_50px_100px_-20px_rgba(0,53,128,0.15)] hover:bg-blue-50/30 text-center cursor-default"
                            >
                                <div className="w-16 h-16 bg-blue-50 rounded-[20px] flex items-center justify-center text-[#003580] mx-auto mb-8 group-hover:bg-[#003580] group-hover:text-white transition-all duration-500 shadow-sm">
                                    <item.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-[13px] font-black text-[#003580] mb-3 uppercase tracking-[0.2em]">{item.title}</h3>
                                <p className="text-[11px] text-gray-400 font-bold leading-relaxed">{item.desc}</p>

                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-blue-100 group-hover:w-16 group-hover:bg-[#003580] transition-all duration-500" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Styled Content Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-40 -z-10" />
                <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-emerald-50 rounded-full blur-[100px] opacity-30 -z-10" />

                <div className="container mx-auto px-6 md:px-12">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-5 gap-16 items-center">
                            {/* Accent Image - Fixed Link */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="lg:col-span-2 relative aspect-[3/4] rounded-[40px] md:rounded-[60px] overflow-hidden shadow-2xl bg-gray-50"
                            >
                                <Image
                                    src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800"
                                    alt="NIVEA Natural Luxury"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-[#003580]/5 mix-blend-multiply" />
                            </motion.div>

                            {/* Editorial Content */}
                            <div className="lg:col-span-3">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <Quote size={80} className="absolute -top-12 -left-8 text-blue-50/80 -z-10" strokeWidth={3} />

                                    <h2 className="text-3xl md:text-6xl font-black text-[#003580] mb-12 uppercase tracking-tighter leading-tight">
                                        Our Promise <br />To <span className="text-gradient-nivea">You.</span>
                                    </h2>

                                    <div className="space-y-10">
                                        <div className="relative pl-8 border-l-4 border-blue-50">
                                            <p className="text-lg md:text-xl text-[#0A1F44] font-medium leading-[1.4] tracking-tight">
                                                At NIVEA, we believe that skincare is more than just products; it's about the <span className="text-[#003580] font-black italic">moments of care</span> you give to yourself and your loved ones.
                                            </p>
                                        </div>

                                        <p className="text-lg md:text-xl text-gray-500 font-medium leading-relaxed font-sans">
                                            Our formulas are crafted with the perfect balance of science and nature. We are continuously innovating to reduce our environmental footprint while maintaining the legendary quality of our blue tin.
                                        </p>

                                        <div className="bg-[#003580] p-12 rounded-[50px] shadow-[0_40px_80px_-20px_rgba(0,53,128,0.3)] transform hover:scale-[1.02] transition-transform duration-500">
                                            <h4 className="text-[11px] font-black text-blue-300 uppercase tracking-[0.4em] mb-4">The Universal Vision</h4>
                                            <p className="text-white text-2xl md:text-3xl font-extrabold leading-tight tracking-tighter">
                                                Our goal is simple: <br />healthy skin, happy people, and a healthy planet.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AboutPage;
