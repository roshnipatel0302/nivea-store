"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, User, Menu, X, ShoppingBag, ArrowRight, Sparkles, Beaker, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/cart-context";

const Navbar = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "FACE",
      href: "/category/face-care",
      megaMenu: [
        {
          title: "DAILY CARE",
          links: ["Day Creams", "Night Creams", "Moisturizers", "Sun Protection"]
        },
        {
          title: "CLEANSING",
          links: ["Face Wash", "Scrubs", "Micellar Water", "Face Masks"]
        },
        {
          title: "TREATMENT",
          links: ["Serums", "Eye Care", "Anti-Age", "Dark Spots"]
        },
        {
          title: "LIP CARE",
          links: ["Lip Balms", "Lip Scrubs", "Medicated Lips"]
        }
      ]
    },
    {
      name: "SUN",
      href: "/category/sun",
      megaMenu: [
        {
          title: "PROTECTION",
          links: ["Sun Lotions", "Sun Sprays", "Face Sunscreen"]
        },
        {
          title: "KIDS & SENSITIVE",
          links: ["Kids Sun Care", "Sensitive Skin"]
        },
        {
          title: "AFTER SUN",
          links: ["Soothing Gels", "Moisturizing Lotions"]
        }
      ]
    },
    {
      name: "BODY",
      href: "/category/body-care",
      megaMenu: [
        {
          title: "BODY CARE",
          links: ["Body Lotions", "Body Creams", "Hand Care", "Skin Oils"]
        },
        {
          title: "CLEANSING",
          links: ["Shower Gels", "Soaps", "Body Scrubs"]
        },
        {
          title: "DEODORANTS",
          links: ["Roll-ons", "Sprays", "Men's Deos"]
        }
      ]
    },
    {
      name: "MEN",
      href: "/category/men",
      megaMenu: [
        {
          title: "FACE & BODY",
          links: ["Face Wash", "Face Cream", "Shower Gels"]
        },
        {
          title: "SHAVING",
          links: ["After Shave", "Shaving Gels", "Beard Care"]
        }
      ]
    },
    { name: "SHOP ALL", href: "/products" },
    { name: "ADVICE", href: "/about" },
  ];

  const isActive = (href: string) => {
    if (href === pathname) return true;
    if (href.startsWith('/category') && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div className="bg-[#003580] py-2 text-center text-white text-[10px] font-black uppercase tracking-[0.35em] relative overflow-hidden">
        <span className="relative z-10">Global Standard Skincare &bull; Free Shipping over ₹499</span>
        <div className="absolute inset-0 bg-blue-400/20 translate-x-[-100%] animate-[shimmer_5s_infinite]" />
      </div>

      <nav
        className={cn(
          "transition-all duration-700 px-6 md:px-12 relative border-b border-transparent",
          isScrolled ? "bg-white/95 backdrop-blur-3xl shadow-[0_20px_40px_-15px_rgba(0,53,128,0.1)] py-4 border-gray-100" : "bg-white py-6"
        )}
        onMouseLeave={() => setActiveMenu(null)}
      >
        <div className="max-w-[1500px] mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group relative">
            <div className="w-16 h-16 md:w-22 md:h-22 bg-[#003580] rounded-full flex items-center justify-center text-white font-black text-center leading-none transition-all duration-700 group-hover:scale-105 shadow-[0_30px_60px_-15px_rgba(0,53,128,0.3)] border-4 border-white mb-[-3.5rem] mt-[-0.5rem] relative z-20">
              <span className="text-[14px] md:text-[18px] font-black tracking-tighter">NIVEA</span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="hidden lg:flex items-center space-x-12 ml-40">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative h-full py-4"
                onMouseEnter={() => setActiveMenu(item.name)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-[12px] font-black uppercase tracking-[0.3em] transition-all hover:text-[#003580] relative block",
                    isActive(item.href) || activeMenu === item.name ? "text-[#003580]" : "text-[#0A1F44]"
                  )}
                >
                  {item.name}
                  {(isActive(item.href) || activeMenu === item.name) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#003580] rounded-full"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <button className="text-[#0A1F44] hover:text-[#003580] p-3 transition-colors">
              <Search size={24} strokeWidth={2.5} />
            </button>
            <Link href="/cart" className="relative group p-4 bg-[#F8FBFF] rounded-[24px] transition-all hover:bg-[#003580] hover:text-white border border-blue-50 shadow-sm hover:shadow-lg">
              <ShoppingBag size={24} strokeWidth={2.5} />
              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 w-6 h-6 bg-[#FF1493] text-white text-[11px] font-black rounded-full flex items-center justify-center border-2 border-white shadow-lg"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </Link>
            <button
              className="lg:hidden text-[#0A1F44] p-3"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={32} />
            </button>
          </div>
        </div>

        {/* Elite Mega Menu - Premium Footer Overhaul */}
        <AnimatePresence>
          {activeMenu && menuItems.find(i => i.name === activeMenu)?.megaMenu && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute left-0 right-0 top-full bg-white shadow-[0_60px_120px_-30px_rgba(0,53,128,0.2)] border-t border-gray-100 hidden lg:block overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#003580]/5 via-[#003580]/40 to-[#003580]/5" />

              <div className="max-w-[1400px] mx-auto px-12 pt-16 pb-12">
                <div className="grid grid-cols-4 gap-16 mb-16">
                  {menuItems.find(i => i.name === activeMenu)?.megaMenu?.map((col: any, idx) => (
                    <div key={idx} className="space-y-8">
                      <h4 className="font-extrabold text-[#003580] uppercase text-[12px] tracking-[0.4em] flex items-center group/title cursor-default">
                        <span className="w-1.5 h-4 bg-[#003580] rounded-full mr-5 group-hover/title:h-6 transition-all duration-300" />
                        {col.title}
                      </h4>
                      <ul className="space-y-5 px-6">
                        {col.links.map((link: string, lIdx: number) => (
                          <li key={lIdx}>
                            <Link href="/products" className="text-[15px] font-bold text-[#1A202C] hover:text-[#003580] transition-all flex items-center group/link">
                              <div className="w-2 h-2 rounded-full border border-blue-200 mr-5 group-hover/link:bg-[#003580] group-hover/link:scale-125 transition-all duration-300" />
                              {link}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Premium Refined Footer Area */}
                <div className="mt-4 pt-10 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center space-x-12">
                    {/* Science Badge */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-[#003580]">
                        <Beaker size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-[#003580]">Research Lab</span>
                        <span className="text-[14px] font-bold text-gray-400">100+ Years Of Expertise</span>
                      </div>
                    </div>

                    {/* Quality Badge */}
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <ShieldCheck size={22} strokeWidth={1.5} />
                      </div>
                      <div>
                        <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600">Dermatology</span>
                        <span className="text-[14px] font-bold text-gray-400">Tested & Certified</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <div className="hidden xl:block text-right">
                      <span className="block text-[11px] font-black uppercase tracking-[0.2em] text-[#003580]/40 mb-1 italic">Pure Care Edition</span>
                      <span className="text-[13px] font-bold text-[#0A1F44]">Curated Selection</span>
                    </div>

                    <Link href="/products" className="group relative flex items-center justify-center">
                      {/* Animated Background Glow */}
                      <div className="absolute inset-0 bg-[#003580] rounded-[24px] blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

                      <div className="relative flex items-center space-x-6 bg-[#003580] pl-10 pr-6 py-5 rounded-[24px] hover:bg-[#0056D2] transition-all duration-500 text-white shadow-[0_20px_40px_-5px_rgba(0,53,128,0.3)]">
                        <span className="text-[12px] font-black uppercase tracking-[0.3em]">Explore Full Range</span>
                        <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#003580] group-hover:translate-x-2 transition-transform duration-500">
                          <ArrowRight size={18} strokeWidth={3} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-[90] lg:hidden flex flex-col pt-32 px-12"
          >
            <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-10 right-10 text-[#003580]">
              <X size={44} />
            </button>
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  "text-5xl font-black mb-8 tracking-tighter transition-all",
                  isActive(item.href) ? "text-[#003580] translate-x-8" : "text-gray-200"
                )}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
