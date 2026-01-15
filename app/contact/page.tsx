"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Send,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  MapPin,
} from "lucide-react";
import { ToastContainer, toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "Video Editing & Post-Production",
    budget: "Less than $500",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast("Message sent successfully!", {
          className:
            "bg-[#2D4B73] text-white border-l-4 border-[#72A9D1] rounded-xl shadow-lg px-4 py-3",
          progressClassName: "bg-[#72A9D1]",
          position: "bottom-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          transition: Slide,
          icon: false,
        });

        setFormData({
          fullName: "",
          email: "",
          phone: "",
          projectType: "Video Editing & Post-Production",
          budget: "Less than $500",
          message: "",
        });
      } else {
        toast("Failed to send message", {
          className:
            "bg-[#2D4B73] text-white border-l-4 border-[#72A9D1] rounded-xl shadow-lg px-4 py-3",
          progressClassName: "bg-[#72A9D1]",
          position: "bottom-right",
          autoClose: 3000,
          transition: Slide,
          icon: false,
        });
      }
    } catch (error) {
      console.error(error);
      toast("Something went wrong", {
        className:
          "bg-[#2D4B73] text-white border-l-4 border-[#72A9D1] rounded-xl shadow-lg px-4 py-3",
        progressClassName: "bg-[#72A9D1]",
        position: "bottom-right",
        autoClose: 3000,
        transition: Slide,
        icon: false,
      });
    } finally {
      setLoading(false);
    }
  };

  // Social links array
  const socialLinks = [
    { Icon: Instagram, url: "https://www.instagram.com/yrr_hammad16?igsh=MW16OWo2NmM4Njd1aA==" },
    { Icon: Linkedin, url: "https://www.linkedin.com/in/yourusername" },
    
    { Icon: Facebook, url: "https://www.facebook.com/yourprofile" },
  ];

  return (
    <section className="relative min-h-screen bg-[#0b0b0b] text-white px-6 md:px-20 py-24 overflow-hidden font-sans">
      {/* Background Decorative Glow */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#72A9D1]/10 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Heading */}
      <div className="relative text-center mb-16 md:mb-24 px-4">
  {/* Background Text - Adjusted for mobile */}
  <h1 className="absolute inset-0 flex items-center justify-center text-[50px] sm:text-[80px] md:text-[140px] font-extrabold text-white/5 tracking-tighter md:tracking-widest select-none pointer-events-none uppercase">
    Contact
  </h1>
  
  {/* Foreground Text - Scaled for smaller screens */}
  <h2 className="relative text-3xl sm:text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight">
    LET'S START A <span className="text-[#72A9D1]">PROJECT</span>
  </h2>
</div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-20">
          {/* LEFT SIDE: CONTACT INFO */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">
                Don't be shy!
              </h3>
              <p className="text-[#BDBDBD] leading-relaxed text-sm">
                Share your vision with me. With 3 years of industry experience, I
                am ready to take your videos and brand identity to the next level
                with high-quality visual storytelling.
              </p>
            </div>

            <div className="space-y-6">
              {[
                { Icon: Mail, label: "Email Me", value: "madi873807@gmail.com" },
                { Icon: Phone, label: "WhatsApp & Call", value: "+92 301-9873807" },
                { Icon: MapPin, label: "Location", value: "Wah Cantt, Punjab, Pakistan" },
              ].map(({ Icon, label, value }, i) => (
                <div className="flex items-center gap-5 group" key={i}>
                  <div className="w-12 h-12 rounded-full bg-[#5E5D6C]/20 flex items-center justify-center text-[#72A9D1] shadow-[0_0_15px_rgba(114,169,209,0.1)] group-hover:bg-[#72A9D1] group-hover:text-black transition-all">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-[#BDBDBD]/70 uppercase tracking-widest">
                      {label}
                    </p>
                    <p className="text-sm font-bold text-white tracking-wider">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map(({ Icon, url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#5E5D6C]/20 flex items-center justify-center text-white hover:bg-[#72A9D1] hover:text-black hover:shadow-[0_0_20px_rgba(114,169,209,0.4)] transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE: FORM */}
          <div className="lg:col-span-2 space-y-8 bg-[#5E5D6C]/20 p-8 rounded-3xl border border-[#2D4B73]">
            <form
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              onSubmit={handleSubmit}
            >
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#72A9D1] ml-4 uppercase tracking-[0.2em]">
                  Full Name
                </label>
                <input
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  type="text"
                  placeholder="e.g. John Doe"
                  className="w-full bg-[#2D4B73] border border-[#5E5D6C] rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#72A9D1] transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#72A9D1] ml-4 uppercase tracking-[0.2em]">
                  Email Address
                </label>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-[#2D4B73] border border-[#5E5D6C] rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#72A9D1] transition-all"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#72A9D1] ml-4 uppercase tracking-[0.2em]">
                  Service Needed
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full bg-[#2D4B73] border border-[#5E5D6C] rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#72A9D1] transition-all text-[#BDBDBD] appearance-none"
                >
                  <option>Video Editing & Post-Production</option>
                  <option>Graphic & Brand Design</option>
                  <option>Motion Graphics & VFX</option>
                  <option>Digital Marketing Assets</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#72A9D1] ml-4 uppercase tracking-[0.2em]">
                  Project Budget
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full bg-[#2D4B73] border border-[#5E5D6C] rounded-full px-6 py-3 text-sm focus:outline-none focus:border-[#72A9D1] transition-all text-[#BDBDBD] appearance-none"
                >
                  <option>Less than $500</option>
                  <option>$500 - $1,500</option>
                  <option>$1,500 - $3,000</option>
                  <option>$3,000+</option>
                </select>
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] font-bold text-[#72A9D1] ml-4 uppercase tracking-[0.2em]">
                  Project Brief
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your project goals and requirements..."
                  className="w-full bg-[#2D4B73] border border-[#5E5D6C] rounded-3xl px-8 py-4 text-sm focus:outline-none focus:border-[#72A9D1] transition-all text-white"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`group relative flex items-center overflow-hidden rounded-full border-2 border-[#72A9D1] px-10 py-4 font-black text-white transition-all duration-300 hover:shadow-[0_0_35px_rgba(114,169,209,0.5)] active:scale-95 w-full md:w-fit`}
              >
                <div className="absolute inset-0 bg-[#72A9D1] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="mr-12 tracking-[0.2em] uppercase text-sm relative z-10 group-hover:text-black">
                  {loading ? "Sending..." : "Send Inquiry"}
                </span>
                <span className="absolute right-0 flex h-full w-14 items-center justify-center bg-[#72A9D1] text-black z-20">
                  <Send
                    size={20}
                    strokeWidth={3}
                    className="group-hover:rotate-45 transition-transform duration-300"
                  />
                </span>
              </button>
            </form>
          </div>
        </div>

        {/* WAH CANTT MAP */}
        <div className="relative w-full h-[400px] rounded-3xl overflow-hidden border border-[#5E5D6C] group mb-20">
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#72A9D1]/30 transition-all duration-500 rounded-3xl z-10 pointer-events-none"></div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13277.584347895393!2d72.7161835!3d33.7744318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa666e4362a27%3A0x63249e0a24f0c406!2sWah%20Cantt%2C%20Rawalpindi%2C%20Punjab!5e0!3m2!1sen!2s!4v1704112345678"
            className="w-full h-full grayscale invert opacity-60 hover:opacity-100 transition-opacity duration-700"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        newestOnTop
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Slide}
        toastClassName="bg-[#2D4B73] text-white border-l-4 border-[#72A9D1] rounded-xl shadow-lg px-4 py-3 mb-4"
        style={{
          bottom: "20px",
          right: "20px",
          top: "auto",
          left: "auto",
          width: "auto",
          maxWidth: "90%",
        }}
      />
    </section>
  );
}
