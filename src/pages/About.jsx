import React from "react";
import { Link } from "react-router";
import { Heart, Award, ShieldCheck, Sparkles, Clock, Users } from "lucide-react";

export default function AboutUs() {
  const stats = [
    { label: "Daily Orders", value: "200+" },
    { label: "Delicious Items", value: "50+" },
    { label: "Fresh & Natural", value: "100%" },
    { label: "Years of Passion", value: "10+" },
  ];

  const values = [
    {
      icon: <Heart className="w-6 h-6 text-amber-500" />,
      title: "Baked with Love",
      description: "Every item is crafted from scratch using traditional recipes and genuine care.",
    },
    {
      icon: <Award className="w-6 h-6 text-amber-500" />,
      title: "Premium Ingredients",
      description: "We source only high-quality, organic ingredients for uncompromised taste.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-500" />,
      title: "Freshness Guaranteed",
      description: "Baked daily every morning to ensure you get maximum flavor in every bite.",
    },
  ];

  const team = [
    {
      name: "Sophia Reynolds",
      role: "Head Pastry Chef",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTshvUvUHzKU4VV0l9rlsRecE5wTPvEQes54i-Me4vkwa5PT5RDetOlglUh&s=10",
    },
    {
      name: "Marcus Vance",
      role: "Master Artisan Baker",
      image: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Elena Gomez",
      role: "Cake Designer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHHIOMrAJP_nOnu-B2pbon9o6eVVDBXs2yKwhr8JCZaw&s=10",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FDF8EE] font-sans text-stone-800 space-y-16 py-6 px-4 sm:px-6 lg:px-12">
      
      {/* 2. HERO SECTION */}
      <section className="max-w-5xl mx-auto text-center space-y-4 pt-4">
        <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block">
          Our Story
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#2D122D] tracking-tight max-w-2xl mx-auto leading-tight">
          Baked with Passion, Served with Heart
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-xl mx-auto leading-relaxed">
          From our first loaf of warm sourdough to custom artisan wedding cakes, antix_r has been dedicated to bringing delight and sweetness to your everyday moments.
        </p>
      </section>

      {/* 3. OUR STORY & CRAFT SECTION */}
      <section className="max-w-6xl mx-auto bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-amber-100/60 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 block">
            Since 2016
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D122D] leading-tight">
            Freshly Baked Goodness, Every Single Day
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            What started as a small home kitchen project grew into a beloved local bakery. We believe in slow fermentation, hand-rolled dough, and natural flavors free from artificial preservatives.
          </p>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Every morning before sunrise, our ovens heat up to craft golden croissants, tender cakes, and artisanal breads designed to make every meal special.
          </p>
        </div>

        <div className="relative flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80"
            alt="Baker working with flour"
            className="w-full h-64 sm:h-80 object-cover rounded-2xl shadow-md"
          />
        </div>
      </section>

      {/* 4. STATS BAR */}
      <section className="max-w-6xl mx-auto bg-[#2D122D] text-white rounded-3xl p-6 sm:p-8 shadow-md grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="text-2xl sm:text-4xl font-black text-amber-400">
              {stat.value}
            </h3>
            <p className="text-xs text-stone-300 font-medium">
              {stat.label}
            </p>
          </div>
        ))}
      </section>

      {/* 5. OUR VALUES SECTION */}
      <section className="max-w-6xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D122D]">
            Why People Choose Us
          </h2>
          <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block mt-0.5">
            Our Guiding Values
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] rounded-2xl p-6 shadow-sm border border-amber-100/60 text-center space-y-3 hover:shadow-md transition duration-300"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#2D122D]">
                {item.title}
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. MEET THE BAKERS SECTION */}
      <section className="max-w-6xl mx-auto text-center space-y-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#2D122D]">
            Meet the Artisans
          </h2>
          <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block mt-0.5">
            Behind the Magic
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-[#FFFDF9] rounded-2xl overflow-hidden shadow-sm border border-amber-100/60 hover:shadow-md transition duration-300 group"
            >
              <div className="h-60 sm:h-64 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-4 space-y-1">
                <h3 className="text-base font-bold text-[#2D122D]">
                  {member.name}
                </h3>
                <p className="text-xs text-amber-600 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}