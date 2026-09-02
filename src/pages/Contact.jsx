import React, { useState } from "react";
import { Link } from "react-router";
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Message submit handler
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-amber-500" />,
      title: "Visit Our Bakery",
      detail: "123 Sweet Street, Bakery District, NY 10001",
    },
    {
      icon: <Phone className="w-5 h-5 text-amber-500" />,
      title: "Call Us Direct",
      detail: "+1 (555) 234-5678",
    },
    {
      icon: <Mail className="w-5 h-5 text-amber-500" />,
      title: "Email Support",
      detail: "hello@antixbakery.com",
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      title: "Opening Hours",
      detail: "Mon - Sun: 7:00 AM - 9:00 PM",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#FDF8EE] font-sans text-stone-800 space-y-16 py-6 px-4 sm:px-6 lg:px-12">
      
      {/* 2. HERO TITLE SECTION */}
      <section className="max-w-5xl mx-auto text-center space-y-3 pt-4">
        <span className="font-serif italic text-2xl sm:text-3xl text-amber-500 block">
          Get in Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#2D122D] tracking-tight max-w-2xl mx-auto leading-tight">
          We’d Love to Hear From You
        </h1>
        <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
          Have a question about custom cakes, catering, or orders? Drop us a line or visit our bakery!
        </p>
      </section>

      {/* 3. CONTACT INFO CARDS GRID */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {contactInfo.map((info, idx) => (
          <div
            key={idx}
            className="bg-[#FFFDF9] rounded-2xl p-6 border border-amber-100/60 shadow-sm flex flex-col items-center text-center space-y-2 hover:shadow-md transition duration-300"
          >
            <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center mb-1">
              {info.icon}
            </div>
            <h3 className="text-sm font-bold text-[#2D122D]">{info.title}</h3>
            <p className="text-xs text-stone-600 leading-snug">{info.detail}</p>
          </div>
        ))}
      </section>

      {/* 4. MAIN FORM & SIDE MAP/BANNER SECTION */}
      <section className="max-w-6xl mx-auto bg-[#FFFDF9] rounded-3xl border border-amber-100/60 shadow-lg overflow-hidden flex flex-col md:flex-row">
        
        {/* Left Form Side */}
        <div className="w-full md:w-7/12 p-6 sm:p-10 lg:p-12 space-y-6">
          <div>
            <h2 className="text-2xl font-black text-[#2D122D]">Send Us a Message</h2>
            <p className="text-xs text-stone-500 mt-1">
              Fill out the form below and our team will get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2D122D] block">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full bg-[#FAF6F0] text-stone-900 text-xs px-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                />
              </div>

              {/* Email */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-[#2D122D] block">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  required
                  className="w-full bg-[#FAF6F0] text-stone-900 text-xs px-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#2D122D] block">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Custom Order Inquiry"
                required
                className="w-full bg-[#FAF6F0] text-stone-900 text-xs px-4 py-3 rounded-full border border-stone-200 focus:outline-none focus:border-amber-500 transition"
              />
            </div>

            {/* Message */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-[#2D122D] block">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your event, preferred flavors, or special requests..."
                required
                className="w-full bg-[#FAF6F0] text-stone-900 text-xs p-4 rounded-2xl border border-stone-200 focus:outline-none focus:border-amber-500 transition resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#2D122D] text-white text-xs font-bold px-8 py-3.5 rounded-full hover:bg-[#3d1a3d] transition shadow-md flex items-center justify-center gap-2 group"
            >
              <span>Send Message</span>
              <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
            </button>
          </form>
        </div>

        {/* Right Dark Theme Banner / Map Visual */}
        <div className="w-full md:w-5/12 bg-[#2D122D] text-white p-8 sm:p-10 flex flex-col justify-between relative min-h-[300px]">
          <div className="space-y-3 z-10">
            <span className="font-serif italic text-amber-400 text-lg block">
              Custom Orders & Events
            </span>
            <h3 className="text-2xl font-black tracking-tight">
              Planning a Special Occasion?
            </h3>
            <p className="text-xs text-stone-300 leading-relaxed pt-1">
              We create custom wedding cakes, birthday pastries, and corporate gift hampers tailored specifically to your taste and theme.
            </p>
          </div>

          {/* Map/Bakery Preview Card */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10 space-y-2 mt-6 z-10">
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-amber-400" />
              <h4 className="text-xs font-bold text-white">Quick Response Guarantee</h4>
            </div>
            <p className="text-[11px] text-stone-300 leading-relaxed">
              For urgent orders or same-day inquiries, feel free to call us directly for instant confirmation.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}