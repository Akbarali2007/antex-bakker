import { useState, useEffect } from "react";
import api from "../api/axios";
import { Link } from "react-router";
import { Plus, Edit2, Trash2, Package, Layers } from "lucide-react";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. API se Products load karne ka function
  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await api.get("/products");
      setProducts(Array.isArray(response.data) ? response.data : response.data.products || []);
    } catch (error) {
      console.error("Error loading products:", error);
    } finally {
      setLoading(false);
    }
  };

  // 2. Product delete karne ka function
  const deletedProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    try {
      await api.delete(`/products/delete/${id}`);
      alert("Product deleted successfully!");
      loadProducts();
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <div className="w-full font-sans bg-[#FDF8EE] min-h-screen py-8 px-4 sm:px-6 lg:px-8 text-stone-800">
      <div className="max-w-6xl mx-auto space-y-6">
        
        {/* HEADER SECTION */}
        <div className="bg-[#FFFDF9] p-6 rounded-3xl border border-amber-100/60 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-amber-100/50 text-[#E69D43] rounded-2xl">
              <Package size={24} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black text-[#2D122D]">
                Bakery Inventory
              </h2>
              <p className="text-xs text-stone-500 font-medium">
                Manage and track your active store products
              </p>
            </div>
          </div>

          <Link
            to="/admin/products/add"
            className="w-full sm:w-auto bg-[#E69D43] hover:bg-amber-600 active:scale-95 text-white font-bold text-xs px-5 py-3 rounded-full transition shadow-xs flex items-center justify-center gap-2"
          >
            <Plus size={16} /> Add New Product
          </Link>
        </div>

        {/* TABLE SECTION */}
        <div className="bg-[#FFFDF9] rounded-3xl border border-amber-100/60 shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#FDF8EE]/60 border-b border-amber-100/60 text-[11px] font-bold text-stone-400 uppercase tracking-wider">
                  <th className="py-4 px-6">Product</th>
                  <th className="py-4 px-6 text-center">Price</th>
                  <th className="py-4 px-6 text-center">Stock</th>
                  <th className="py-4 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100/40 text-xs font-semibold">
                {loading ? (
                  <tr>
                    <td colSpan="4" className="text-center py-12 text-stone-400">
                      <div className="flex flex-col items-center justify-center gap-2">
                        <div className="w-6 h-6 border-2 border-[#E69D43] border-t-transparent rounded-full animate-spin"></div>
                        <span>Loading inventory...</span>
                      </div>
                    </td>
                  </tr>
                ) : products.length > 0 ? (
                  products.map((product) => {
                    const productId = product._id || product.id;
                    return (
                      <tr key={productId} className="hover:bg-amber-50/30 transition">
                        
                        {/* Title & Image Preview */}
                        <td className="py-4 px-6 text-[#2D122D]">
                          <div className="flex items-center gap-3">
                            {product.image ? (
                              <img
                                src={product.image}
                                alt={product.title || product.name}
                                className="w-10 h-10 object-contain rounded-xl bg-amber-50 border border-amber-100 p-1 shrink-0"
                              />
                            ) : (
                              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-400 shrink-0">
                                <Layers size={18} />
                              </div>
                            )}
                            <span className="line-clamp-1 font-bold">
                              {product.title || product.name}
                            </span>
                          </div>
                        </td>

                        {/* Price */}
                        <td className="py-4 px-6 text-center font-black text-[#2D122D]">
                          ${product.price}
                        </td>

                        {/* Stock Badge */}
                        <td className="py-4 px-6 text-center">
                          <span
                            className={`inline-block text-[11px] font-bold px-3 py-1 rounded-full ${
                              product.stock > 0
                                ? "bg-amber-100/60 text-amber-900"
                                : "bg-red-100/60 text-red-700"
                            }`}
                          >
                            {product.stock > 0 ? `${product.stock} units` : "Out of Stock"}
                          </span>
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Link
                              to={`/admin/products/edit/${productId}`}
                              className="p-2 text-stone-600 hover:text-[#2D122D] hover:bg-amber-100/50 rounded-lg transition"
                              title="Edit Product"
                            >
                              <Edit2 size={16} />
                            </Link>

                            <button
                              onClick={() => deletedProduct(productId)}
                              className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition cursor-pointer"
                              title="Delete Product"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>

                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-12 text-stone-400 text-xs font-semibold">
                      No products found in inventory.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}