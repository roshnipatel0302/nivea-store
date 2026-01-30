"use client";

import { Star, ShoppingBag, Heart, Check, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const { addToCart } = useCart();
    const [isAdded, setIsAdded] = useState(false);

    const handleAddToCart = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        addToCart(product, 1);
        setIsAdded(true);
        setTimeout(() => setIsAdded(false), 2000);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            className="group relative bg-white rounded-[40px] p-6 transition-all duration-700 ease-out hover:shadow-[0_60px_100px_-20px_rgba(0,53,128,0.18)] hover:bg-blue-50/20 border border-gray-50 flex flex-col h-full overflow-hidden"
        >
            {/* Top Row: Badge & Wishlist */}
            <div className="flex justify-between items-start mb-4 relative z-20">
                <div className="flex flex-col gap-1.5">
                    {product.isNew && (
                        <span className="bg-[#003580] text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-blue-900/10">
                            New
                        </span>
                    )}
                    {product.isBestSeller && (
                        <span className="bg-[#FF1493] text-white text-[8px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-pink-900/10">
                            Star
                        </span>
                    )}
                </div>
                <button className="p-2 rounded-full bg-white/80 backdrop-blur-sm text-gray-200 hover:text-red-500 transition-all duration-300 shadow-sm border border-gray-50">
                    <Heart size={16} strokeWidth={2.5} />
                </button>
            </div>

            {/* Product Image Stage */}
            <div className="relative aspect-square mb-6 group-hover:scale-105 transition-transform duration-700 ease-out flex items-center justify-center bg-[#F8FBFF] rounded-[24px]">
                {/* Subtle Decorative Glow */}
                <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-3xl scale-75 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 relative z-10">
                <div className="flex items-center space-x-1 mb-2">
                    <Star size={10} className="text-yellow-400 fill-current" />
                    <span className="text-[10px] font-bold text-gray-400 tracking-tight">{product.rating}</span>
                </div>

                <span className="text-[9px] font-black text-blue-400 uppercase tracking-[0.3em] mb-1 opacity-80">
                    {product.category}
                </span>

                <h3 className="text-[14px] font-black text-[#0A1F44] leading-tight mb-6 group-hover:text-[#003580] transition-colors line-clamp-2">
                    {product.name}
                </h3>

                <div className="mt-auto pt-5 border-t border-blue-50/50 flex items-center justify-between">
                    <div>
                        <span className="block text-[8px] font-black text-gray-300 uppercase tracking-widest mb-0.5">M.R.P</span>
                        <span className="text-lg font-black text-[#003580] tracking-tighter">
                            ₹{product.price}
                        </span>
                    </div>

                    <button
                        onClick={handleAddToCart}
                        className={cn(
                            "group/btn relative h-11 px-6 rounded-xl flex items-center justify-center transition-all duration-500 overflow-hidden",
                            isAdded
                                ? "bg-green-500 min-w-[110px]"
                                : "bg-[#003580] hover:bg-[#0056D2] min-w-[110px] shadow-lg shadow-blue-900/10 active:scale-95"
                        )}
                    >
                        <AnimatePresence mode="wait">
                            {isAdded ? (
                                <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center space-x-2 text-white">
                                    <Check size={18} strokeWidth={3} />
                                    <span className="text-[9px] font-black uppercase tracking-widest">Added</span>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="content"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="flex items-center space-x-2 text-white"
                                >
                                    <span className="text-[9px] font-black uppercase tracking-widest whitespace-nowrap">Add to Bag</span>
                                    <Plus size={14} strokeWidth={3} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
            </div>

            {/* Hover State: Blue Border Glow */}
            <div className="absolute inset-0 border-2 border-[#003580] rounded-[32px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
        </motion.div>
    );
};

export default ProductCard;
