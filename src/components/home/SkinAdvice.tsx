"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

const editorPicks = [
    {
        category: "SKIN SCIENCE",
        title: "The Molecular Secrets of NIVEA Deodorants",
        image: "https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNraW5jYXJlfGVufDB8fDB8fHww",
        readTime: "5 min"
    },
    {
        category: "BODY RITUALS",
        title: "Bathing vs Showering: The Ultimate Hydration Guide",
        image: "https://images.unsplash.com/photo-1617778368431-f97343a411ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHNraW5jYXJlfGVufDB8fDB8fHww",
        readTime: "4 min"
    },
    {
        category: "HERITAGE CARE",
        title: "Why NIVEA Soft Remains a Global Skincare Icon",
        image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNraW5jYXJlfGVufDB8fDB8fHww",
        readTime: "6 min"
    }
];

const beautyStories = [
    { name: "Face Rituals", image: "https://images.unsplash.com/photo-1570172619380-2126ad04840b?auto=format&fit=crop&q=80&w=300" },
    { name: "Summer Shield", image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&q=80&w=300" },
    { name: "Deep Cleanse", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300" },
    { name: "Lip Luxury", image: "https://images.unsplash.com/photo-1617351677365-728b97f0fb5f?auto=format&fit=crop&q=80&w=300" },
    { name: "UV Wisdom", image: "https://images.unsplash.com/photo-1596462502278-27bfdc4033c8?auto=format&fit=crop&q=80&w=300" },
    { name: "Men's Routine", image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=300" },
];

const SkinAdvice = () => {
    return (
        <section className="py-24 bg-[#F8FBFF] relative overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-24 relative z-10">
                <div className="flex items-center justify-between mb-12">
                    <div>
                        <div className="inline-flex items-center space-x-2 text-[#003580] mb-3">
                            <BookOpen size={16} />
                            <span className="text-[10px] font-black uppercase tracking-[0.3em]">Knowledge</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-[#003580] uppercase tracking-tighter">
                            Advanced <span className="text-gradient-nivea">Guides.</span>
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {editorPicks.map((pick, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-[30px] overflow-hidden border border-gray-100 group cursor-pointer hover:shadow-xl transition-all duration-500"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={pick.image}
                                    alt={pick.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                            <div className="p-8">
                                <div className="text-[9px] font-black text-blue-300 uppercase tracking-widest mb-3 flex items-center justify-between">
                                    <span>{pick.category}</span>
                                    <span className="text-gray-300">{pick.readTime}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#0A1F44] leading-tight mb-6">
                                    {pick.title}
                                </h3>
                                <div className="flex items-center text-[#003580] text-[10px] font-black uppercase tracking-widest gap-2 group-hover:gap-4 transition-all">
                                    <span>Read Story</span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Stories - Simple & Attractive */}
            {/* <div className="container mx-auto px-6 md:px-12 pt-20 border-t border-gray-100">
                <div className="flex items-center space-x-12 overflow-x-auto pb-10 no-scrollbar">
                    {beautyStories.map((story, idx) => (
                        <div key={idx} className="flex-shrink-0 flex flex-col items-center group cursor-pointer">
                            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-[2px] bg-gradient-to-tr from-[#003580] to-blue-200 mb-4 transition-transform group-hover:scale-110">
                                <div className="w-full h-full rounded-full border-4 border-[#F8FBFF] overflow-hidden">
                                    <Image src={story.image} alt={story.name} width={100} height={100} className="object-cover w-full h-full" />
                                </div>
                            </div>
                            <span className="text-[10px] font-bold text-[#0A1F44] uppercase tracking-widest text-center whitespace-nowrap opacity-60 group-hover:opacity-100 transition-opacity">
                                {story.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div> */}
        </section>
    );
};

export default SkinAdvice;
