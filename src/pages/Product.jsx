// import React, { useState } from "react";
// import { Search, ShoppingBag, Star, Heart, Eye } from "lucide-react";

// export default function ProductsSection() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const categories = ["All", "Cakes", "Cupcakes", "Cookies", "Doughnuts", "Pastries", "Breads"];

//   const products = [
//     {
//       id: 1,
//       name: "Chocolate Berry Cake",
//       category: "Cakes",
//       price: "$28.00",
//       rating: 4.9,
//       image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
//       badge: "Bestseller",
//     },
//     {
//       id: 2,
//       name: "Vanilla Strawberry Cupcake",
//       category: "Cupcakes",
//       price: "$4.50",
//       rating: 4.8,
//       image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=500&q=80",
//       badge: "Fresh",
//     },
//     {
//       id: 3,
//       name: "Choco Chip Cookies",
//       category: "Cookies",
//       price: "$12.00",
//       rating: 4.7,
//       image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=500&q=80",
//       badge: null,
//     },
//     {
//       id: 4,
//       name: "Glazed Pink Doughnut",
//       category: "Doughnuts",
//       price: "$3.50",
//       rating: 4.9,
//       image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=500&q=80",
//       badge: "10% OFF",
//     },
//     {
//       id: 5,
//       name: "Artisan Butter Croissant",
//       category: "Pastries",
//       price: "$5.00",
//       rating: 4.9,
//       image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=500&q=80",
//       badge: "Popular",
//     },
//     {
//       id: 6,
//       name: "Fresh Whole Sourdough",
//       category: "Breads",
//       price: "$7.50",
//       rating: 4.6,
//       image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
//       badge: null,
//     },
//   ];

//   const filteredProducts = products.filter((item) => {
//     const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
//     const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="w-full font-sans bg-[#FDF8EE] text-stone-800 space-y-10 py-10 px-4 sm:px-6 lg:px-12">
      
//       {/* 1. SECTION TITLE & SUBTITLE */}
//       <div className="max-w-5xl mx-auto text-center space-y-3">
//         <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block">
//           Freshly Baked Daily
//         </span>
//         <h1 className="text-3xl sm:text-4xl font-black text-[#2D122D] tracking-tight">
//           Explore Our Delicious Creations
//         </h1>
//         <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
//           Made with premium organic ingredients and traditional techniques to sweeten your every moment.
//         </p>
//       </div>

//       {/* 2. SEARCH BAR & CATEGORY FILTERS */}
//       <div className="max-w-5xl mx-auto space-y-6">
        
//         {/* Search Bar */}
//         <div className="max-w-md mx-auto relative flex items-center">
//           <Search className="w-4 h-4 text-stone-400 absolute left-4" />
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search cakes, cookies, pastries..."
//             className="w-full bg-[#FFFDF9] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-amber-100/80 shadow-xs focus:outline-none focus:border-amber-500 transition"
//           />
//         </div>

//         {/* Category Pill Buttons */}
//         <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
//           {categories.map((cat, idx) => (
//             <button
//               key={idx}
//               onClick={() => setSelectedCategory(cat)}
//               className={`text-xs font-bold px-5 py-2.5 rounded-full transition shrink-0 ${
//                 selectedCategory === cat
//                   ? "bg-[#2D122D] text-white shadow-md"
//                   : "bg-[#FFFDF9] text-stone-600 border border-amber-100/60 hover:border-amber-300"
//               }`}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* 3. PRODUCTS GRID */}
//       <div className="max-w-6xl mx-auto">
//         {filteredProducts.length > 0 ? (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {filteredProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="bg-[#FFFDF9] rounded-3xl p-4 border border-amber-100/60 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between group relative"
//               >
//                 {/* Image Container */}
//                 <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden mb-4 bg-amber-50">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
//                   />

//                   {/* Badge */}
//                   {product.badge && (
//                     <span className="absolute top-3 left-3 bg-[#2D122D] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
//                       {product.badge}
//                     </span>
//                   )}

//                   {/* Quick Action Overlay Buttons */}
//                   <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
//                     <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-amber-600 shadow-sm transition">
//                       <Heart className="w-4 h-4" />
//                     </button>
//                     <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-amber-600 shadow-sm transition">
//                       <Eye className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>

//                 {/* Details */}
//                 <div className="space-y-2">
//                   <div className="flex justify-between items-start gap-2">
//                     <h3 className="text-sm font-bold text-[#2D122D] leading-snug">
//                       {product.name}
//                     </h3>
//                     <div className="flex items-center gap-1 shrink-0 bg-amber-50 px-2 py-0.5 rounded-full">
//                       <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
//                       <span className="text-[11px] font-bold text-amber-700">
//                         {product.rating}
//                       </span>
//                     </div>
//                   </div>

//                   <p className="text-[11px] text-stone-400 font-medium">
//                     {product.category}
//                   </p>

//                   {/* Price & Add to Cart */}
//                   <div className="pt-2 flex items-center justify-between">
//                     <span className="text-base font-black text-[#2D122D]">
//                       {product.price}
//                     </span>
//                     <button className="bg-[#E69D43] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-amber-600 transition shadow-sm flex items-center gap-1.5">
//                       <ShoppingBag className="w-3.5 h-3.5" />
//                       <span>Add</span>
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           /* Empty State */
//           <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-amber-100/60 max-w-lg mx-auto space-y-3">
//             <h3 className="text-lg font-bold text-[#2D122D]">No items found</h3>
//             <p className="text-xs text-stone-500">
//               Try searching for something else or browse another category.
//             </p>
//             <button
//               onClick={() => {
//                 setSelectedCategory("All");
//                 setSearchQuery("");
//               }}
//               className="bg-[#2D122D] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-[#3d1a3d] transition"
//             >
//               Reset Filters
//             </button>
//           </div>
//         )}
//       </div>

//     </div>
//   );
// }
import React, { useState, useEffect, useCallback } from "react";
import api from "../api/axios";
import { Link } from "react-router";
import { Search, ShoppingBag, Star, Heart, Eye, X } from "lucide-react";

export default function ProductsSection() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  // Category mapping for API request vs display
  const categories = [
    { name: "All", value: "" },
    { name: "Cakes", value: "cakes" },
    { name: "Cupcakes", value: "cupcakes" },
    { name: "Cookies", value: "cookies" },
    { name: "Doughnuts", value: "doughnuts" },
    { name: "Pastries", value: "pastries" },
    { name: "Breads", value: "breads" },
  ];

  // Consolidated API Fetch Function
  const loadProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (searchQuery.trim()) params.append("search", searchQuery.trim());
      
      // Get category value from selected category name
      const categoryObj = categories.find((c) => c.name === selectedCategory);
      const catValue = categoryObj ? categoryObj.value : "";
      if (catValue) params.append("category", catValue);

      const res = await api.get(`/products?${params.toString()}`);

      // Dynamic response handling
      if (Array.isArray(res.data)) {
        setProducts(res.data);
      } else if (res.data && Array.isArray(res.data.products)) {
        setProducts(res.data.products);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedCategory]);

  // Debounce API calls on search or category state update
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      loadProducts();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, selectedCategory, loadProducts]);

  // Add to cart handler
  const addToCart = async (productId) => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      alert("Please login to add items to your cart.");
      return;
    }

    try {
      const res = await api.post(`/cart/add`, { userId, productId });

      const total = res.data.cart.items.reduce(
        (sum, item) => sum + (item.productId?.price || 0) * item.quantity,
        0
      );

      localStorage.setItem("cartCount", total);
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="w-full font-sans bg-[#FDF8EE] text-stone-800 space-y-10 py-10 px-4 sm:px-6 lg:px-12 min-h-screen">
      
      {/* 1. SECTION TITLE & SUBTITLE */}
      <div className="max-w-5xl mx-auto text-center space-y-3">
        <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block">
          Freshly Baked Daily
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#2D122D] tracking-tight">
          Explore Our Delicious Creations
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          Made with premium organic ingredients and traditional techniques to sweeten your every moment.
        </p>
      </div>

      {/* 2. SEARCH BAR & CATEGORY FILTERS */}
      <div className="max-w-5xl mx-auto space-y-6">
        
        {/* Search Bar */}
        <div className="max-w-md mx-auto relative flex items-center">
          <Search className="w-4 h-4 text-stone-400 absolute left-4" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search cakes, cookies, pastries..."
            className="w-full bg-[#FFFDF9] text-stone-900 text-xs pl-11 pr-10 py-3 rounded-full border border-amber-100/80 shadow-xs focus:outline-none focus:border-amber-500 transition"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 text-stone-400 hover:text-stone-600"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Category Pill Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedCategory(cat.name)}
              className={`text-xs font-bold px-5 py-2.5 rounded-full transition shrink-0 ${
                selectedCategory === cat.name
                  ? "bg-[#2D122D] text-white shadow-md"
                  : "bg-[#FFFDF9] text-stone-600 border border-amber-100/60 hover:border-amber-300"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. PRODUCTS GRID */}
      <div className="max-w-6xl mx-auto">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 bg-[#FFFDF9] rounded-3xl border border-amber-100/60">
            <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-3"></div>
            <p className="text-xs font-semibold text-stone-500">Loading delicious items...</p>
          </div>
        ) : products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product._id || product.id}
                className="bg-[#FFFDF9] rounded-3xl p-4 border border-amber-100/60 shadow-xs hover:shadow-md transition duration-300 flex flex-col justify-between group relative"
              >
                {/* Image Container */}
                <div className="relative w-full h-52 sm:h-56 rounded-2xl overflow-hidden mb-4 bg-amber-50 flex items-center justify-center">
                  <Link to={`/product/${product._id || product.id}`} className="w-full h-full">
                    <img
                      src={product.image || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80"}
                      alt={product.title || product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                    />
                  </Link>

                  {/* Badge */}
                  {product.badge && (
                    <span className="absolute top-3 left-3 bg-[#2D122D] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                      {product.badge}
                    </span>
                  )}

                  {/* Quick Action Overlay Buttons */}
                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                    <button className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-amber-600 shadow-sm transition">
                      <Heart className="w-4 h-4" />
                    </button>
                    <Link
                      to={`/product/${product._id || product.id}`}
                      className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-stone-700 hover:text-amber-600 shadow-sm transition"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-2">
                  <div className="flex justify-between items-start gap-2">
                    <Link to={`/product/${product._id || product.id}`}>
                      <h3 className="text-sm font-bold text-[#2D122D] leading-snug hover:text-amber-600 transition">
                        {product.title || product.name}
                      </h3>
                    </Link>
                    {product.rating && (
                      <div className="flex items-center gap-1 shrink-0 bg-amber-50 px-2 py-0.5 rounded-full">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span className="text-[11px] font-bold text-amber-700">
                          {product.rating}
                        </span>
                      </div>
                    )}
                  </div>

                  <p className="text-[11px] text-stone-400 font-medium capitalize">
                    {product.category || "General"}
                  </p>

                  {/* Price & Add to Cart */}
                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-base font-black text-[#2D122D]">
                      ${product.price}
                    </span>
                    <button
                      onClick={() => addToCart(product._id || product.id)}
                      className="bg-[#E69D43] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-amber-600 active:scale-95 transition shadow-sm flex items-center gap-1.5"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-amber-100/60 max-w-lg mx-auto space-y-3">
            <h3 className="text-lg font-bold text-[#2D122D]">No items found</h3>
            <p className="text-xs text-stone-500">
              Try searching for something else or browse another category.
            </p>
            <button
              onClick={clearFilters}
              className="bg-[#2D122D] text-white text-xs font-bold px-5 py-2 rounded-full hover:bg-[#3d1a3d] transition"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
}