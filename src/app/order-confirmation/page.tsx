"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, Package, ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const OrderConfirmationPage = () => {
    const orderId = "NIV-" + Math.random().toString(36).substr(2, 9).toUpperCase();

    return (
        <main className="min-h-screen bg-gray-50">
            <Navbar />

            <div className="pt-40 pb-24">
                <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-white p-12 rounded-3xl border border-gray-100 shadow-2xl text-center"
                    >
                        <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                            <CheckCircle2 size={64} />
                        </div>

                        <h1 className="text-4xl font-bold text-text-dark mb-4">Order Confirmed!</h1>
                        <p className="text-text-light mb-8 text-lg">
                            Thank you for your purchase. Your order has been placed successfully and is being processed.
                        </p>

                        <div className="bg-gray-50 rounded-2xl p-6 mb-10 inline-block">
                            <p className="text-xs font-bold text-text-light uppercase tracking-widest mb-2">Order ID</p>
                            <p className="text-2xl font-black text-brand-blue">{orderId}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                            <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-start space-x-4 text-left">
                                <Package className="text-brand-blue flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-text-dark">Estimated Delivery</h4>
                                    <p className="text-sm text-text-light">Feb 5 - Feb 7, 2026</p>
                                </div>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 flex items-start space-x-4 text-left">
                                <Download className="text-gray-400 flex-shrink-0" size={24} />
                                <div>
                                    <h4 className="font-bold text-text-dark">Order Invoice</h4>
                                    <button className="text-sm text-brand-blue hover:underline font-medium">Download PDF</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                            <Link href="/">
                                <button className="bg-brand-blue text-white px-10 py-4 rounded-full font-bold hover:bg-brand-accent transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center space-x-2">
                                    <span>Continue Shopping</span>
                                    <ArrowRight size={20} />
                                </button>
                            </Link>
                            <Link href="/dashboard">
                                <button className="border-2 border-brand-blue text-brand-blue px-10 py-4 rounded-full font-bold hover:bg-brand-light-blue transition-all">
                                    Track Order
                                </button>
                            </Link>
                        </div>
                    </motion.div>

                    <p className="text-center mt-12 text-text-light text-sm">
                        Need help with your order? <Link href="/contact" className="text-brand-blue font-bold hover:underline">Contact our support team</Link>
                    </p>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default OrderConfirmationPage;
