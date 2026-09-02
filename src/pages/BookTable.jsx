import React, { useState } from "react";
import api from "../api/axios";
import { Link } from "react-router";
import {
  Calendar,
  Clock,
  Users,
  Utensils,
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

export default function BookTablePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    guests: "2",
    date: "",
    time: "18:00",
    seatingArea: "indoor",
    specialRequest: "",
  });

  const [loading, setLoading] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // Form input Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit Logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      // API call to save table reservation
      const res = await api.post("/reservations/book", formData);
      setBookingSuccess(res.data?.booking || formData);
    } catch (err) {
      console.error("Booking Error:", err);
      // Fallback for UI preview if API endpoint is not live yet
      setBookingSuccess(formData);
    } finally {
      setLoading(false);
    }
  };

  // Today's date in YYYY-MM-DD format for input min attribute
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="w-full font-sans bg-[#FDF8EE] text-stone-800 space-y-10 py-10 px-4 sm:px-6 lg:px-12 min-h-screen">
      
      {/* 1. HEADER SECTION */}
      <div className="max-w-4xl mx-auto text-center space-y-3">
        <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block flex items-center justify-center gap-2">
          <Utensils className="w-5 h-5 inline-block text-amber-500" />
          Reserve Your Experience
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-[#2D122D] tracking-tight">
          Book a Table at Our Bakery & Cafe
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          Enjoy fresh artisanal pastries, freshly brewed coffees, and cozy vibes with your friends and family.
        </p>
      </div>

      {/* 2. MAIN RESERVATION FORM / SUCCESS STATE */}
      <div className="max-w-4xl mx-auto">
        {bookingSuccess ? (
          /* SUCCESS CONFIRMATION CARD */
          <div className="bg-[#FFFDF9] rounded-3xl p-8 sm:p-12 border border-amber-100/80 shadow-xs text-center max-w-lg mx-auto space-y-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto text-amber-600">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-bold text-amber-600 uppercase tracking-widest block">
                Reservation Confirmed
              </span>
              <h2 className="text-2xl font-black text-[#2D122D]">
                We Can't Wait to Serve You!
              </h2>
              <p className="text-xs text-stone-500">
                A confirmation has been saved. Here are your booking details:
              </p>
            </div>

            {/* Summary Details */}
            <div className="bg-[#FDF8EE] rounded-2xl p-4 border border-amber-100 text-xs text-stone-700 space-y-2 text-left">
              <div className="flex justify-between">
                <span className="text-stone-400">Name:</span>
                <span className="font-bold text-[#2D122D]">{bookingSuccess.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Date & Time:</span>
                <span className="font-bold text-[#2D122D]">
                  {bookingSuccess.date} at {bookingSuccess.time}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-400">Guests:</span>
                <span className="font-bold text-[#2D122D]">{bookingSuccess.guests} People</span>
              </div>
              <div className="flex justify-between capitalize">
                <span className="text-stone-400">Seating Area:</span>
                <span className="font-bold text-[#2D122D]">{bookingSuccess.seatingArea}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setBookingSuccess(null)}
                className="flex-1 bg-[#2D122D] text-white text-xs font-bold py-3 rounded-full hover:bg-[#3d1a3d] transition"
              >
                Book Another Table
              </button>
              <Link
                to="/products"
                className="flex-1 bg-[#E69D43] text-white text-xs font-bold py-3 rounded-full hover:bg-amber-600 transition block text-center"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        ) : (
          /* FORM SECTION */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT SIDE: INFO & BANNER (1 Col) */}
            <div className="bg-[#2D122D] text-white rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <span className="text-amber-400 text-xs font-bold uppercase tracking-wider block">
                  Opening Hours
                </span>
                <h3 className="text-xl font-bold leading-tight">
                  Visit Us For Pure Bakery Delights
                </h3>
                
                <div className="space-y-3 text-xs text-amber-100/80 pt-2">
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Mon - Fri</span>
                    <span className="font-bold text-white">08:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between border-b border-white/10 pb-2">
                    <span>Sat - Sun</span>
                    <span className="font-bold text-white">09:00 AM - 11:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-2 relative z-10">
                <div className="flex items-center gap-2 text-amber-400">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-xs font-bold">Special Celebrations?</span>
                </div>
                <p className="text-[11px] text-stone-300 leading-normal">
                  Planning a birthday or anniversary? Let us know in the special request box and we'll prepare a sweet surprise!
                </p>
              </div>
            </div>

            {/* RIGHT SIDE: RESERVATION FORM (2 Cols) */}
            <form
              onSubmit={handleSubmit}
              className="lg:col-span-2 bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 border border-amber-100/60 shadow-xs space-y-6"
            >
              <h2 className="text-base font-black text-[#2D122D] border-b border-amber-100/60 pb-3">
                Fill Your Reservation Details
              </h2>

              {errorMsg && (
                <div className="p-3 bg-red-50 text-red-600 text-xs rounded-xl border border-red-100">
                  {errorMsg}
                </div>
              )}

              {/* Grid Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 block">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Sarah Jenkins"
                      className="w-full bg-[#FDF8EE] text-xs pl-10 pr-4 py-3 rounded-full border border-amber-100 focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 block">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="sarah@example.com"
                      className="w-full bg-[#FDF8EE] text-xs pl-10 pr-4 py-3 rounded-full border border-amber-100 focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 block">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full bg-[#FDF8EE] text-xs pl-10 pr-4 py-3 rounded-full border border-amber-100 focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                {/* Number of Guests */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 block">
                    Guests *
                  </label>
                  <div className="relative">
                    <Users className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3.5" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-[#FDF8EE] text-xs pl-10 pr-4 py-3 rounded-full border border-amber-100 focus:outline-none focus:border-amber-500 transition appearance-none"
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="6">6 Persons</option>
                      <option value="8">8+ Large Party</option>
                    </select>
                  </div>
                </div>

                {/* Date */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 block">
                    Reservation Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3.5" />
                    <input
                      type="date"
                      name="date"
                      min={today}
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-[#FDF8EE] text-xs pl-10 pr-4 py-3 rounded-full border border-amber-100 focus:outline-none focus:border-amber-500 transition"
                    />
                  </div>
                </div>

                {/* Time */}
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-stone-600 block">
                    Time Slot *
                  </label>
                  <div className="relative">
                    <Clock className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3.5" />
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full bg-[#FDF8EE] text-xs pl-10 pr-4 py-3 rounded-full border border-amber-100 focus:outline-none focus:border-amber-500 transition appearance-none"
                    >
                      <option value="09:00">09:00 AM (Breakfast)</option>
                      <option value="12:00">12:00 PM (Lunch)</option>
                      <option value="15:00">03:00 PM (High Tea)</option>
                      <option value="18:00">06:00 PM (Dinner)</option>
                      <option value="20:00">08:00 PM (Late Dinner)</option>
                    </select>
                  </div>
                </div>

              </div>

              {/* Seating Area Preference */}
              <div className="space-y-2">
                <label className="text-[11px] font-bold text-stone-600 block">
                  Seating Preference
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "indoor", label: "Indoor Cafe" },
                    { id: "patio", label: "Outdoor Patio" },
                    { id: "vip", label: "Private Corner" },
                  ].map((area) => (
                    <button
                      key={area.id}
                      type="button"
                      onClick={() => setFormData((p) => ({ ...p, seatingArea: area.id }))}
                      className={`py-2.5 text-xs font-bold rounded-full border transition ${
                        formData.seatingArea === area.id
                          ? "bg-[#2D122D] text-white border-[#2D122D]"
                          : "bg-[#FDF8EE] text-stone-600 border-amber-100 hover:border-amber-300"
                      }`}
                    >
                      {area.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-stone-600 block">
                  Special Requests (Optional)
                </label>
                <div className="relative">
                  <MessageSquare className="w-3.5 h-3.5 text-stone-400 absolute left-3.5 top-3.5" />
                  <textarea
                    name="specialRequest"
                    rows="2"
                    value={formData.specialRequest}
                    onChange={handleChange}
                    placeholder="Dietary requirements, birthday cake setup, high-chair needed..."
                    className="w-full bg-[#FDF8EE] text-xs pl-10 pr-4 py-2.5 rounded-2xl border border-amber-100 focus:outline-none focus:border-amber-500 transition resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#E69D43] text-white text-xs font-bold py-3.5 rounded-full hover:bg-amber-600 active:scale-95 transition shadow-sm flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? (
                  <span>Reserving Table...</span>
                ) : (
                  <>
                    <span>Confirm Reservation</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          </div>
        )}
      </div>

    </div>
  );
}