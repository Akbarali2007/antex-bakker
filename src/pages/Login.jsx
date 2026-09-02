// import React, { useState } from "react";
// import { Link } from "react-router";
// import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Login submit logic
//   };

//   return (
//     <div className="w-full min-h-screen bg-[#FDF8EE] font-sans text-stone-800 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-12">
      
//       {/* Main Login Card Section */}
//       <main className="max-w-4xl mx-auto w-full my-8">
//         <div className="bg-[#FFFDF9] rounded-3xl shadow-lg border border-amber-100/60 overflow-hidden flex flex-col md:flex-row items-stretch">
          
//           {/* Left Side Visual Banner (Plum Background Theme) */}
//           <div className="w-full md:w-5/12 bg-[#2D122D] text-white p-8 sm:p-10 flex flex-col justify-between text-center md:text-left relative overflow-hidden min-h-[280px] md:min-h-[460px]">
//             {/* Background Decorative Graphic */}
//             <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
//             <div className="space-y-3 z-10">
//               <span className="font-serif italic text-amber-400 text-lg sm:text-xl block">
//                 Welcome Back
//               </span>
//               <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
//                 Fresh Baked <br />
//                 Goodness Awaits!
//               </h2>
//               <p className="text-xs text-stone-300 leading-relaxed pt-2">
//                 Sign in to access your personal account, view live order updates, and enjoy exclusive sweet deals.
//               </p>
//             </div>

//             <div className="z-10 pt-6">
//               <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-3 text-left">
//                 <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white text-sm shrink-0">
//                   100%
//                 </div>
//                 <p className="text-[11px] text-stone-200 leading-snug">
//                   Fresh & Natural baked goods straight from our oven to your doorstep.
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Form */}
//           <div className="w-full md:w-7/12 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
//             <div className="mb-6">
//               <h3 className="text-2xl sm:text-3xl font-black text-[#2D122D]">
//                 Log In
//               </h3>
//               <p className="text-xs text-stone-500 mt-1">
//                 Enter your details to log into your account
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-4">
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

//               {/* Password Input */}
//               <div className="space-y-1">
//                 <div className="flex justify-between items-center">
//                   <label className="text-xs font-bold text-[#2D122D] block">
//                     Password
//                   </label>
//                   <Link
//                     to="/forgot-password"
//                     className="text-[11px] font-semibold text-amber-600 hover:underline"
//                   >
//                     Forgot password?
//                   </Link>
//                 </div>
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
//                     className="absolute right-4 text-stone-400 hover:text-stone-600"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//               </div>

//               {/* Remember Me Checkbox */}
//               <div className="flex items-center gap-2 pt-1">
//                 <input
//                   type="checkbox"
//                   id="remember"
//                   className="rounded border-stone-300 text-amber-500 focus:ring-amber-400 w-3.5 h-3.5"
//                 />
//                 <label htmlFor="remember" className="text-xs text-stone-600 cursor-pointer">
//                   Remember me on this device
//                 </label>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-[#2D122D] text-white text-xs font-bold py-3.5 rounded-full hover:bg-[#3d1a3d] transition shadow-md flex items-center justify-center gap-2 group mt-3"
//               >
//                 <span>Log In</span>
//                 <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//               </button>
//             </form>

//             {/* Footer Navigation Link */}
//             <div className="mt-8 text-center pt-4 border-t border-stone-100">
//               <p className="text-xs text-stone-500">
//                 Don't have an account yet?{" "}
//                 <Link
//                   to="/signup"
//                   className="font-bold text-amber-600 hover:underline"
//                 >
//                   Create Account
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
import { Mail, Lock, ArrowRight, Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  // Input Change Handler
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // API Submit Handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await api.post("/auth/login", form);
      console.log(res, "data");

      // Save token and user ID to localStorage
      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }
      if (res.data?.user?._id || res.data?.user?.id) {
        localStorage.setItem("userId", res.data.user._id || res.data.user.id);
      }

      setMsg("Login Successful");

      // Dispatch event for Header/Navbar sync
      window.dispatchEvent(new Event("cartUpdated"));

      // 1 second delay for user feedback before navigation
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      setMsg(
        error.response?.data?.message ||
          error.response?.data?.error?.message ||
          "An error occurred"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#FDF8EE] font-sans text-stone-800 flex flex-col justify-between py-6 px-4 sm:px-6 lg:px-12">
      
      {/* Main Login Card Section */}
      <main className="max-w-4xl mx-auto w-full my-8">
        <div className="bg-[#FFFDF9] rounded-3xl shadow-lg border border-amber-100/60 overflow-hidden flex flex-col md:flex-row items-stretch">
          
          {/* Left Side Visual Banner (Plum Background Theme) */}
          <div className="w-full md:w-5/12 bg-[#2D122D] text-white p-8 sm:p-10 flex flex-col justify-between text-center md:text-left relative overflow-hidden min-h-[280px] md:min-h-[460px]">
            {/* Background Decorative Graphic */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            
            <div className="space-y-3 z-10">
              <span className="font-serif italic text-amber-400 text-lg sm:text-xl block">
                Welcome Back
              </span>
              <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                Fresh Baked <br />
                Goodness Awaits!
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed pt-2">
                Sign in to access your personal account, view live order updates, and enjoy exclusive sweet deals.
              </p>
            </div>

            <div className="z-10 pt-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 flex items-center gap-3 text-left">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center font-bold text-white text-sm shrink-0">
                  100%
                </div>
                <p className="text-[11px] text-stone-200 leading-snug">
                  Fresh & Natural baked goods straight from our oven to your doorstep.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full md:w-7/12 p-6 sm:p-10 lg:p-12 flex flex-col justify-center">
            <div className="mb-6">
              <h3 className="text-2xl sm:text-3xl font-black text-[#2D122D]">
                Log In
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Enter your details to log into your account
              </p>
            </div>

            {/* API Status Banner */}
            {msg && (
              <div
                className={`mb-5 text-xs font-bold py-2.5 px-4 rounded-xl text-center border ${
                  msg === "Login Successful"
                    ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                    : "bg-rose-50 text-rose-600 border-rose-200"
                }`}
              >
                {msg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
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
                    value={form.email}
                    onChange={handleChange}
                    placeholder="yourname@domain.com"
                    required
                    className="w-full bg-[#FAF6F0] text-stone-900 text-xs pl-11 pr-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <label className="text-xs font-bold text-[#2D122D] block">
                    Password
                  </label>
                  <Link
                    to="/forgot-password"
                    className="text-[11px] font-semibold text-amber-600 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="relative flex items-center">
                  <Lock className="w-4 h-4 text-stone-400 absolute left-4" />
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
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
                className="w-full bg-[#2D122D] text-white text-xs font-bold py-3.5 rounded-full hover:bg-[#3d1a3d] transition shadow-md flex items-center justify-center gap-2 group mt-3 disabled:opacity-50 cursor-pointer"
              >
                <span>{loading ? "LOGGING IN..." : "Log In"}</span>
                {!loading && (
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                )}
              </button>
            </form>

            {/* Footer Navigation Link */}
            <div className="mt-8 text-center pt-4 border-t border-stone-100">
              <p className="text-xs text-stone-500">
                Don't have an account yet?{" "}
                <Link
                  to="/signup"
                  className="font-bold text-amber-600 hover:underline"
                >
                  Create Account
                </Link>
              </p>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
}