"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
    { name: "Face Care", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=600" },
    { name: "Body Care", image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=600" },
    { name: "NIVEA MEN", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=600" },
    { name: "Sun Protection", image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=600" },
    { name: "Deodorants", image: "https://images.unsplash.com/photo-1594125356779-130099645213?auto=format&fit=crop&q=80&w=600" },
    { name: "Lip Care", image: "https://images.unsplash.com/photo-1617351677365-728b97f0fb5f?auto=format&fit=crop&q=80&w=600" },
];

const QuickNav = () => {
    return (
        <section className="py-24 bg-white relative z-20">
            <div className="container mx-auto px-6 md:px-12 text-center mb-16 px-2">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-200 mb-4 block">Essentials</span>
                <h2 className="text-3xl md:text-5xl font-black text-[#003580] uppercase tracking-tighter">Shop by <span className="text-gradient-nivea">Concern.</span></h2>
            </div>

            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                    {navItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="group"
                        >
                            <Link href={`/category/${item.name.toLowerCase().replace(' ', '-')}`} className="flex flex-col items-center">
                                <div className="w-24 h-24 md:w-36 md:h-36 rounded-full overflow-hidden mb-6 border-[6px] border-white shadow-xl group-hover:shadow-[0_40px_80px_-20px_rgba(0,53,128,0.2)] transition-all duration-500 relative ring-1 ring-gray-100 group-hover:ring-[#003580]/20 bg-white">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100px, 150px"
                                    />
                                    <div className="absolute inset-x-0 bottom-0 h-full bg-[#003580]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </div>
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0A1F44] group-hover:text-[#003580] transition-all text-center">
                                    {item.name}
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default QuickNav;
