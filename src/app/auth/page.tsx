"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Auth logic here
        console.log("Auth attempt", formData);
    };

    return (
        <main className="min-h-screen bg-[#f8fbff] flex flex-col">
            <Navbar />

            <div className="flex-1 flex items-center justify-center pt-32 pb-20 px-6">
                <div className="w-full max-w-[1000px] bg-white rounded-[40px] shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100">
                    {/* Left: Branding/Info */}
                    <div className="md:w-1/2 bg-brand-blue p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-xl" />

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-brand-blue font-bold text-lg tracking-tighter mb-12">
                                NIVEA
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                                {isLogin ? "Welcome Back to the Family" : "Join the World of NIVEA"}
                            </h2>
                            <p className="text-blue-100 text-lg">
                                Access your orders, track deliveries, and get personalized skincare recommendations.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-4">
                            <div className="flex items-center space-x-3 text-sm text-blue-200">
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                <span>Exclusive member discounts</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-blue-200">
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                <span>Personalized skin care tips</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-blue-200">
                                <div className="w-1.5 h-1.5 bg-white rounded-full" />
                                <span>Faster checkout experience</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="md:w-1/2 p-12 lg:p-16 flex flex-col justify-center">
                        <div className="mb-10">
                            <h3 className="text-3xl font-black text-text-dark mb-2">
                                {isLogin ? "Login" : "Create Account"}
                            </h3>
                            <p className="text-text-light">
                                {isLogin ? "Don't have an account?" : "Already have an account?"}
                                <button
                                    onClick={() => setIsLogin(!isLogin)}
                                    className="ml-2 text-brand-blue font-bold hover:underline"
                                >
                                    {isLogin ? "Sign up now" : "Log in here"}
                                </button>
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <AnimatePresence mode="wait">
                                {!isLogin && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: "auto" }}
                                        exit={{ opacity: 0, height: 0 }}
                                        className="space-y-2"
                                    >
                                        <label className="text-xs font-bold text-text-light uppercase tracking-widest pl-1">Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="text"
                                                placeholder="John Doe"
                                                className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                required={!isLogin}
                                            />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            <div className="space-y-2">
                                <label className="text-xs font-bold text-text-light uppercase tracking-widest pl-1">Email Address</label>
                                <div className="relative">
                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full pl-12 pr-6 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center pr-1">
                                    <label className="text-xs font-bold text-text-light uppercase tracking-widest pl-1">Password</label>
                                    {isLogin && (
                                        <Link href="#" className="text-xs font-bold text-brand-blue hover:underline">Forgot?</Link>
                                    )}
                                </div>
                                <div className="relative">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="w-full pl-12 pr-12 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-brand-blue/20 transition-all"
                                        value={formData.password}
                                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-blue transition-colors"
                                    >
                                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                    </button>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-brand-blue text-white py-5 rounded-2xl font-bold text-lg hover:bg-brand-accent transition-all shadow-xl shadow-brand-blue/20 flex items-center justify-center space-x-3 mt-8"
                            >
                                <span>{isLogin ? "Log In" : "Create Account"}</span>
                                <ArrowRight size={22} />
                            </button>
                        </form>

                        <div className="mt-10 flex items-center space-x-4">
                            <div className="flex-1 h-px bg-gray-100" />
                            <span className="text-xs font-bold text-text-light uppercase tracking-widest">Or continue with</span>
                            <div className="flex-1 h-px bg-gray-100" />
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center space-x-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all">
                                <div className="w-5 h-5 bg-red-100 rounded-full" />
                                <span className="text-sm font-bold text-text-dark">Google</span>
                            </button>
                            <button className="flex items-center justify-center space-x-3 py-4 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-all">
                                <div className="w-5 h-5 bg-blue-100 rounded-full" />
                                <span className="text-sm font-bold text-text-dark">Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
};

export default AuthPage;
