"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Categories = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Derma Promo */}
                    <div className="relative h-[550px] rounded-[40px] overflow-hidden bg-[#EBF2FA] group">
                        <Image
                            src="https://images.unsplash.com/photo-1555820585-c5ae44394b79?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2tpbmNhcmV8ZW58MHx8MHx8fDA%3D"
                            alt="Derma Range"
                            fill
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/40 to-transparent" />
                        <div className="absolute inset-0 p-12 flex flex-col justify-center max-w-sm">
                            <h2 className="text-4xl font-black text-[#003580] tracking-tighter mb-4 uppercase">
                                Derma <br /> Skin Clear
                            </h2>
                            <p className="text-[#4A5568] font-medium mb-8 leading-relaxed">
                                Advanced formula with Salicylic Acid for visible results in 7 days.
                            </p>
                            <button className="text-[#003580] font-black uppercase text-[10px] tracking-[0.2em] flex items-center group/btn">
                                <span>Discover Range</span>
                                <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Luminous Promo */}
                    <div className="relative h-[550px] rounded-[40px] overflow-hidden bg-[#F8FBFF] group">
                        <Image
                            src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNraW5jYXJlfGVufDB8fDB8fHww"
                            alt="Luminous Range"
                            fill
                            className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-white/90 via-white/40 to-transparent" />
                        <div className="absolute inset-0 p-12 flex flex-col justify-center items-end text-right ml-auto max-w-sm">
                            <h2 className="text-4xl font-black text-[#003580] tracking-tighter mb-4 uppercase">
                                Luminous <br /> 630
                            </h2>
                            <p className="text-[#4A5568] font-medium mb-8 leading-relaxed">
                                Breakthrough innovation to reduce dark spots and even skin tone.
                            </p>
                            <button className="text-[#003580] font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-end group/btn w-full">
                                <span>Learn More</span>
                                <ArrowRight size={14} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
