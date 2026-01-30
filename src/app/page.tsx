import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import QuickNav from "@/components/home/QuickNav";
import Categories from "@/components/home/Categories";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SkinAdvice from "@/components/home/SkinAdvice";

export default function Home() {
  return (
    <main className="min-h-screen bg-white selection:bg-[#003580] selection:text-white">
      <Navbar />
      <Hero />
      <QuickNav />
      <Categories />
      <FeaturedProducts />
      <SkinAdvice />

      {/* Simplified & Attractive Newsletter Section */}
      <section className="py-24 bg-[#F8FBFF]">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="max-w-2xl mx-auto p-12 bg-white rounded-[40px] shadow-[0_20px_50px_-15px_rgba(0,53,128,0.05)] border border-gray-100">
            <h2 className="text-3xl md:text-4xl font-black text-[#003580] uppercase tracking-tighter mb-4">
              NIVEA Inner Circle.
            </h2>
            <p className="text-gray-500 font-medium mb-10 leading-relaxed px-4">
              Join for exclusive skincare science, laboratory secrets, and early access to new essentials.
            </p>

            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your Professional Email"
                className="flex-1 px-8 py-4 rounded-2xl bg-[#F8FBFF] border-none text-[#0A1F44] focus:ring-2 focus:ring-[#003580]/10 placeholder:text-gray-400 font-bold text-xs"
              />
              <button className="bg-[#003580] text-white font-black px-10 py-4 rounded-2xl hover:bg-[#0056D2] transition-all uppercase tracking-widest text-[10px] shadow-lg shadow-blue-900/10">
                Join Now
              </button>
            </form>

            <p className="mt-8 text-[9px] font-black uppercase tracking-[0.2em] text-gray-300">
              Dermatologically Trusted &bull; Data Secured
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
