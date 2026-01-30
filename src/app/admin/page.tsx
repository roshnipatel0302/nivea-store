"use client";

import React, { useState } from "react";
import {
    BarChart3,
    Package,
    ShoppingBag,
    Users,
    Settings,
    Search,
    Bell,
    Plus,
    MoreVertical,
    ArrowUpRight,
    ArrowDownRight
} from "lucide-react";
import { products as initialProducts } from "@/lib/data";
import Image from "next/image";

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState("overview");

    const stats = [
        { title: "Total Sales", value: "₹4,25,000", change: "+12.5%", isUp: true, icon: <BarChart3 className="text-blue-500" /> },
        { title: "Total Orders", value: "1,250", change: "+8.2%", isUp: true, icon: <ShoppingBag className="text-purple-500" /> },
        { title: "Total Customers", value: "8,420", change: "-2.4%", isUp: false, icon: <Users className="text-orange-500" /> },
        { title: "Active Products", value: "48", change: "+1", isUp: true, icon: <Package className="text-green-500" /> },
    ];

    const recentOrders = [
        { id: "#ORD-7421", customer: "Roshni Patel", date: "Jan 30, 2026", total: "₹1,250", status: "Delivered" },
        { id: "#ORD-7422", customer: "John Doe", date: "Jan 29, 2026", total: "₹850", status: "Shipped" },
        { id: "#ORD-7423", customer: "Jane Smith", date: "Jan 29, 2026", total: "₹2,100", status: "Pending" },
        { id: "#ORD-7424", customer: "Mike Jones", date: "Jan 28, 2026", total: "₹450", status: "Cancelled" },
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <aside className="w-64 bg-brand-blue text-white flex flex-col p-6">
                <div className="flex items-center space-x-3 mb-12">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue font-bold text-xs tracking-tighter">
                        NIVEA
                    </div>
                    <span className="font-bold tracking-wider">ADMIN</span>
                </div>

                <nav className="flex-1 space-y-2">
                    {[
                        { id: "overview", name: "Overview", icon: <BarChart3 size={20} /> },
                        { id: "products", name: "Products", icon: <Package size={20} /> },
                        { id: "orders", name: "Orders", icon: <ShoppingBag size={20} /> },
                        { id: "customers", name: "Customers", icon: <Users size={20} /> },
                        { id: "settings", name: "Settings", icon: <Settings size={20} /> },
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${activeTab === item.id ? "bg-white/10 text-white font-bold" : "text-blue-100 hover:bg-white/5"
                                }`}
                        >
                            {item.icon}
                            <span>{item.name}</span>
                        </button>
                    ))}
                </nav>

                <div className="mt-auto pt-6 border-t border-white/10">
                    <div className="flex items-center space-x-3 px-4 py-3">
                        <div className="w-8 h-8 rounded-full bg-blue-400" />
                        <div className="flex-1 overflow-hidden">
                            <p className="text-sm font-bold truncate">Admin User</p>
                            <p className="text-xs text-blue-200 truncate">admin@nivea.in</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col overflow-hidden">
                {/* Header */}
                <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-10">
                    <div className="relative w-96">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            placeholder="Search anything..."
                            className="w-full pl-12 pr-6 py-2.5 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-brand-blue/10 border border-gray-100"
                        />
                    </div>

                    <div className="flex items-center space-x-6">
                        <button className="relative p-2 text-gray-400 hover:text-brand-blue transition-colors">
                            <Bell size={22} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
                        </button>
                        <div className="h-8 w-px bg-gray-100" />
                        <button className="bg-brand-blue text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center space-x-2 hover:bg-brand-accent transition-all">
                            <Plus size={18} />
                            <span>Add Product</span>
                        </button>
                    </div>
                </header>

                {/* Scrollable Area */}
                <div className="flex-1 overflow-y-auto p-10 custom-scrollbar">
                    {activeTab === "overview" && (
                        <div className="space-y-10">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-black text-text-dark">Dashboard Overview</h1>
                                    <p className="text-text-light">Welcome back, here's what's happening today.</p>
                                </div>
                                <div className="flex bg-white rounded-xl border border-gray-100 p-1">
                                    <button className="px-4 py-1.5 text-sm font-bold bg-brand-blue text-white rounded-lg transition-all">Today</button>
                                    <button className="px-4 py-1.5 text-sm font-bold text-text-light hover:text-brand-blue rounded-lg transition-all">This Week</button>
                                    <button className="px-4 py-1.5 text-sm font-bold text-text-light hover:text-brand-blue rounded-lg transition-all">This Month</button>
                                </div>
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                {stats.map((stat, idx) => (
                                    <div key={idx} className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-gray-50 rounded-2xl">
                                                {stat.icon}
                                            </div>
                                            <div className={`flex items-center space-x-1 text-xs font-bold ${stat.isUp ? "text-green-500" : "text-red-500"}`}>
                                                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                                <span>{stat.change}</span>
                                            </div>
                                        </div>
                                        <p className="text-sm font-bold text-text-light uppercase tracking-wider mb-1">{stat.title}</p>
                                        <p className="text-2xl font-black text-text-dark">{stat.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Recent Orders Table */}
                                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="p-8 border-b border-gray-50 flex items-center justify-between">
                                        <h3 className="text-xl font-bold text-text-dark">Recent Orders</h3>
                                        <button className="text-sm font-bold text-brand-blue hover:underline">View All</button>
                                    </div>
                                    <table className="w-full">
                                        <thead>
                                            <tr className="bg-gray-50 text-left text-xs font-bold text-text-light uppercase tracking-widest">
                                                <th className="px-8 py-4">Order ID</th>
                                                <th className="px-8 py-4">Customer</th>
                                                <th className="px-8 py-4">Date</th>
                                                <th className="px-8 py-4">Status</th>
                                                <th className="px-8 py-4 text-right">Total</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-50">
                                            {recentOrders.map((order) => (
                                                <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                                                    <td className="px-8 py-5 font-bold text-brand-blue">{order.id}</td>
                                                    <td className="px-8 py-5 font-medium">{order.customer}</td>
                                                    <td className="px-8 py-5 text-text-light text-sm">{order.date}</td>
                                                    <td className="px-8 py-5">
                                                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${order.status === "Delivered" ? "bg-green-100 text-green-700" :
                                                                order.status === "Shipped" ? "bg-blue-100 text-blue-700" :
                                                                    order.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                                                                        "bg-red-100 text-red-700"
                                                            }`}>
                                                            {order.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-5 text-right font-black text-text-dark">{order.total}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                                {/* Popular Products */}
                                <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                    <div className="p-8 border-b border-gray-50">
                                        <h3 className="text-xl font-bold text-text-dark">Popular Products</h3>
                                    </div>
                                    <div className="p-8 space-y-6">
                                        {initialProducts.slice(0, 3).map((product) => (
                                            <div key={product.id} className="flex items-center space-x-4">
                                                <div className="relative w-12 h-12 bg-gray-50 rounded-xl overflow-hidden flex-shrink-0">
                                                    <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
                                                </div>
                                                <div className="flex-1 overflow-hidden">
                                                    <h4 className="text-sm font-bold text-text-dark truncate">{product.name}</h4>
                                                    <p className="text-xs text-text-light">{product.category}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-sm font-black text-brand-blue">₹{product.price}</p>
                                                    <p className="text-[10px] text-green-500 font-bold uppercase tracking-tighter">42 Sales</p>
                                                </div>
                                            </div>
                                        ))}
                                        <button className="w-full py-3 mt-4 border-2 border-dashed border-gray-200 rounded-2xl text-sm font-bold text-text-light hover:border-brand-blue hover:text-brand-blue transition-all">
                                            View All Products
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === "products" && (
                        <div className="space-y-10">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h1 className="text-3xl font-black text-text-dark">Product Management</h1>
                                    <p className="text-text-light">Manage your inventory, prices and descriptions.</p>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gray-50 text-left text-xs font-bold text-text-light uppercase tracking-widest">
                                            <th className="px-8 py-4">Product</th>
                                            <th className="px-8 py-4">Category</th>
                                            <th className="px-8 py-4">Price</th>
                                            <th className="px-8 py-4">Rating</th>
                                            <th className="px-8 py-4 text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-50">
                                        {initialProducts.map((product) => (
                                            <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                                <td className="px-8 py-5">
                                                    <div className="flex items-center space-x-4">
                                                        <div className="relative w-10 h-10 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0">
                                                            <Image src={product.image} alt={product.name} fill className="object-contain p-1" />
                                                        </div>
                                                        <span className="font-bold text-text-dark text-sm">{product.name}</span>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5 text-text-light text-sm">{product.category}</td>
                                                <td className="px-8 py-5 font-black text-brand-blue text-sm">₹{product.price}</td>
                                                <td className="px-8 py-5 text-sm">
                                                    <span className="font-bold">{product.rating}</span>
                                                    <span className="text-text-light text-xs ml-1">({product.reviews})</span>
                                                </td>
                                                <td className="px-8 py-5 text-right">
                                                    <button className="p-2 text-gray-400 hover:text-brand-blue transition-colors">
                                                        <MoreVertical size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
};

export default AdminDashboard;
