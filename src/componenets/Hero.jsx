import React from "react";
import { Play, Sparkles, Coffee, Heart, Award } from "lucide-react";
import { Link } from "react-router";
import heroImg from "../assets/hero.png";

export default function HeroHome() {
  const categories = [
    {
      name: "Cupcakes",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Doughnuts",
      image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Pastries",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Breads",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="w-full font-sans bg-[#FAF6F0] text-stone-800 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-12 relative">
        
        {/* Hero Left Content */}
        <div className="w-full lg:w-1/2 space-y-6 z-10 text-center lg:text-left">
          <span className="font-serif italic text-2xl text-amber-600 block">
            Freshly Baked
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2D122D] leading-[1.15] tracking-tight">
            Goodness, <br />
            <span className="text-amber-500">Every Day</span>
          </h1>

          <p className="text-stone-600 text-sm sm:text-base max-w-md mx-auto lg:mx-0 leading-relaxed">
            From warm breads to delightful pastries, made with love and the finest ingredients.
          </p>

          {/* Action Buttons */}
          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
            <Link
              to="/products"
              className="bg-[#2D122D] text-white font-semibold text-sm px-7 py-3 rounded-full hover:bg-[#3d1a3d] transition shadow-md"
            >
              Order Now
            </Link>

            <button className="flex items-center gap-2 text-xs font-bold text-[#2D122D] hover:text-amber-600 transition group">
              <span className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition shadow-xs">
                <Play size={12} className="fill-current ml-0.5" />
              </span>
              Watch Our Story
            </button>
          </div>

          {/* Stat Badges Floating Grid */}
          <div className="pt-8 grid grid-cols-3 gap-3 max-w-lg mx-auto lg:mx-0">
            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-stone-200/50 shadow-xs text-center flex flex-col items-center">
              <span className="text-lg font-black text-[#2D122D]">200+</span>
              <span className="text-[10px] text-stone-500 font-medium">Daily Orders</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-stone-200/50 shadow-xs text-center flex flex-col items-center">
              <span className="text-lg font-black text-[#2D122D]">50+</span>
              <span className="text-[10px] text-stone-500 font-medium">Delicious Items</span>
            </div>

            <div className="bg-white/80 backdrop-blur-xs p-3.5 rounded-2xl border border-stone-200/50 shadow-xs text-center flex flex-col items-center">
              <span className="text-lg font-black text-[#2D122D]">100%</span>
              <span className="text-[10px] text-stone-500 font-medium">Fresh & Natural</span>
            </div>
          </div>
        </div>

        {/* Hero Right Image & Badge */}
        <div className="w-full lg:w-1/2 flex justify-center relative">
          <div className="relative max-w-md w-full">
            <img
              src={heroImg}
              alt="Fresh Chocolate Layer Cake"
              className="w-full h-auto object-cover rounded-3xl drop-shadow-2xl"
            />
            
            {/* Round Badge: Made with Love */}
            <div className="absolute bottom-6 right-4 sm:-right-4 bg-[#2D122D] text-white rounded-full w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center text-center p-2 shadow-xl border-4 border-[#FAF6F0] rotate-12">
              <span className="text-[11px] font-bold leading-tight">Made with Love</span>
              <Heart size={14} className="fill-amber-400 text-amber-400 mt-1" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. EXPLORE CREATIONS (DARK PURPLE WAVE SECTION) */}
      <section className="relative bg-[#2D122D] text-white py-16 px-6 lg:px-12">
        {/* Top Wave SVG */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none -translate-y-[99%]">
          <svg className="relative block w-full h-10 text-[#2D122D]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,90 350,-40 500,60 C650,160 900,10 1200,40 L1200,120 L0,120 Z" fill="currentColor"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="font-serif italic text-amber-400 text-xl block">Explore</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                Our Delicious Creations
              </h2>
            </div>
            <p className="text-xs text-stone-300 max-w-sm leading-relaxed">
              Since our first loaf came out of the oven, we've been dedicated to bringing you fresh, wholesome, and delicious baked goods.
            </p>
          </div>

          {/* Circular Category Items */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 sm:gap-8 text-center">
            {categories.map((cat, idx) => (
              <div key={idx} className="group cursor-pointer flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-amber-400/30 group-hover:border-amber-400 transition-all duration-300 p-1 mb-3 shadow-lg">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition duration-300"
                  />
                </div>
                <h3 className="font-bold text-sm tracking-wide group-hover:text-amber-400 transition">
                  {cat.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave SVG */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none translate-y-[99%] z-10">
          <svg className="relative block w-full h-10 text-[#2D122D]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,120 C150,30 350,160 500,60 C650,-40 900,110 1200,80 L1200,0 L0,0 Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* 3. OUR STORY SECTION */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-24 sm:py-32 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Story Text Left */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#2D122D]">
              Our Story,
            </h2>
            <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block">
              Baked with Love
            </span>
          </div>

          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed max-w-md">
            Since our first loaf came out of the oven, we've been dedicated to bringing you fresh, wholesome, and delicious baked goods. Every recipe is made from scratch using premium ingredients and lots of love.
          </p>

          {/* Feature Highlights */}
          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-stone-200/80">
            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                <Sparkles size={16} />
              </div>
              <h4 className="font-bold text-xs text-[#2D122D]">Premium Ingredients</h4>
            </div>

            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                <Coffee size={16} />
              </div>
              <h4 className="font-bold text-xs text-[#2D122D]">Made Fresh Daily</h4>
            </div>

            <div className="space-y-1">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-amber-700">
                <Award size={16} />
              </div>
              <h4 className="font-bold text-xs text-[#2D122D]">Crafted with Passion</h4>
            </div>
          </div>

          <div className="pt-2">
            <Link
              to="/about"
              className="inline-block border-2 border-[#2D122D] text-[#2D122D] text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#2D122D] hover:text-white transition"
            >
              Learn More About Us
            </Link>
          </div>
        </div>

        {/* Story Collage Right */}
        <div className="w-full lg:w-1/2 grid grid-cols-2 gap-3 sm:gap-4">
          <div className="col-span-1">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80"
              alt="Baker dusting flour on bread"
              className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-md"
            />
          </div>
          <div className="col-span-1 flex flex-col gap-3 sm:gap-4">
            <img
              src="https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=600&q=80"
              alt="Sweet buns"
              className="w-full h-32 sm:h-38 object-cover rounded-2xl shadow-md"
            />
            <img
              src="https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=600&q=80"
              alt="Cupcakes"
              className="w-full h-32 sm:h-38 object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>

      </section>
    </div>
  );
}