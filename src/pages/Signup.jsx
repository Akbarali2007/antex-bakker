// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router";
// import api from "../api/axios";
// import { Mail, Lock, User, Phone, ArrowRight, Eye, EyeOff } from "lucide-react";

// export default function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [msg, setMsg] = useState("");
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   // Input Change Handler
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // API Submit Handler
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMsg("");

//     try {
//       const response = await api.post("/auth/signup", formData);
//       setMsg(response.data.message || "Registration Successful!");

//       // 1.5 seconds baad Login page par redirect
//       setTimeout(() => {
//         navigate("/login");
//       }, 1500);
//     } catch (error) {
//       setMsg(error.response?.data?.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#FDF8EE] font-sans text-stone-800 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-12">
      
//       {/* Main Signup Card Section */}
//       <main className="max-w-4xl mx-auto w-full my-8">
//         <div className="bg-[#FFFDF9] rounded-3xl shadow-lg border border-amber-100/60 overflow-hidden flex flex-col md:flex-row items-stretch">
          
//           {/* Left Side Visual Banner (Plum Background Theme) */}
//           <div className="w-full md:w-5/12 bg-[#2D122D] text-white p-8 sm:p-10 flex flex-col justify-between text-center md:text-left relative overflow-hidden min-h-[280px] md:min-h-[520px]">
//             {/* Background Decorative Graphic */}
//             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
//             <div className="space-y-3 z-10">
//               <span className="font-serif italic text-amber-400 text-lg sm:text-xl block">
//                 Join Our Family
//               </span>
//               <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
//                 Start Your <br />
//                 Sweet Journey!
//               </h2>
//               <p className="text-xs text-stone-300 leading-relaxed pt-2">
//                 Create an account to unlock special member discounts, save custom orders, and order freshly baked treats effortlessly.
//               </p>
//             </div>

//             <div className="z-10 pt-6">
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-3 text-left">
//                 <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white text-xs shrink-0">
//                   10% OFF
//                 </div>
//                 <p className="text-[11px] text-stone-200 leading-snug">
//                   Get exclusive discounts on your first cake order after signing up!
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Form */}
//           <div className="w-full md:w-7/12 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
//             <div className="mb-6">
//               <h3 className="text-2xl sm:text-3xl font-black text-[#2D122D]">
//                 Create Account
//               </h3>
//               <p className="text-xs text-stone-500 mt-1">
//                 Fill in your details to get started with antix_r
//               </p>
//             </div>

//             {/* API Dynamic Status Message Banner */}
//             {msg && (
//               <div
//                 className={`mb-5 text-xs font-bold py-2.5 px-4 rounded-xl text-center border ${
//                   msg.toLowerCase().includes("success")
//                     ? "bg-emerald-50 text-emerald-700 border-emerald-200"
//                     : "bg-rose-50 text-rose-600 border-rose-200"
//                 }`}
//               >
//                 {msg}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               {/* Full Name Input */}
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-[#2D122D] block">
//                   Full Name
//                 </label>
//                 <div className="relative flex items-center">
//                   <User className="w-4 h-4 text-stone-400 absolute left-4" />
//                   <input
//                     type="text"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder="John Doe"
//                     required
//                     className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
//                   />
//                 </div>
//               </div>

//               {/* Email Input */}
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-[#2D122D] block">
//                   Email Address
//                 </label>
//                 <div className="relative flex items-center">
//                   <Mail className="w-4 h-4 text-stone-400 absolute left-4" />
//                   <input
//                     type="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder="yourname@domain.com"
//                     required
//                     className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
//                   />
//                 </div>
//               </div>

//               {/* Phone Input */}
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-[#2D122D] block">
//                   Phone Number
//                 </label>
//                 <div className="relative flex items-center">
//                   <Phone className="w-4 h-4 text-stone-400 absolute left-4" />
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     placeholder="+1 234 567 890"
//                     required
//                     className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
//                   />
//                 </div>
//               </div>

//               {/* Password Input */}
//               <div className="space-y-1">
//                 <label className="text-xs font-bold text-[#2D122D] block">
//                   Password
//                 </label>
//                 <div className="relative flex items-center">
//                   <Lock className="w-4 h-4 text-stone-400 absolute left-4" />
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     placeholder="••••••••"
//                     required
//                     className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-11 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-4 text-stone-400 hover:text-stone-600 focus:outline-none"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Dynamic Submit Button with Loading State */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full bg-[#2D122D] text-white text-xs font-bold py-3.5 rounded-full hover:bg-[#3d1a3d] transition shadow-md flex items-center justify-center gap-2 group mt-4 disabled:opacity-50 cursor-pointer"
//               >
//                 <span>{loading ? "CREATING ACCOUNT..." : "Sign Up"}</span>
//                 {!loading && (
//                   <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//                 )}
//               </button>
//             </form>

//             {/* Footer Navigation Link */}
//             <div className="mt-6 text-center pt-4 border-t border-stone-100">
//               <p className="text-xs text-stone-500">
//                 Already have an account?{" "}
//                 <Link
//                   to="/login"
//                   className="font-bold text-amber-600 hover:underline"
//                 >
//                   Log In
//                 </Link>
//               </p>
//             </div>
//           </div>

//         </div>
//       </main>

//     </div>
//   );
// }
import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import api from "../api/axios";
import { Mail, Lock, User, Phone, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    fullName: "", // Express schema safety ke liye dono keys sync ki hain
    email: "",
    phone: "",
    password: "",
  });

  // Input Change Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      // Agar 'name' change ho raha hai toh 'fullName' ko bhi updated rakhein
      ...(name === "name" ? { fullName: value } : {}),
    }));
  };

  // API Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    // Basic Client-Side Phone Validation
    if (!formData.phone || formData.phone.trim() === "") {
      setMsg("Phone number is required");
      setLoading(false);
      return;
    }

    try {
      const response = await api.post("/auth/signup", formData);
      setMsg(response.data?.message || "Registration Successful!");

      // 1.5 seconds baad Login page par redirect
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (error) {
      // Backend error string ya object standard response parser
      const backendErr =
        error.response?.data?.message ||
        error.response?.data?.error?.message ||
        "An error occurred during signup";

      setMsg(backendErr);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FDF8EE] font-sans text-stone-800 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-12">
      
      {/* Main Signup Card Section */}
      <main className="max-w-4xl mx-auto w-full my-8">
        <div className="bg-[#FFFDF9] rounded-3xl shadow-lg border border-amber-100/60 overflow-hidden flex flex-col md:flex-row items-stretch">
          
          {/* Left Side Visual Banner */}
          <div className="w-full md:w-5/12 bg-[#2D122D] text-white p-8 sm:p-10 flex flex-col justify-between text-center md:text-left relative overflow-hidden min-h-[280px] md:min-h-[520px]">
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-3 z-10">
              <span className="font-serif italic text-amber-400 text-lg sm:text-xl block">
                Join Our Family
              </span>
              <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                Start Your <br />
                Sweet Journey!
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed pt-2">
                Create an account to unlock special member discounts, save custom orders, and order freshly baked treats effortlessly.
              </p>
            </div>

            <div className="z-10 pt-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white text-xs shrink-0">
                  10% OFF
                </div>
                <p className="text-[11px] text-stone-200 leading-snug">
                  Get exclusive discounts on your first cake order after signing up!
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-7/12 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-black text-[#2D122D]">
                Create Account
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Fill in your details to get started with antix_r
              </p>
            </div>

            {/* API Dynamic Status Message Banner */}
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

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name Input */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2D122D] block">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <User className="w-4 h-4 text-stone-400 absolute left-4" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2D122D] block">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <Mail className="w-4 h-4 text-stone-400 absolute left-4" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourname@domain.com"
                    required
                    className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
              </div>

              {/* Phone Input */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2D122D] block">
                  Phone Number
                </label>
                <div className="relative flex items-center">
                  <Phone className="w-4 h-4 text-stone-400 absolute left-4" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 234 567 890"
                    required
                    className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2D122D] block">
                  Password
                </label>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-4" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-11 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-stone-400 hover:text-stone-600 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#2D122D] text-white text-xs font-bold py-3.5 rounded-full hover:bg-[#3d1a3d] transition shadow-md flex items-center justify-center gap-2 group mt-4 disabled:opacity-50 cursor-pointer"
              >
                <span>{loading ? "CREATING ACCOUNT..." : "Sign Up"}</span>
                {!loading && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                )}
              </button>
            </form>

            {/* Footer Navigation Link */}
            <div className="mt-6 text-center pt-4 border-t border-stone-100">
              <p className="text-xs text-stone-500">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-amber-600 hover:underline"
                >
                  Log In
                </Link>
              </p>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}