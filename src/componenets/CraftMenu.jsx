import React from "react";
import { Link } from "react-router";
import { Quote, Send } from "lucide-react";
import deal from "../assets/deal.png";
import cupcake from "../assets/cupcake.png";

export default function HomeSections() {
  // Section 1 Data: Crafted Menus
  const craftedMenus = [
    {
      title: "Breakfast Favorites",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Lunch Delights",
      image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Sweet Treats",
      image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Beverages",
      image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=300&q=80",
    },
    {
      title: "Custom Orders",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="w-full font-sans bg-[#FAF6F0] text-stone-800 space-y-16 py-10 px-4 sm:px-6 lg:px-12">
      
      {/* 1. CRAFTED MENUS FOR EVERY MOMENT */}
      <section className="max-w-6xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D122D] tracking-tight">
            Crafted Menus for Every
          </h2>
          <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block mt-0.5">
            Moment
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {craftedMenus.map((item, index) => (
            <div
              key={index}
              className="bg-white/90 rounded-2xl p-4 shadow-sm border border-amber-100 flex flex-col items-center hover:shadow-md transition duration-300 group cursor-pointer"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden mb-3 bg-amber-50">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#2D122D] text-center leading-snug">
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* 2. BAKING WITH PASSION & PURPOSE */}
      <section className="max-w-6xl mx-auto bg-[#FDFBF7] rounded-3xl border border-stone-200/60 p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xs">
        <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D122D] leading-tight">
            Baking with <br />
            <span className="text-amber-500 font-serif italic font-normal">
              Passion & Purpose
            </span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-md">
            Every creation is crafted with premium ingredients, traditional techniques, and genuine love to make every celebration unforgettable.
          </p>
          <div className="pt-2">
            <Link
              to="/products"
              className="inline-block bg-amber-500 text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-amber-600 transition shadow-sm"
            >
              Read Our Story
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
            alt="Baker working on dough"
            className="w-full h-64 sm:h-72 object-cover rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* 3. SWEET DEALS PROMOTIONAL BANNER */}
      <section className="max-w-6xl mx-auto bg-gradient-to-r from-[#F6D0CC] via-[#F8C8C4] to-[#F5BEBA] rounded-3xl p-6 sm:p-10 lg:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden min-h-[260px]">
  
  {/* Left Text Content */}
  <div className="w-full md:w-1/2 space-y-4 text-center md:text-left z-10 pl-2 sm:pl-4">
    <h3 className="text-2xl sm:text-3xl font-black text-[#2D122D] tracking-tight">
      Sweet Deals, <br className="hidden sm:inline" /> Fresh Savings!
    </h3>
    
    <div className="space-y-0.5">
      <span className="text-xs font-bold uppercase tracking-widest text-[#B8405E] block">
        10% OFF
      </span>
      <h4 className="text-3xl sm:text-4xl font-black text-[#2D122D]">
        All Cakes
      </h4>
    </div>

    <div className="pt-3">
      <Link
        to="/products?category=cakes"
        className="inline-block bg-[#2D122D] text-white text-xs font-bold px-7 py-3 rounded-full hover:bg-[#3d1a3d] transition shadow-md"
      >
        Shop Now
      </Link>
    </div>
  </div>

  {/* Right Image Container - Pixel Perfect UI Match */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-end items-end z-10 relative">
    <img
      src={deal}
      alt="Happy customer holding cake"
      className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-contain md:-mr-6 md:-mb-10 lg:-mb-12 drop-shadow-xl"
    />
  </div>

</section>

      {/* 4. WHAT OUR CUSTOMERS SAY (TESTIMONIAL) */}
      <section className="max-w-4xl mx-auto text-center space-y-6">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D122D]">
            What Our Customers
          </h2>
          <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block mt-0.5">
            Say
          </span>
        </div>

        <div className="bg-white/90 rounded-3xl p-6 sm:p-8 shadow-xs border border-amber-100 relative text-left max-w-2xl mx-auto space-y-4">
          <Quote className="w-8 h-8 text-amber-300 rotate-180" />
          <p className="text-xs sm:text-sm text-stone-600 italic leading-relaxed pl-2">
            "The cakes and pastries from antix_r are hands down the best in town! Always super fresh, perfectly sweet, and delivered right on time. Highly recommended for every sweet craving!"
          </p>
          <div className="flex items-center space-x-3 pt-2 pl-2">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
              alt="Jessica M."
              className="w-10 h-10 rounded-full object-cover border border-amber-400"
            />
            <div>
              <h4 className="text-xs font-bold text-[#2D122D]">Jessica M.</h4>
              <span className="text-[10px] text-stone-400 font-medium">Happy Customer</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. NEWSLETTER CARD */}
      <section className="max-w-6xl mx-auto bg-[#2D122D] text-white rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
        <div className="w-full md:w-1/2 space-y-3 text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-black tracking-tight">
            Stay Updated with Sweet News!
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed max-w-md">
            Subscribe to our newsletter to receive exclusive discount coupons and fresh daily baked menu updates!
          </p>

          <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 max-w-md pt-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-white text-stone-900 text-xs px-4 py-2.5 rounded-full focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#E69D43] text-white text-xs font-bold px-5 py-2.5 rounded-full hover:bg-amber-600 transition shrink-0"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={cupcake}
            alt="Delicious Cupcake"
            className="w-44 sm:w-52 h-44 sm:h-52 object-contain drop-shadow-2xl"
          />
        </div>
      </section>

    </div>
  );
}