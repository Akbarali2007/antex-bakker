import { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router";
import { PackagePlus, Image, Tag, DollarSign, Layers, FileText, ArrowLeft, Check } from "lucide-react";

export default function AddProduct() {
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    image: "",
    stock: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await api.post("/products/add", form);
      alert("Product added successfully!");
      navigate("/admin/products");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product. Please check server logs.");
    } finally {
      setSubmitting(false);
    }
  };

  const categoriesList = [
    { name: "Cakes & Pastries", value: "cakes" },
    { name: "Breads & Buns", value: "breads" },
    { name: "Cookies & Biscuits", value: "cookies" },
    { name: "Donuts & Muffins", value: "donuts" },
    { name: "Pies & Tarts", value: "pies" },
    { name: "Beverages & Coffee", value: "beverages" },
    { name: "Specialty & Seasonal", value: "specialty" },
  ];

  return (
    <div className="w-full font-sans bg-[#FDF8EE] min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-stone-800">
      <div className="max-w-2xl mx-auto bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 border border-amber-100/60 shadow-xs">
        
        {/* TOP HEADER */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-amber-100/60">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100/50 text-[#E69D43] rounded-2xl">
              <PackagePlus size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#2D122D]">
                Add Bakery Item
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                Fill in details to add a new delicious product to your store.
              </p>
            </div>
          </div>
          
          <button 
            type="button"
            onClick={() => navigate("/admin/products")}
            className="p-2.5 text-stone-500 hover:text-[#2D122D] hover:bg-amber-100/50 rounded-2xl transition border border-amber-100/60"
            title="Back to products"
          >
            <ArrowLeft size={18} />
          </button>
        </div>

        {/* FORM SECTION */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {/* Title */}
          <div>
            <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">
              Item Name / Title
            </label>
            <div className="relative">
              <Tag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500/70" size={16} />
              <input
                type="text"
                name="title"
                value={form.title}
                onChange={handleChange}
                placeholder="e.g. Fresh Chocolate Lava Cake"
                className="w-full bg-[#FDF8EE]/60 border border-amber-200/60 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-semibold text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E69D43] focus:bg-white transition"
                required
              />
            </div>
          </div>

          {/* Category & Price Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Category Select */}
            <div>
              <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">
                Category
              </label>
              <div className="relative">
                <Layers className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500/70" size={16} />
                <select
                  name="category"
                  value={form.category}
                  onChange={handleChange}
                  className="w-full bg-[#FDF8EE]/60 border border-amber-200/60 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-semibold text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#E69D43] focus:bg-white transition appearance-none cursor-pointer"
                  required
                >
                  <option value="">Select Category</option>
                  {categoriesList.map((cat, idx) => (
                    <option key={idx} value={cat.value}>{cat.name}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Price */}
            <div>
              <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">
                Price ($)
              </label>
              <div className="relative">
                <DollarSign className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500/70" size={16} />
                <input
                  type="number"
                  step="0.01"
                  name="price"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="12.99"
                  className="w-full bg-[#FDF8EE]/60 border border-amber-200/60 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-semibold text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E69D43] focus:bg-white transition"
                  required
                />
              </div>
            </div>

          </div>

          {/* Stock & Image URL Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Stock */}
            <div>
              <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">
                Stock Units
              </label>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
                placeholder="20"
                className="w-full bg-[#FDF8EE]/60 border border-amber-200/60 rounded-2xl px-4 py-2.5 text-xs font-semibold text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E69D43] focus:bg-white transition"
                required
              />
            </div>

            {/* Image URL */}
            <div className="sm:col-span-2">
              <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">
                Image URL
              </label>
              <div className="relative">
                <Image className="absolute left-3.5 top-1/2 -translate-y-1/2 text-amber-500/70" size={16} />
                <input
                  type="text"
                  name="image"
                  value={form.image}
                  onChange={handleChange}
                  placeholder="https://images.unsplash.com/photo-..."
                  className="w-full bg-[#FDF8EE]/60 border border-amber-200/60 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-semibold text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E69D43] focus:bg-white transition"
                  required
                />
              </div>
            </div>

          </div>

          {/* Image Preview Box */}
          {form.image && (
            <div className="mt-2 p-3 bg-[#FDF8EE] border border-amber-100 rounded-2xl flex items-center gap-3">
              <img 
                src={form.image} 
                alt="Preview" 
                className="w-12 h-12 object-contain bg-white rounded-xl border border-amber-100 p-1 shrink-0"
                onError={(e) => (e.target.style.display = "none")}
              />
              <span className="text-[11px] text-stone-500 truncate font-mono">{form.image}</span>
            </div>
          )}

          {/* Description */}
          <div>
            <label className="block text-[11px] font-bold text-stone-500 uppercase tracking-wider mb-2">
              Description
            </label>
            <div className="relative">
              <FileText className="absolute left-3.5 top-3 text-amber-500/70" size={16} />
              <textarea
                name="description"
                rows="4"
                value={form.description}
                onChange={handleChange}
                placeholder="Baked fresh with real cocoa butter and natural ingredients..."
                className="w-full bg-[#FDF8EE]/60 border border-amber-200/60 rounded-2xl pl-10 pr-4 py-2.5 text-xs font-semibold text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#E69D43] focus:bg-white transition"
                required
              />
            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full mt-4 bg-[#E69D43] text-white font-bold py-3.5 rounded-full hover:bg-amber-600 active:scale-[0.99] transition shadow-xs text-xs flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
          >
            {submitting ? (
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            ) : (
              <>
                <PackagePlus size={18} /> <span>Save & Add Item</span>
              </>
            )}
          </button>

        </form>

      </div>
    </div>
  );
}