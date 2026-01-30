"use client";

import React from "react";
import NextLink from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    Mail,
    Phone,
    MapPin,
    ArrowRight,
    ShieldCheck,
    Truck,
    RotateCcw
} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-[#003580] text-white overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] -z-0 pointer-events-none" />

            {/* Features Bar */}
            <div className="border-b border-white/10 bg-white/5 backdrop-blur-md relative z-10">
                <div className="container mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { icon: Truck, title: "Free Shipping", desc: "On orders over ₹500" },
                        { icon: ShieldCheck, title: "Secure Payment", desc: "100% Secure Checkout" },
                        { icon: RotateCcw, title: "Easy Returns", desc: "7-Day Free Returns" }
                    ].map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-4 group">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-[#003580] transition-all duration-500">
                                <feature.icon size={24} />
                            </div>
                            <div>
                                <h4 className="font-black text-[10px] uppercase tracking-[0.2em]">{feature.title}</h4>
                                <p className="text-[11px] text-blue-200/80 mt-1 font-medium">{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 pt-24 pb-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
                    {/* Brand Section */}
                    <div>
                        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#003580] font-black text-xs mb-8 shadow-2xl">
                            NIVEA
                        </div>
                        <p className="text-blue-100/70 text-sm leading-relaxed mb-8 font-medium">
                            Trusted by generations, NIVEA provides the perfect balance of science and care for your skin's unique needs since 1911.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white hover:text-[#003580] transition-all duration-300">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {[
                        {
                            title: "Shop By Category",
                            links: ["Face Care", "Body Care", "NIVEA Men", "Sun Protection"]
                        },
                        {
                            title: "Our Company",
                            links: ["Our Story", "Sustainability", "Careers", "Contact Us"]
                        }
                    ].map((col, idx) => (
                        <div key={idx}>
                            <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-blue-300">
                                {col.title}
                            </h4>
                            <ul className="space-y-4">
                                {col.links.map((link) => (
                                    <li key={link}>
                                        <NextLink href={link === "Contact Us" ? "/contact" : "/products"} className="text-blue-100/60 hover:text-white text-[13px] font-medium transition-all hover:translate-x-1 block">
                                            {link}
                                        </NextLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    {/* Contact */}
                    <div>
                        <h4 className="font-black uppercase tracking-[0.3em] text-[10px] mb-8 text-blue-300">Connect</h4>
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <Mail className="text-blue-300" size={18} />
                                <span className="text-[13px] font-medium text-white">care@nivea.in</span>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="text-blue-300" size={18} />
                                <span className="text-[13px] font-medium text-white">1800 120 1234</span>
                            </div>
                            <div className="flex items-start space-x-4">
                                <MapPin className="text-blue-300" size={18} />
                                <span className="text-[13px] font-medium text-white leading-tight">Beiersdorf India Pvt Ltd,<br />Mumbai, Maharashtra</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-blue-300/40 text-[10px] font-black uppercase tracking-widest">
                        &copy; 2026 Beiersdorf AG. Crafted for Caring.
                    </p>
                    <div className="flex space-x-8">
                        {["Privacy", "Terms", "Cookies"].map((link) => (
                            <NextLink key={link} href="#" className="text-blue-300/40 hover:text-white text-[10px] font-black uppercase tracking-widest transition-colors">
                                {link}
                            </NextLink>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
