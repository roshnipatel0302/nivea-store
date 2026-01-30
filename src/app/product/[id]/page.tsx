"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Star, ShieldCheck, Truck, RotateCcw, Plus, Minus, ShoppingCart, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/lib/data";
import ProductCard from "@/components/products/ProductCard";

const ProductDetails = () => {
    const params = useParams();
    const id = params.id as string;
    const product = products.find((p) => p.id === id) || products[0];

    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState("description");

    const relatedProducts = products.filter((p) => p.id !== id).slice(0, 4);

    return (
        <main className="min-h-screen bg-white">
            <Navbar />

            <div className="pt-24 pb-12">
                <div className="container mx-auto px-6 md:px-12">
                    {/* Breadcrumbs */}
                    <div className="flex items-center space-x-2 text-sm text-text-light mb-8">
                        <Link href="/" className="hover:text-brand-blue">Home</Link>
                        <span>/</span>
                        <Link href="/products" className="hover:text-brand-blue">Products</Link>
                        <span>/</span>
                        <span className="text-text-dark font-medium">{product.name}</span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left: Product Images */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="relative aspect-square rounded-3xl bg-[#f8fbff] overflow-hidden border border-brand-light-blue"
                            >
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain p-12"
                                />
                            </motion.div>

                            <div className="grid grid-cols-4 gap-4">
                                {[...Array(4)].map((_, i) => (
                                    <div key={i} className="aspect-square rounded-xl bg-[#f8fbff] border border-gray-100 cursor-pointer hover:border-brand-blue transition-colors relative overflow-hidden">
                                        <Image
                                            src={product.image}
                                            alt={product.name}
                                            fill
                                            className="object-contain p-2"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Product Info */}
                        <div className="flex flex-col">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="space-y-6"
                            >
                                <div>
                                    <span className="text-brand-blue font-bold uppercase tracking-widest text-sm">{product.category}</span>
                                    <h1 className="text-4xl font-bold text-text-dark mt-2">{product.name}</h1>
                                </div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={18}
                                                className={i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                        <span className="ml-2 font-bold text-text-dark">{product.rating}</span>
                                    </div>
                                    <span className="text-text-light">|</span>
                                    <button className="text-text-light hover:text-brand-blue underline">{product.reviews} Reviews</button>
                                </div>

                                <div className="flex items-baseline space-x-3">
                                    <span className="text-4xl font-black text-brand-blue">₹{product.price}</span>
                                    <span className="text-text-light line-through">₹{Math.round(product.price * 1.2)}</span>
                                    <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">20% OFF</span>
                                </div>

                                <p className="text-text-light leading-relaxed">
                                    {product.description} This gentle yet effective formula is designed to meet your skin's unique needs, leaving it feeling soft, hydrated, and protected all day long.
                                </p>

                                {/* Quantity & Add to Cart */}
                                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 py-6 border-y border-gray-100">
                                    <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
                                        <button
                                            onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                            className="p-2 hover:text-brand-blue"
                                        >
                                            <Minus size={18} />
                                        </button>
                                        <span className="w-12 text-center font-bold text-lg">{quantity}</span>
                                        <button
                                            onClick={() => setQuantity(quantity + 1)}
                                            className="p-2 hover:text-brand-blue"
                                        >
                                            <Plus size={18} />
                                        </button>
                                    </div>

                                    <button className="flex-1 w-full bg-brand-blue text-white py-4 rounded-full font-bold text-lg hover:bg-brand-accent transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center space-x-3">
                                        <ShoppingCart size={22} />
                                        <span>Add to Cart - ₹{product.price * quantity}</span>
                                    </button>

                                    <div className="flex space-x-3">
                                        <button className="p-4 border-2 border-gray-100 rounded-full hover:border-brand-blue hover:text-brand-blue transition-all">
                                            <Heart size={20} />
                                        </button>
                                        <button className="p-4 border-2 border-gray-100 rounded-full hover:border-brand-blue hover:text-brand-blue transition-all">
                                            <Share2 size={20} />
                                        </button>
                                    </div>
                                </div>

                                {/* Features */}
                                <div className="grid grid-cols-3 gap-4 pt-6">
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-text-light">Dermatologically Tested</span>
                                    </div>
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue">
                                            <Truck size={24} />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-text-light">Free Shipping</span>
                                    </div>
                                    <div className="flex flex-col items-center text-center space-y-2">
                                        <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-brand-blue">
                                            <RotateCcw size={24} />
                                        </div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-text-light">30 Day Returns</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Tabs Section */}
                    <div className="mt-24">
                        <div className="flex border-b border-gray-200">
                            {["description", "ingredients", "usage", "reviews"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-8 py-4 text-sm font-bold uppercase tracking-widest transition-all relative ${activeTab === tab ? "text-brand-blue" : "text-text-light hover:text-text-dark"
                                        }`}
                                >
                                    {tab}
                                    {activeTab === tab && (
                                        <motion.div
                                            layoutId="tab-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-1 bg-brand-blue"
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div className="py-12 max-w-4xl">
                            {activeTab === "description" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
                                    <h3 className="text-2xl font-bold text-text-dark">Product Benefits</h3>
                                    <p className="text-text-light leading-relaxed">
                                        NIVEA's unique formula is specifically designed to provide long-lasting hydration while being gentle on your skin.
                                        Whether you have dry, sensitive, or combination skin, this product provides the perfect balance of care and protection.
                                    </p>
                                    <ul className="list-disc pl-5 space-y-2 text-text-light">
                                        <li>Intensive care and protection</li>
                                        <li>Supports the skin's natural regeneration</li>
                                        <li>Quickly absorbed without leaving a greasy feeling</li>
                                        <li>Highly effective moisturizing formula</li>
                                    </ul>
                                </motion.div>
                            )}
                            {activeTab === "ingredients" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <p className="text-text-light leading-relaxed font-mono text-sm">
                                        Aqua, Paraffinum Liquidum, Cera Microcristallina, Glycerin, Lanolin Alcohol (Eucerit®), Paraffin, Panthenol, Magnesium Sulfate, Decyl Oleate, Octyldodecanol, Aluminum Stearates, Citric Acid, Magnesium Stearate, Limonene, Geraniol, Hydroxycitronellal, Linalool, Citronellol, Benzyl Benzoate, Cinnamyl Alcohol, Parfum.
                                    </p>
                                </motion.div>
                            )}
                            {activeTab === "usage" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                                    <p className="text-text-light leading-relaxed">
                                        Apply daily on your face, body and hands. Massage gently into the skin. For best results, use after showering when skin is most receptive to hydration.
                                    </p>
                                </motion.div>
                            )}
                            {activeTab === "reviews" && (
                                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-2xl font-bold text-text-dark">Customer Reviews</h3>
                                        <button className="bg-brand-blue text-white px-6 py-2 rounded-full font-bold hover:bg-brand-accent transition-all">
                                            Write a Review
                                        </button>
                                    </div>
                                    {/* Mock Review */}
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="border-b border-gray-100 pb-8 last:border-0">
                                            <div className="flex items-center space-x-4 mb-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-brand-blue font-bold">
                                                    RP
                                                </div>
                                                <div>
                                                    <h4 className="font-bold text-text-dark">Roshni Patel</h4>
                                                    <div className="flex items-center space-x-2">
                                                        <div className="flex">
                                                            {[...Array(5)].map((_, j) => (
                                                                <Star key={j} size={12} className="fill-yellow-400 text-yellow-400" />
                                                            ))}
                                                        </div>
                                                        <span className="text-xs text-text-light font-medium">Verified Purchase</span>
                                                    </div>
                                                </div>
                                                <span className="ml-auto text-xs text-text-light">2 days ago</span>
                                            </div>
                                            <p className="text-text-light">
                                                Absolutely love this product! It's been a staple in my routine for years.
                                                It keeps my skin hydrated all day without feeling heavy. Highly recommend!
                                            </p>
                                        </div>
                                    ))}
                                </motion.div>
                            )}
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mt-24 border-t border-gray-100 pt-24">
                        <h2 className="text-3xl font-bold text-text-dark mb-12">You Might Also Like</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                            {relatedProducts.map((p) => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default ProductDetails;
