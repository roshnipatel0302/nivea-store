"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Truck, CreditCard, CheckCircle2, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

const steps = [
    { id: "shipping", title: "Shipping", icon: <Truck size={20} /> },
    { id: "payment", title: "Payment", icon: <CreditCard size={20} /> },
    { id: "review", title: "Review", icon: <CheckCircle2 size={20} /> },
];

const CheckoutPage = () => {
    const { cart, subtotal, clearCart } = useCart();
    const [currentStep, setCurrentStep] = useState(0);
    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        zip: "",
        cardNumber: "",
        expiry: "",
        cvv: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Complete order
            clearCart();
            router.push("/order-confirmation");
        }
    };

    const prevStep = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <main className="min-h-screen bg-gray-50 flex flex-col">
            {/* Header */}
            <header className="bg-white border-b border-gray-100 py-6">
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    <Link href="/cart" className="flex items-center text-text-light hover:text-brand-blue transition-colors">
                        <ChevronLeft size={20} className="mr-2" />
                        <span className="font-medium">Back to Cart</span>
                    </Link>
                    <div className="text-xl font-black text-brand-blue tracking-tighter">NIVEA</div>
                    <div className="w-20" /> {/* Spacer */}
                </div>
            </header>

            <div className="flex-1 py-12">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left: Checkout Steps */}
                        <div className="lg:col-span-8">
                            {/* Stepper */}
                            <div className="flex items-center justify-between mb-12 max-w-2xl mx-auto">
                                {steps.map((step, idx) => (
                                    <React.Fragment key={step.id}>
                                        <div className="flex flex-col items-center relative z-10">
                                            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${idx <= currentStep ? "bg-brand-blue text-white shadow-lg" : "bg-gray-200 text-gray-500"
                                                }`}>
                                                {step.icon}
                                            </div>
                                            <span className={`text-xs font-bold mt-2 uppercase tracking-wider ${idx <= currentStep ? "text-brand-blue" : "text-gray-400"
                                                }`}>
                                                {step.title}
                                            </span>
                                        </div>
                                        {idx < steps.length - 1 && (
                                            <div className={`flex-1 h-0.5 mx-4 transition-all ${idx < currentStep ? "bg-brand-blue" : "bg-gray-200"
                                                }`} />
                                        )}
                                    </React.Fragment>
                                ))}
                            </div>

                            <div className="bg-white p-10 rounded-3xl border border-gray-100 shadow-xl overflow-hidden min-h-[500px]">
                                <AnimatePresence mode="wait">
                                    {currentStep === 0 && (
                                        <motion.div
                                            key="shipping"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold text-text-dark">Shipping Information</h2>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-text-light uppercase tracking-wider">First Name</label>
                                                    <input
                                                        type="text"
                                                        name="firstName"
                                                        value={formData.firstName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                                        placeholder="John"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-text-light uppercase tracking-wider">Last Name</label>
                                                    <input
                                                        type="text"
                                                        name="lastName"
                                                        value={formData.lastName}
                                                        onChange={handleInputChange}
                                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                                        placeholder="Doe"
                                                    />
                                                </div>
                                                <div className="col-span-2 space-y-2">
                                                    <label className="text-sm font-bold text-text-light uppercase tracking-wider">Email Address</label>
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                                        placeholder="john.doe@example.com"
                                                    />
                                                </div>
                                                <div className="col-span-2 space-y-2">
                                                    <label className="text-sm font-bold text-text-light uppercase tracking-wider">Address</label>
                                                    <input
                                                        type="text"
                                                        name="address"
                                                        value={formData.address}
                                                        onChange={handleInputChange}
                                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                                        placeholder="Street address, Apartment, etc."
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-text-light uppercase tracking-wider">City</label>
                                                    <input
                                                        type="text"
                                                        name="city"
                                                        value={formData.city}
                                                        onChange={handleInputChange}
                                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                                        placeholder="New York"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-text-light uppercase tracking-wider">ZIP Code</label>
                                                    <input
                                                        type="text"
                                                        name="zip"
                                                        value={formData.zip}
                                                        onChange={handleInputChange}
                                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                                        placeholder="10001"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 1 && (
                                        <motion.div
                                            key="payment"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold text-text-dark">Payment Details</h2>
                                            <div className="bg-brand-blue text-white p-8 rounded-2xl relative overflow-hidden mb-8">
                                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2" />
                                                <div className="relative z-10">
                                                    <div className="flex justify-between items-start mb-12">
                                                        <span className="text-lg font-bold">Credit / Debit Card</span>
                                                        <div className="w-12 h-8 bg-white/20 rounded" />
                                                    </div>
                                                    <p className="text-2xl font-mono tracking-widest mb-6">
                                                        {formData.cardNumber ? formData.cardNumber : "**** **** **** ****"}
                                                    </p>
                                                    <div className="flex justify-between text-sm uppercase tracking-wider">
                                                        <div>
                                                            <p className="text-white/60 mb-1">Card Holder</p>
                                                            <p className="font-bold">{formData.firstName} {formData.lastName}</p>
                                                        </div>
                                                        <div>
                                                            <p className="text-white/60 mb-1">Expires</p>
                                                            <p className="font-bold">{formData.expiry ? formData.expiry : "MM/YY"}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="col-span-2 space-y-2">
                                                    <label className="text-sm font-bold text-text-light uppercase tracking-wider">Card Number</label>
                                                    <input
                                                        type="text"
                                                        name="cardNumber"
                                                        value={formData.cardNumber}
                                                        onChange={handleInputChange}
                                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                                        placeholder="4242 4242 4242 4242"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-text-light uppercase tracking-wider">Expiry Date</label>
                                                    <input
                                                        type="text"
                                                        name="expiry"
                                                        value={formData.expiry}
                                                        onChange={handleInputChange}
                                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                                        placeholder="MM/YY"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-bold text-text-light uppercase tracking-wider">CVV</label>
                                                    <input
                                                        type="password"
                                                        name="cvv"
                                                        value={formData.cvv}
                                                        onChange={handleInputChange}
                                                        className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                                        placeholder="***"
                                                    />
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                    {currentStep === 2 && (
                                        <motion.div
                                            key="review"
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            className="space-y-8"
                                        >
                                            <h2 className="text-2xl font-bold text-text-dark">Order Review</h2>
                                            <div className="space-y-6">
                                                <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
                                                    <h4 className="font-bold text-brand-blue uppercase text-xs tracking-widest mb-4">Ship to:</h4>
                                                    <p className="font-medium text-text-dark">{formData.firstName} {formData.lastName}</p>
                                                    <p className="text-text-light">{formData.address}</p>
                                                    <p className="text-text-light">{formData.city}, {formData.zip}</p>
                                                    <p className="text-text-light">{formData.email}</p>
                                                </div>
                                                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                                    <h4 className="font-bold text-text-light uppercase text-xs tracking-widest mb-4">Payment Method:</h4>
                                                    <div className="flex items-center space-x-3">
                                                        <CreditCard size={20} className="text-brand-blue" />
                                                        <p className="font-medium text-text-dark">Ending in {formData.cardNumber.slice(-4)}</p>
                                                    </div>
                                                </div>
                                                <div className="space-y-4">
                                                    <h4 className="font-bold text-text-light uppercase text-xs tracking-widest">Order Items:</h4>
                                                    {cart.map((item) => (
                                                        <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                                                            <div className="flex items-center space-x-4">
                                                                <span className="font-bold text-brand-blue">x{item.quantity}</span>
                                                                <span className="text-text-dark font-medium">{item.name}</span>
                                                            </div>
                                                            <span className="font-bold">₹{item.price * item.quantity}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                <div className="mt-12 flex justify-between">
                                    <button
                                        onClick={prevStep}
                                        disabled={currentStep === 0}
                                        className={`px-8 py-4 rounded-2xl font-bold transition-all ${currentStep === 0 ? "opacity-0 pointer-events-none" : "text-text-light hover:text-brand-blue hover:bg-gray-50"
                                            }`}
                                    >
                                        Previous
                                    </button>
                                    <button
                                        onClick={nextStep}
                                        className="bg-brand-blue text-white px-12 py-4 rounded-2xl font-bold hover:bg-brand-accent transition-all shadow-xl shadow-brand-blue/20"
                                    >
                                        {currentStep === steps.length - 1 ? "Place Order" : "Continue"}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right: Summary Sidebar */}
                        <div className="lg:col-span-4">
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-lg sticky top-12">
                                <h3 className="text-xl font-bold text-text-dark mb-6 flex items-center">
                                    <ShoppingBag size={20} className="mr-2 text-brand-blue" />
                                    Your Order
                                </h3>

                                <div className="max-h-64 overflow-y-auto mb-6 pr-2 space-y-4 custom-scrollbar">
                                    {cart.map((item) => (
                                        <div key={item.id} className="flex space-x-4">
                                            <div className="relative w-16 h-16 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                                                <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-bold text-text-dark line-clamp-1">{item.name}</h4>
                                                <div className="flex justify-between mt-1">
                                                    <span className="text-xs text-text-light">Qty: {item.quantity}</span>
                                                    <span className="text-sm font-bold text-brand-blue">₹{item.price * item.quantity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-3 pt-6 border-t border-gray-100">
                                    <div className="flex justify-between text-sm text-text-light">
                                        <span>Subtotal</span>
                                        <span className="font-bold">₹{subtotal}</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-text-light">
                                        <span>Shipping</span>
                                        <span className="text-green-600 font-bold">Free</span>
                                    </div>
                                    <div className="flex justify-between text-sm text-text-light">
                                        <span>Estimated Tax</span>
                                        <span className="font-bold">₹{Math.round(subtotal * 0.18)}</span>
                                    </div>
                                    <div className="border-t border-gray-100 pt-4 mt-2 flex justify-between items-center">
                                        <span className="font-bold text-text-dark">Total</span>
                                        <span className="text-2xl font-black text-brand-blue">₹{subtotal + Math.round(subtotal * 0.18)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default CheckoutPage;
