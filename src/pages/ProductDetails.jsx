import { useEffect, useState, useCallback } from "react";
import api from "../api/axios";
import { useParams, useNavigate, Link } from "react-router";
import {
  ArrowLeft,
  Plus,
  Minus,
  ShoppingBag,
  Check,
  Star,
  Clock,
  Truck,
  ShieldCheck,
} from "lucide-react";

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  // 1. API se Product fetch logic
  const loadProduct = useCallback(async () => {
    setLoading(true);
    try {
      const res = await api.get(`/products/${id}`);
      setProduct(res.data.product || res.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      // Fallback: search in product list if single product route is not setup
      try {
        const listRes = await api.get("/products/");
        const items = Array.isArray(listRes.data) ? listRes.data : listRes.data.products || [];
        const p = items.find((item) => (item._id || item.id) === id);
        setProduct(p || null);
      } catch (err) {
        console.error("Fallback error:", err);
      }
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    loadProduct();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [loadProduct]);

  // Quantity control handlers
  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  // 2. LocalStorage Cart Logic + Navbar badge sync + Redirect options
  const handleAddToCart = () => {
    if (!product) return;

    // LocalStorage se existing cart load karein
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const productId = product._id || product.id;

    // Check karein kya product pehle se cart mein hai
    const existingIndex = existingCart.findIndex(
      (item) => (item._id || item.id) === productId
    );

    if (existingIndex > -1) {
      existingCart[existingIndex].quantity =
        (existingCart[existingIndex].quantity || 1) + quantity;
    } else {
      existingCart.push({ ...product, quantity });
    }

    // LocalStorage update karein
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Navbar cart count update notification
    const totalCount = existingCart.reduce((sum, item) => sum + item.quantity, 0);
    localStorage.setItem("cartCount", totalCount);
    window.dispatchEvent(new Event("cartUpdated"));

    // Success Feedback State
    setAddedToCart(true);
    setTimeout(() => {
      setAddedToCart(false);
    }, 2000);
  };

  if (loading) {
    return (
      <div className="w-full font-sans bg-[#FDF8EE] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-xs font-semibold text-stone-500">Loading details...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="w-full font-sans bg-[#FDF8EE] min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h2 className="text-xl font-bold text-[#2D122D] mb-2">Product Not Found</h2>
        <p className="text-xs text-stone-500 mb-4">The item you are looking for does not exist.</p>
        <Link
          to="/products"
          className="bg-[#2D122D] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#3d1a3d] transition"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full font-sans bg-[#FDF8EE] text-stone-800 space-y-8 py-8 px-4 sm:px-6 lg:px-12 min-h-screen">
      
      {/* HEADER NAVIGATION */}
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-[#2D122D] bg-[#FFFDF9] px-4 py-2 rounded-full border border-amber-100/80 shadow-xs transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest">
          {product.category || "Fresh Bakery"}
        </span>
      </div>

      {/* PRODUCT CARD UI */}
      <div className="max-w-5xl mx-auto bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 lg:p-10 border border-amber-100/60 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* LEFT: IMAGE SECTION */}
          <div className="flex items-center justify-center bg-amber-50/50 rounded-2xl p-6 border border-amber-100/40 min-h-[320px] relative">
            <img
              src={product.image || "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80"}
              alt={product.title || product.name}
              className="max-h-80 w-full object-contain hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* RIGHT: DETAILS & ACTIONS */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  {product.category || "Bakery Special"}
                </span>
                <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-100 text-xs font-bold text-amber-800">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>4.9</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-black text-[#2D122D] leading-tight">
                {product.title || product.name}
              </h1>

              <div className="text-3xl font-black text-[#2D122D]">
                ${product.price}
              </div>

              <hr className="border-amber-100/60" />

              <div>
                <h2 className="text-[11px] font-bold text-stone-400 uppercase tracking-wider mb-1.5">
                  Description
                </h2>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  {product.description || "Handcrafted daily by our master bakers using organic ingredients and fresh butter."}
                </p>
              </div>
            </div>

            {/* QUANTITY & ADD TO CART ACTION */}
            <div className="space-y-4 pt-4 border-t border-amber-100/60">
              
              {/* Quantity selector */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-stone-500">Quantity:</span>
                <div className="flex items-center justify-between gap-3 bg-[#FDF8EE] px-3.5 py-1.5 rounded-full border border-amber-100">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="text-stone-600 hover:text-amber-600 transition"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold text-[#2D122D] w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="text-stone-600 hover:text-amber-600 transition"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`flex-1 text-xs font-bold py-3.5 px-6 rounded-full transition shadow-xs flex items-center justify-center gap-2 ${
                    addedToCart
                      ? "bg-emerald-600 text-white"
                      : "bg-[#E69D43] text-white hover:bg-amber-600 active:scale-95"
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Cart!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Cart - ${(product.price * quantity).toFixed(2)}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    handleAddToCart();
                    navigate("/cart");
                  }}
                  className="bg-[#2D122D] text-white text-xs font-bold px-6 py-3.5 rounded-full hover:bg-[#3d1a3d] transition"
                >
                  Buy Now
                </button>
              </div>

            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-500 pt-2 border-t border-amber-100/40">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-500" />
                <span>Baked Fresh Daily</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-amber-500" />
                <span>Express Delivery</span>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}