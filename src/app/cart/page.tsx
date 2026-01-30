"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ShoppingCart } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";

const CartPage = () => {
    const { cart, removeFromCart, updateQuantity, subtotal, itemCount } = useCart();

    if (cart.length === 0) {
        return (
            <main className="min-h-screen bg-white">
                <Navbar />
                <div className="pt-48 pb-24 flex flex-col items-center justify-center text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-32 h-32 bg-[#F8FBFF] rounded-full flex items-center justify-center text-[#003580] mb-10 shadow-soft"
                    >
                        <ShoppingBag size={56} />
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl font-black text-[#003580] mb-6 tracking-tighter uppercase">Your Bag is Empty</h1>
                    <p className="text-gray-500 mb-12 max-w-md font-medium text-lg leading-relaxed">
                        Discover the perfect NIVEA solutions for your skin's unique needs and add them to your collection.
                    </p>
                    <Link href="/products">
                        <button className="btn-nivea">
                            Explore Products
                        </button>
                    </Link>
                </div>
                <Footer />
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[#F8FBFF]">
            <Navbar />

            <div className="pt-48 pb-32">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex items-end justify-between mb-16 px-4">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-black text-[#003580] tracking-tighter uppercase mb-2">Shopping Bag</h1>
                            <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs">Total Items: {itemCount}</p>
                        </div>
                        <Link href="/products" className="text-[10px] font-black uppercase tracking-widest text-[#003580] border-b-2 border-[#003580]/20 pb-1 hover:border-[#003580] transition-all">
                            Continue Shopping
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-8">
                            <AnimatePresence mode="popLayout">
                                {cart.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        layout
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, scale: 0.9 }}
                                        className="bg-white p-8 rounded-[40px] border border-gray-50 flex flex-col sm:flex-row items-center shadow-soft hover:shadow-premium transition-all duration-500"
                                    >
                                        <div className="relative w-32 h-32 bg-[#f8fbff] rounded-[30px] overflow-hidden flex-shrink-0 group">
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="mt-6 sm:mt-0 sm:ml-10 flex-1 w-full text-center sm:text-left">
                                            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                                                <div>
                                                    <p className="text-[10px] font-black text-[#003580] uppercase tracking-widest mb-1">{item.category}</p>
                                                    <Link href={`/product/${item.id}`}>
                                                        <h3 className="text-xl font-black text-[#0A1F44] hover:text-[#003580] transition-colors line-clamp-2">{item.name}</h3>
                                                    </Link>
                                                </div>
                                                <button
                                                    onClick={() => removeFromCart(item.id)}
                                                    className="w-10 h-10 rounded-full border border-red-50 text-red-100 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all self-end sm:self-start"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>

                                            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end mt-8 gap-6">
                                                <div className="flex items-center bg-[#f8fbff] rounded-2xl p-1 border border-blue-50">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-[#003580] hover:bg-white hover:shadow-sm transition-all"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="w-12 text-center font-black text-lg text-[#003580]">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-[#003580] hover:bg-white hover:shadow-sm transition-all"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                                <div className="text-center sm:text-right">
                                                    <p className="text-xs text-gray-400 font-bold mb-1 uppercase tracking-widest">Unit Price: ₹{item.price}</p>
                                                    <span className="text-3xl font-black text-[#003580]">₹{item.price * item.quantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Summary */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white p-10 rounded-[50px] border border-gray-50 shadow-premium sticky top-40"
                            >
                                <h2 className="text-2xl font-black text-[#0A1F44] mb-10 uppercase tracking-tighter">Order Summary</h2>

                                <div className="space-y-6 mb-10">
                                    <div className="flex justify-between text-sm font-bold">
                                        <span className="text-gray-400 uppercase tracking-widest">Bag Subtotal</span>
                                        <span className="text-[#0A1F44]">₹{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-bold">
                                        <span className="text-gray-400 uppercase tracking-widest">Premium Shipping</span>
                                        <span className="text-green-500 uppercase tracking-widest">Free</span>
                                    </div>
                                    <div className="flex justify-between text-sm font-bold">
                                        <span className="text-gray-400 uppercase tracking-widest">GST (18%)</span>
                                        <span className="text-[#0A1F44]">₹{Math.round(subtotal * 0.18)}</span>
                                    </div>
                                    <div className="border-t border-gray-100 pt-8 mt-8 flex justify-between items-center">
                                        <span className="text-lg font-black text-[#0A1F44] uppercase tracking-tighter">Total Amount</span>
                                        <span className="text-4xl font-black text-[#003580]">₹{subtotal + Math.round(subtotal * 0.18)}</span>
                                    </div>
                                </div>

                                <Link href="/checkout">
                                    <button className="w-full bg-[#003580] text-white py-6 rounded-[30px] font-black text-xs uppercase tracking-[0.3em] hover:bg-[#0056D2] transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center group">
                                        <span>Proceed To Checkout</span>
                                        <ArrowRight size={20} className="ml-3 group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </Link>

                                <div className="mt-10 pt-10 border-t border-gray-50 flex items-center justify-center space-x-6 grayscale opacity-40">
                                    <div className="flex flex-col items-center">
                                        <div className="h-4 w-12 bg-gray-200 rounded-sm mb-1" />
                                        <span className="text-[6px] font-bold">VISA</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="h-4 w-12 bg-gray-200 rounded-sm mb-1" />
                                        <span className="text-[6px] font-bold">MASTERCARD</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <div className="h-4 w-12 bg-gray-200 rounded-sm mb-1" />
                                        <span className="text-[6px] font-bold">PAYPAL</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default CartPage;
