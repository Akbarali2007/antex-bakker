import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import api from "../api/axios";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  ShoppingBag, 
  LogOut, 
  Edit3, 
  CheckCircle2, 
  Clock, 
  ChevronRight,
  ShieldCheck,
  Package,
  Loader
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile"); // 'profile' | 'orders'
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [msg, setMsg] = useState("");

  // User details state
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  // Sample order history state (API Integration Target)
  const [orders, setOrders] = useState([
    {
      id: "ORD-9842",
      date: "24 Aug 2026",
      total: "$42.50",
      status: "Delivered",
      items: ["Chocolate Truffle Cake (1kg)", "Red Velvet Cupcake x2"],
    },
    {
      id: "ORD-8711",
      date: "12 Aug 2026",
      total: "$18.00",
      status: "Processing",
      items: ["Fresh Blueberry Tart x4"],
    },
  ]);

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  // --- Fetch Logged-In User Profile ---
  useEffect(() => {
    if (!token || !userId) {
      navigate("/login");
      return;
    }

    const fetchUserProfile = async () => {
  try {
    setLoading(true);

    const res = await api.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    let currentUser = null;
    if (Array.isArray(res.data?.data)) {
      currentUser = res.data.data.find(
        (u) => u._id === userId || u.id === userId
      );
    } else if (res.data?.data) {
      currentUser = res.data.data;
    } else if (res.data) {
      currentUser = res.data;
    }

    if (currentUser) {
      setUserData({
        name: currentUser.name || currentUser.username || "",
        email: currentUser.email || "",
        phone: currentUser.phone || "",
        address: currentUser.address || "",
      });
    }
  } catch (error) {
    console.error("Error fetching profile details:", error);
    if (error.response?.status === 401) {
      handleLogout();
    }
  } finally {
    setLoading(false);
  }
};

    fetchUserProfile();
  }, [userId, token, navigate]);

  // Input Change Handler
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // --- Update Profile Data ---
  const handleUpdate = async (e) => {
    e.preventDefault();
    setUpdating(true);
    setMsg("");

    try {
      const res = await api.put("/api/users/update", userData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (res.data.status || res.status === 200) {
        setMsg("Profile updated successfully!");

        // Backend se aaye fresh updated data ko state mein sync karein
        const updatedData = res.data.data || res.data.user || userData;
        setUserData({
          name: updatedData.name || userData.name,
          email: updatedData.email || userData.email,
          phone: updatedData.phone || userData.phone,
          address: updatedData.address || userData.address,
        });
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      setMsg(
        error.response?.data?.message ||
        error.response?.data?.error?.message ||
        "Failed to update profile."
      );
    } finally {
      setUpdating(false);
    }
  };

  // --- Logout Handler ---
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("cartCount");

      window.dispatchEvent(new Event("userLoggedOut"));
      window.dispatchEvent(new Event("cartUpdated"));
      navigate("/login");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF8EE]">
        <Loader className="animate-spin text-amber-600" size={36} />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#FDF8EE] font-sans text-stone-800 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-12">
      
      {/* Main Profile Container */}
      <main className="max-w-5xl mx-auto w-full my-6">
        
        {/* Header Title */}
        <div className="mb-6 text-center md:text-left">
          <span className="font-serif italic text-amber-600 text-base sm:text-lg block">
            My Account
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#2D122D]">
            User Settings & Orders
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Left Sidebar Card */}
          <div className="md:col-span-4 bg-[#FFFDF9] rounded-3xl shadow-lg border border-amber-100/60 p-6 flex flex-col items-center text-center relative overflow-hidden">
            {/* Background Blob */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-amber-500/10 rounded-full blur-xl pointer-events-none"></div>

            {/* Avatar Circle */}
            <div className="w-24 h-24 rounded-full bg-[#2D122D] text-amber-400 font-bold text-3xl flex items-center justify-center border-4 border-amber-100 shadow-md mb-4 relative">
              {userData.name ? userData.name.charAt(0).toUpperCase() : "U"}
              <div className="absolute bottom-1 right-1 bg-amber-500 p-1.5 rounded-full text-white border-2 border-white">
                <ShieldCheck className="w-3.5 h-3.5" />
              </div>
            </div>

            <h2 className="text-xl font-extrabold text-[#2D122D]">
              {userData.name || "Customer Name"}
            </h2>
            <p className="text-xs text-stone-500 mt-0.5">{userData.email || "No email provided"}</p>

            {/* Navigation Tabs */}
            <div className="w-full space-y-2 mt-6 pt-6 border-t border-stone-100">
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full text-xs font-bold py-3 px-4 rounded-full flex items-center gap-3 transition cursor-pointer ${
                  activeTab === "profile"
                    ? "bg-[#2D122D] text-white shadow-md"
                    : "bg-[#FAF6F0] text-stone-600 hover:bg-amber-100/50"
                }`}
              >
                <User className="w-4 h-4 text-amber-500" />
                <span>Personal Information</span>
              </button>

              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full text-xs font-bold py-3 px-4 rounded-full flex items-center gap-3 transition cursor-pointer ${
                  activeTab === "orders"
                    ? "bg-[#2D122D] text-white shadow-md"
                    : "bg-[#FAF6F0] text-stone-600 hover:bg-amber-100/50"
                }`}
              >
                <ShoppingBag className="w-4 h-4 text-amber-500" />
                <span>My Orders</span>
              </button>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="w-full text-xs font-bold py-3 px-4 rounded-full flex items-center gap-3 transition text-rose-600 bg-rose-50 hover:bg-rose-100 mt-4 cursor-pointer"
              >
                <LogOut className="w-4 h-4" />
                <span>Log Out</span>
              </button>
            </div>
          </div>

          {/* Right Main Content Area */}
          <div className="md:col-span-8 bg-[#FFFDF9] rounded-3xl shadow-lg border border-amber-100/60 p-6 sm:p-8">
            
            {/* TAB 1: PROFILE DETAILS FORM */}
            {activeTab === "profile" && (
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
                  <div>
                    <h3 className="text-xl font-black text-[#2D122D]">
                      Account Details
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Update your contact and shipping information
                    </p>
                  </div>
                  <Edit3 className="w-5 h-5 text-amber-600" />
                </div>

                {/* API Status Banner */}
                {msg && (
                  <div
                    className={`mb-5 text-xs font-bold py-2.5 px-4 rounded-xl text-center border ${
                      msg.toLowerCase().includes("success")
                        ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                        : "bg-rose-50 text-rose-600 border-rose-200"
                    }`}
                  >
                    {msg}
                  </div>
                )}

                <form onSubmit={handleUpdate} className="space-y-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2D122D] block">
                      Full Name
                    </label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-stone-400 absolute left-4" />
                      <input
                        type="text"
                        name="name"
                        value={userData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter full name"
                        className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2D122D] block">
                      Email Address
                    </label>
                    <div className="relative flex items-center">
                      <Mail className="w-4 h-4 text-stone-400 absolute left-4" />
                      <input
                        type="email"
                        name="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="Enter email address"
                        className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2D122D] block">
                      Phone Number
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="w-4 h-4 text-stone-400 absolute left-4" />
                      <input
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        placeholder="Enter phone number"
                        className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                      />
                    </div>
                  </div>

                  {/* Delivery Address */}
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#2D122D] block">
                      Default Delivery Address
                    </label>
                    <div className="relative flex items-start">
                      <MapPin className="w-4 h-4 text-stone-400 absolute left-4 top-3.5" />
                      <textarea
                        name="address"
                        rows="3"
                        value={userData.address}
                        onChange={handleChange}
                        placeholder="Enter house no, street name, area..."
                        className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-2xl border border-stone-200 focus:outline-none focus:border-amber-500 transition resize-none"
                      />
                    </div>
                  </div>

                  {/* Save Changes Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={updating}
                      className="bg-[#2D122D] text-white text-xs font-bold py-3.5 px-8 rounded-full hover:bg-[#3d1a3d] transition shadow-md flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                    >
                      <span>{updating ? "SAVING CHANGES..." : "Save Changes"}</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB 2: MY ORDERS HISTORY */}
            {activeTab === "orders" && (
              <div>
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-stone-100">
                  <div>
                    <h3 className="text-xl font-black text-[#2D122D]">
                      Order History
                    </h3>
                    <p className="text-xs text-stone-500 mt-0.5">
                      Check status and details of your previous orders
                    </p>
                  </div>
                  <Package className="w-5 h-5 text-amber-600" />
                </div>

                {orders.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-sm text-stone-500">No past orders found.</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div
                        key={order.id}
                        className="bg-[#FAF6F0] rounded-2xl p-4 sm:p-5 border border-amber-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center gap-3">
                            <span className="font-bold text-[#2D122D] text-sm">
                              {order.id}
                            </span>
                            <span
                              className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1 ${
                                order.status === "Delivered"
                                  ? "bg-emerald-100 text-emerald-700"
                                  : "bg-amber-100 text-amber-700"
                              }`}
                            >
                              {order.status === "Delivered" ? (
                                <CheckCircle2 className="w-3 h-3" />
                              ) : (
                                <Clock className="w-3 h-3" />
                              )}
                              {order.status}
                            </span>
                          </div>

                          <p className="text-xs text-stone-500">
                            Ordered on: <span className="font-medium text-stone-700">{order.date}</span>
                          </p>

                          <div className="text-xs text-stone-600 font-medium">
                            {order.items.join(", ")}
                          </div>
                        </div>

                        <div className="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-stone-200">
                          <span className="text-sm font-black text-[#2D122D]">
                            {order.total}
                          </span>
                          <button className="text-[11px] font-bold text-amber-600 hover:underline flex items-center gap-0.5 cursor-pointer mt-1">
                            <span>Details</span>
                            <ChevronRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

          </div>

        </div>
      </main>

    </div>
  );
}