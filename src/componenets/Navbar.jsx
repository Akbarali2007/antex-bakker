import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import api from "../api/axios";
import {
  ShoppingBag,
  Menu,
  X,
  User,
  LogOut
} from "lucide-react";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [cartCount, setCartCount] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const userId = localStorage.getItem("userId");

  // Cart API Integration Logic
  useEffect(() => {
    const loadCart = async () => {
      if (!userId) return setCartCount(0);
      try {
        const res = await api.get(`/cart/${userId}`);
        const total = res.data?.items?.reduce((sum, item) => sum + item.quantity, 0);
        setCartCount(total || 0);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    };
    loadCart();
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, [userId]);

  const logout = () => {
    localStorage.clear();
    setCartCount(0);
    navigate("/login");
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Recipes", path: "/recipes" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="w-full font-sans sticky top-0 z-50 bg-[#faf8f5] border-b border-stone-200/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Hamburger (Mobile) + Brand Logo */}
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="lg:hidden text-stone-700 hover:text-[#2d122d]"
          >
            <Menu size={24} />
          </button>

          {/* Logo UI */}
          <Link to="/" className="text-2xl font-black text-[#2d122d] tracking-tight">
            antix_r
          </Link>
        </div>

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative py-1 transition-colors ${
                  isActive ? "text-[#2d122d]" : "text-stone-600 hover:text-[#2d122d]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-[2px] bg-amber-500 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right: Cart, Auth & Action CTA */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {/* Cart Icon Widget */}
          <Link to="/cart" className="relative text-[#2d122d] hover:opacity-80 transition p-1">
            <ShoppingBag size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-amber-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* User Profile / Logout State */}
          {userId ? (
            <div className="flex items-center space-x-2 border-l border-stone-300 pl-4">
              <Link
                to="/profile"
                className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-[#2d122d] hover:bg-stone-300 transition"
              >
                <User size={16} />
              </Link>
              <button
                onClick={logout}
                className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition"
                title="Logout"
              >
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="hidden sm:inline-block text-xs font-semibold text-[#2d122d] hover:underline"
            >
              Log In
            </Link>
          )}

          {/* Primary Action Button */}
          <Link
            to="/book-table"
            className="bg-[#2d122d] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#3d1a3d] transition duration-200 shadow-sm"
          >
            Book a Table
          </Link>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div className="relative bg-[#faf8f5] w-4/5 max-w-xs h-full shadow-xl flex flex-col z-10 p-6">
            <div className="flex justify-between items-center border-b border-stone-200 pb-4">
              <span className="text-xl font-black text-[#2d122d]">antix_r</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={22} className="text-stone-600" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 my-6 font-semibold text-stone-700">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="hover:text-[#2d122d] transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {!userId && (
              <div className="mt-auto border-t border-stone-200 pt-4 flex flex-col gap-2">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 border border-[#2d122d] text-[#2d122d] rounded-full font-semibold text-xs"
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full text-center py-2.5 bg-[#2d122d] text-white rounded-full font-semibold text-xs"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}