import React, { useState } from "react";
import { Link } from "react-router";
import { Tag, Copy, Check, Clock, Sparkles, Gift, Percent, AlertCircle } from "lucide-react";

export default function CouponsPage() {
  const [copiedCode, setCopiedCode] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Sample Bakery Coupons Data
  const coupons = [
    {
      id: "1",
      code: "BAKERY10",
      title: "10% Off Entire Order",
      description: "Get 10% instant discount on all freshly baked items. No minimum purchase required.",
      discount: "10% OFF",
      category: "Discount",
      expiry: "Valid till Sep 30, 2026",
      minOrder: "$0",
      badge: "Popular",
      bgColor: "bg-amber-500",
    },
    {
      id: "2",
      code: "SWEETCAKE",
      title: "Free Cupcake on $25+",
      description: "Add any artisan cupcake for free when your total order amount crosses $25.",
      discount: "FREE ITEM",
      category: "Freebie",
      expiry: "Valid till Sep 15, 2026",
      minOrder: "$25",
      badge: "Hot Deal",
      bgColor: "bg-[#2D122D]",
    },
    {
      id: "3",
      code: "MORNING5",
      title: "$5 Off Morning Breads",
      description: "Save $5 on fresh morning sourdoughs and croissants when ordering before 11 AM.",
      discount: "$5.00 OFF",
      category: "Special",
      expiry: "Valid till Oct 05, 2026",
      minOrder: "$15",
      badge: "Early Bird",
      bgColor: "bg-amber-600",
    },
    {
      id: "4",
      code: "PARTY25",
      title: "25% Off Custom Cake Orders",
      description: "Planning a party? Book a custom design cake and enjoy a 25% discount.",
      discount: "25% OFF",
      category: "Discount",
      expiry: "Valid till Dec 31, 2026",
      minOrder: "$50",
      badge: "Exclusive",
      bgColor: "bg-[#2D122D]",
    },
  ];

  const categories = ["All", "Discount", "Freebie", "Special"];

  // Copy to clipboard logic
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  const filteredCoupons =
    selectedCategory === "All"
      ? coupons
      : coupons.filter((c) => c.category === selectedCategory);

  return (
    <div className="w-full font-sans bg-[#FDF8EE] text-stone-800 space-y-10 py-10 px-4 sm:px-6 lg:px-12 min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block flex items-center justify-center gap-2">
          <Tag className="w-5 h-5 inline-block text-amber-500" />
          Sweet Savings & Offers
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#2D122D] tracking-tight">
          Exclusive Bakery Coupons
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          Copy your favorite promo codes and apply them at checkout to enjoy discounts on fresh treats.
        </p>
      </div>

      {/* 2. CATEGORY FILTER PILLS */}
      <div className="max-w-4xl mx-auto flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-bold px-5 py-2.5 rounded-full transition shrink-0 ${
              selectedCategory === cat
                ? "bg-[#2D122D] text-white shadow-md"
                : "bg-[#FFFDF9] text-stone-600 border border-amber-100/60 hover:border-amber-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3. COUPONS GRID */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCoupons.map((coupon) => {
          const isCopied = copiedCode === coupon.code;

          return (
            <div
              key={coupon.id}
              className="bg-[#FFFDF9] rounded-3xl border border-amber-100/80 shadow-xs overflow-hidden flex flex-col justify-between relative group hover:shadow-md transition duration-300"
            >
              {/* Top Banner Tag */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span
                    className={`${coupon.bgColor} text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-xs`}
                  >
                    <Sparkles className="w-3 h-3" />
                    {coupon.badge}
                  </span>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-stone-400">
                    <Clock className="w-3.5 h-3.5 text-amber-500" />
                    <span>{coupon.expiry}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-1.5">
                  <div className="flex items-baseline gap-2">
                    <h2 className="text-xl font-black text-[#2D122D]">
                      {coupon.discount}
                    </h2>
                    <span className="text-xs font-bold text-amber-600">
                      (Min: {coupon.minOrder})
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-stone-800">
                    {coupon.title}
                  </h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    {coupon.description}
                  </p>
                </div>
              </div>

              {/* Cutout Ticket Line & Action Footer */}
              <div className="bg-[#FDF8EE] border-t border-dashed border-amber-200 p-4 px-5 sm:px-6 flex items-center justify-between gap-3 relative">
                
                {/* Decorative Side Ticket Cutouts */}
                <div className="w-4 h-4 rounded-full bg-[#FDF8EE] border border-amber-100 absolute -left-2.5 -top-2.5 shadow-inner"></div>
                <div className="w-4 h-4 rounded-full bg-[#FDF8EE] border border-amber-100 absolute -right-2.5 -top-2.5 shadow-inner"></div>

                {/* Coupon Code Block */}
                <div className="bg-[#FFFDF9] border border-amber-200/80 px-3.5 py-1.5 rounded-xl flex items-center gap-2">
                  <span className="text-xs font-mono font-bold tracking-widest text-[#2D122D]">
                    {coupon.code}
                  </span>
                </div>

                {/* Copy / Action Button */}
                <button
                  onClick={() => handleCopy(coupon.code)}
                  className={`text-xs font-bold px-4 py-2 rounded-full transition shadow-xs flex items-center gap-1.5 ${
                    isCopied
                      ? "bg-emerald-600 text-white"
                      : "bg-[#E69D43] text-white hover:bg-amber-600 active:scale-95"
                  }`}
                >
                  {isCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Code</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. FOOTER BANNER / HOW TO USE */}
      <div className="max-w-4xl mx-auto bg-[#2D122D] text-white rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 text-amber-400">
            <Gift className="w-5 h-5" />
            <h3 className="text-base font-bold">Ready to use your coupon?</h3>
          </div>
          <p className="text-xs text-amber-100/70 max-w-md">
            Add items to your cart, paste the coupon code at the order summary section, and enjoy your instant discount.
          </p>
        </div>

        <Link
          to="/cart"
          className="bg-[#E69D43] text-white text-xs font-bold px-6 py-3 rounded-full hover:bg-amber-600 transition shrink-0"
        >
          Go to Cart Page
        </Link>
      </div>

    </div>
  );
}