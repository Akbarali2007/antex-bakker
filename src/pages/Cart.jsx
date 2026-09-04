import React, { useState, useEffect, useCallback } from "react";
import api from "../api/axios";
import { Link, useNavigate } from "react-router";
import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag, ShieldCheck, Tag, ArrowRight } from "lucide-react";

export default function Cart() {
  const userId = localStorage.getItem("userId");
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState(null);
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();

  // Load cart using original Code 1 Logic
  const loadCart = useCallback(async () => {
    if (!userId) {
      setLoading(false);
      return;
    }
    try {
      const res = await api.get(`/cart/${userId}`);
      setCart(res.data);
    } catch (error) {
      console.error("Error loading cart:", error);
    } finally {
      setLoading(false);
    }
  }, [userId]);

  useEffect(() => {
    loadCart();
  }, [loadCart]);

  // Original Remove Item Logic
  const removeItem = async (productId) => {
    setUpdatingId(productId);
    try {
      await api.post(`/cart/remove`, { userId, productId });
      await loadCart();
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("Error removing item:", error);
    } finally {
      setUpdatingId(null);
    }
  };

  // Original Update Quantity Logic
  const updateQty = async (productId, quantity) => {
    if (quantity <= 0) {
      await removeItem(productId);
      return;
    }

    setUpdatingId(productId);
    try {
      await api.post(`/cart/update`, { userId, productId, quantity });
      await loadCart();
      window.dispatchEvent(new Event("cartUpdated"));
    } catch (error) {
      console.error("Error updating quantity:", error);
    } finally {
      setUpdatingId(null);
    }
  };

  if (loading) {
    return (
      <div className="w-full font-sans bg-[#FDF8EE] min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mb-3"></div>
          <p className="text-xs font-semibold text-stone-500">Loading your cart...</p>
        </div>
      </div>
    );
  }

  // Original Calculations from Code 1
  const items = cart?.items || [];
  const subtotal = items.reduce(
    (sum, item) => sum + (item.productId?.price || 0) * item.quantity,
    0
  );
  const discountRate = 0.2; // 20% Discount as defined in Code 1
  const discount = subtotal * discountRate;
  const deliveryFee = subtotal > 0 ? 15 : 0;
  const total = subtotal - discount + deliveryFee;

  return (
    <div className="w-full font-sans bg-[#FDF8EE] text-stone-800 space-y-8 py-10 px-4 sm:px-6 lg:px-12 min-h-screen">
      
      {/* 1. BREADCRUMB & HEADER SECTION */}
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-amber-200/40 pb-6">
        <div>
          <div className="text-xs text-amber-600 font-semibold mb-1 flex items-center gap-1.5">
            <span onClick={() => navigate("/")} className="cursor-pointer hover:underline">Home</span>
            <span>&gt;</span>
            <span className="text-stone-800 font-bold">Cart</span>
          </div>
          <h1 className="text-3xl font-black text-[#2D122D] tracking-tight uppercase">
            Your Cart ({items.length})
          </h1>
        </div>

        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-stone-600 hover:text-[#2D122D] bg-[#FFFDF9] px-4 py-2 rounded-full border border-amber-100 shadow-xs transition"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Continue Shopping</span>
        </Link>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-5xl mx-auto">
        {!userId ? (
          /* Login Required State */
          <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-amber-100/60 max-w-lg mx-auto space-y-4">
            <ShoppingBag className="w-12 h-12 text-amber-400 mx-auto" />
            <h2 className="text-lg font-bold text-[#2D122D]">Please Log In</h2>
            <p className="text-xs text-stone-500">
              You need to log in to view and manage your cart items.
            </p>
            <button
              onClick={() => navigate("/login")}
              className="bg-[#2D122D] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-[#3d1a3d] transition"
            >
              Go to Login
            </button>
          </div>
        ) : items.length === 0 ? (
          /* Empty Cart State */
          <div className="text-center py-16 bg-[#FFFDF9] rounded-3xl border border-amber-100/60 max-w-lg mx-auto space-y-4">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-500">
              <ShoppingBag className="w-8 h-8" />
            </div>
            <h2 className="text-lg font-bold text-[#2D122D]">Your Cart Is Empty</h2>
            <p className="text-xs text-stone-500 max-w-xs mx-auto">
              Looks like you haven't added any items to your cart yet.
            </p>
            <button
              onClick={() => navigate("/")}
              className="bg-[#E69D43] text-white text-xs font-bold px-6 py-2.5 rounded-full hover:bg-amber-600 transition shadow-sm"
            >
              Explore Products
            </button>
          </div>
        ) : (
          /* Active Cart Grid */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* ITEMS LIST (Left Column) */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item, index) => {
                const product = item.productId || {};
                const pId = product._id;

                return (
                  <div
                    key={pId || index}
                    className="bg-[#FFFDF9] rounded-3xl p-4 border border-amber-100/60 shadow-xs flex items-center gap-4 relative group"
                  >
                    {/* Image */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden bg-amber-50 shrink-0 border border-amber-100/40">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <h3 className="text-sm font-bold text-[#2D122D] truncate">
                        {product.title}
                      </h3>
                      
                      <div className="flex items-center gap-3 text-[11px] text-stone-500">
                        <span>Size: <strong className="text-stone-700">{item.size || "Large"}</strong></span>
                        <span>Color: <strong className="text-stone-700">{item.color || "White"}</strong></span>
                      </div>

                      <p className="text-xs font-black text-[#2D122D]">
                        ${(product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 bg-[#FDF8EE] px-3 py-1.5 rounded-full border border-amber-100 shrink-0">
                      <button
                        onClick={() => updateQty(pId, item.quantity - 1)}
                        disabled={updatingId === pId}
                        className="text-stone-600 hover:text-amber-600 disabled:opacity-30 transition"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="text-xs font-bold text-[#2D122D] w-5 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQty(pId, item.quantity + 1)}
                        disabled={updatingId === pId}
                        className="text-stone-600 hover:text-amber-600 disabled:opacity-30 transition"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(pId)}
                      disabled={updatingId === pId}
                      className="text-stone-400 hover:text-red-500 p-1 transition shrink-0"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
            </div>

            {/* ORDER SUMMARY (Right Column) */}
            <div className="space-y-4">
              <div className="bg-[#FFFDF9] rounded-3xl p-6 border border-amber-100/60 shadow-xs space-y-5">
                <h2 className="text-base font-black text-[#2D122D] border-b border-amber-100/60 pb-3">
                  Order Summary
                </h2>

                {/* Calculation Breakdown */}
                <div className="space-y-2.5 text-xs text-stone-600 border-b border-amber-100/60 pb-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-stone-800">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-red-500 font-medium">
                    <span>Discount (-20%)</span>
                    <span className="font-bold">-${discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span className="font-bold text-stone-800">${deliveryFee.toFixed(2)}</span>
                  </div>
                </div>

                {/* Total */}
                <div className="flex justify-between items-center pt-1">
                  <span className="text-sm font-bold text-[#2D122D]">Total</span>
                  <span className="text-xl font-black text-[#2D122D]">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Promo Code Input */}
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-3.5 h-3.5 text-stone-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="Add promo code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="w-full bg-[#FDF8EE] text-xs font-medium pl-9 pr-3 py-2.5 rounded-full border border-amber-100 focus:outline-none focus:border-amber-500 uppercase"
                    />
                  </div>
                  <button className="bg-[#2D122D] text-white text-xs font-bold px-4 py-2.5 rounded-full hover:bg-[#3d1a3d] transition shrink-0">
                    Apply
                  </button>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => navigate("/checkout-address")}
                  className="w-full bg-[#E69D43] text-white text-xs font-bold py-3.5 rounded-full hover:bg-amber-600 active:scale-95 transition shadow-sm flex items-center justify-center gap-2"
                >
                  <span>Go to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-400 font-medium pt-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Secure & Encrypted Checkout</span>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  );
}