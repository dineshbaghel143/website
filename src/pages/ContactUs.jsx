import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import abstractVideo from "../assets/abstract.mp4";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [budget, setBudget] = useState(50000);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendBtnRef = useRef(null);
  const interestRefs = useRef([]);
  const formRef = useRef(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [description, setDescription] = useState("");
  const [interest, setInterest] = useState([]);
  const [errors, setErrors] = useState({});
  const [submittedOnce, setSubmittedOnce] = useState(false);
  const isFormValid =
  name.trim() &&
  email.includes("@") &&
  mobile.length >= 10 &&
  interest.length > 0 &&
  description.trim();

  const ContactInfo = () => (
  <div
    className="space-y-8 sm:space-y-10 lg:space-y-12
               text-xl sm:text-2xl lg:text-3xl text-center"
  >
    {/* 📞 CALL */}
    <a
      href="tel:+919315312511"
      className="flex flex-col items-center gap-3
                 font-bold hover:text-pink-400 transition"
    >
      <FiPhoneCall
        className="text-pink-400 text-5xl sm:text-6xl
                   transition
                   hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]"
      />
      <span>+91 93153-12511</span>
    </a>

    {/* ✉️ EMAIL */}
    <a
      href="mailto:support@softwaregiant.in"
      className="flex flex-col items-center gap-3
                 font-bold hover:text-pink-400 transition break-all"
    >
      <FiMail
        className="text-pink-400 text-5xl sm:text-6xl
                   transition
                   hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]"
      />
      <span>support@softwaregiant.in</span>
    </a>

    {/* 📍 MAP */}
    <a
      href="https://www.google.com/maps/search/?api=1&query=Sector+50+Noida+D-123"
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-3
                 font-bold hover:text-pink-400 transition"
    >
      <FiMapPin
        className="text-pink-400 text-5xl sm:text-6xl
                   transition
                   hover:drop-shadow-[0_0_12px_rgba(236,72,153,0.9)]"
      />
      <span className="leading-snug">
        2nd floor, D-123<br />
        Sector-50, Noida<br />
        201301
      </span>
    </a>
  </div>
);

const validateForm = () => {
  const newErrors = {};

  if (!name.trim()) newErrors.name = "Name is required";
  if (!/^\S+@\S+\.\S+$/.test(email))
  newErrors.email = "Valid email required";
  if (!/^\d{10}$/.test(mobile))
  newErrors.mobile = "Enter 10 digit mobile number";
  if (interest.length === 0) newErrors.interest = "Select at least one interest";
  if (!description.trim()) newErrors.description = "Project description required";

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

  const handleSubmit = async () => {
    setSubmittedOnce(true);
  if (!validateForm()) {
    return;
  }
  setLoading(true);

  const formData = new URLSearchParams();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("mobile", mobile);
  formData.append("interest", interest.join(", "));
  formData.append("budget", String(budget));
  formData.append("currency", currency);
  formData.append("description", description);

  try {
    // 1) Pehle Google Sheet ko hit karo
    const resSheet = await fetch("https://script.google.com/macros/s/AKfycbzDYtc-LUrdFNt1gndjobQeINJL-j6qAYTDAYnRDFVhWoqMPPDR9qTBrzhG4Gfehj2w/exec", {
      method: "POST",
      body: formData,
    });

    const sheetText = await resSheet.text();
    console.log("Sheet response:", sheetText);

    // 2) Phir Node backend pe email ke liye hit karo
    const resEmail = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        mobile,
        interest: interest.join(", "),
        budget,
        currency,
        description,
      }),
    });

    const emailData = await resEmail.json();
    console.log("Email response:", emailData);

    if (sheetText.includes("success")) {
  setSuccess(true);

  // 🔥 FORM RESET (UX FIX)
  setName("");
  setEmail("");
  setMobile("");
  setDescription("");
  setInterest([]);
  setOpen(false);

  // 🔥 Success message auto-hide after 4 sec
  setTimeout(() => {
    setSuccess(false);
  }, 4000);
}

  } catch (err) {
    console.error("SUBMIT ERROR:", err);
  } finally {
    setLoading(false);
  }
};

    useEffect(() => {
    // SEND BUTTON hover
    if (sendBtnRef.current) {
        gsap.set(sendBtnRef.current, { scale: 1 });

        sendBtnRef.current.addEventListener("mouseenter", () => {
        gsap.to(sendBtnRef.current, {
            scale: 1.08,
            boxShadow: "0 10px 30px rgba(168,85,247,0.45)",
            duration: 0.3,
            ease: "power3.out",
        });
        });

        sendBtnRef.current.addEventListener("mouseleave", () => {
        gsap.to(sendBtnRef.current, {
            scale: 1,
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.3,
            ease: "power3.out",
        });
        });
    }

    // INTEREST TAGS hover
    interestRefs.current.forEach((el) => {
        if (!el) return;

        el.addEventListener("mouseenter", () => {
        gsap.to(el, {
            y: -4,
            scale: 1.06,
            borderColor: "#ec4899",
            color: "#ec4899",
            duration: 0.25,
            ease: "power2.out",
        });
        });

        el.addEventListener("mouseleave", () => {
        gsap.to(el, {
            y: 0,
            scale: 1,
            borderColor: "rgba(255,255,255,0.4)",
            color: "#ffffff",
            duration: 0.25,
            ease: "power2.out",
        });
        });
    });
    }, []);

  return (
    <section className="min-h-screen overflow-x-hidden bg-gradient-to-br from-[#140018] via-[#1a0224] to-[#0b0012] text-white px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-14 items-start">

        {/* ================= LEFT DECORATIVE COLUMN ================= */}
        <div className="hidden lg:block relative">
          <div
            className="relative
                        -mt-10          /* 🔥 top se chipakane ke liye */
                        -ml-4 lg:-ml-8  /* 🔥 thoda left move */
                        w-[380px] lg:w-[440px]
                        h-[440px] lg:h-[500px]
                        rounded-3xl overflow-hidden"
            >
            <video
              src={abstractVideo}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          </div>

          {/* CONTACT INFO */}

            <div className="mt-10 relative -left-6 lg:-left-10">
              <ContactInfo />
            </div>
        </div>

        {/* ================= RIGHT FORM ================= */}
        <div>
            {open && (
                <button
                    onClick={() => setOpen(false)}
                    className="mb-6 text-lg font-semibold text-pink-400 hover:underline"
                >
                    ← Back
                </button>
                )}

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-extrabold mb-10 lg:mb-14">
            Say <span className="opacity-70">“Hello!”</span>
          </h1>

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-10 px-6 py-4 rounded-xl
                        bg-green-500/10 border border-green-500/40
                        text-green-400 text-xl font-semibold"
            >
              ✅ Thank you <span className="font-bold">{name || "!"}</span>  
              Your message has been sent successfully.  
              We’ll contact you shortly.
            </motion.div>
          )}

          {/* NAME */}
          <div
              onClick={() => {
                  setOpen(true);
                  setTimeout(() => {
                    formRef.current?.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }, 200);
                }}
              className="mb-6 cursor-text
                        flex flex-col sm:flex-row
                        sm:items-center gap-2 sm:gap-6"
            >
              <label className="text-xl sm:text-3xl font-bold">
                Hi! I am
              </label>

              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="eg. John"
                className={`w-full sm:flex-1 bg-transparent border-b 
                          ${errors.name ? "border-red-500" : "border-white/40"}
                          text-lg sm:text-xl lg:text-3xl font-semibold 
                          outline-none py-3 focus:border-pink-500`}

              />
              {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}

            </div>

          {/* EMAIL */}
          <div className="mb-6
                flex flex-col sm:flex-row
                sm:items-center gap-2 sm:gap-6">
              <label className="text-xl sm:text-3xl font-bold">
                Email me at
              </label>

              <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`w-full sm:flex-1 bg-transparent border-b 
                      ${errors.email ? "border-red-500" : "border-white/40"}
                      text-lg sm:text-xl lg:text-3xl font-semibold 
                      outline-none py-3 focus:border-pink-500`}
                  />

              {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}

            </div>

          {/* ================= EXPANDABLE FORM ================= */}
          <AnimatePresence>
            {open && (
              <motion.div
              ref={formRef}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-8 lg:space-y-8"
              >
                {/* MOBILE */}
                <div className="flex flex-col sm:flex-row
                sm:items-center gap-2 sm:gap-6">
                    <label className="text-3xl font-bold whitespace-nowrap">
                        Mobile No.
                    </label>

                    <div className="flex items-center gap-4 w-full sm:flex-1">
                        <span className="text-pink-500 text-3xl font-bold">+91</span>
                        <input
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="98765 43210"
                            className={`w-full sm:flex-1 bg-transparent border-b 
                                        ${errors.mobile ? "border-red-500" : "border-white/40"}
                                        text-lg sm:text-xl lg:text-3xl font-semibold 
                                        outline-none py-3 focus:border-pink-500`}
                            />
                            {errors.mobile && (
                                <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
                              )}

                    </div>
                    </div>

                {/* INTEREST */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <label className="text-3xl font-bold whitespace-nowrap">
                        Interested In
                    </label>

                    <div className="flex flex-wrap gap-4">
                        {[
                        "UI/UX Design",
                        "Web Development",
                        "App Development",
                        "IT Consulting",
                        "CRMS",
                        ].map((item, i) => (
                        <button
                          type="button"
                            key={item}
                            ref={(el) => (interestRefs.current[i] = el)}
                            onClick={() =>
                              setInterest((prev) =>
                                prev.includes(item)
                                  ? prev.filter((x) => x !== item)
                                  : [...prev, item]
                              )
                            }
                            className={`
                              px-6 py-3 text-lg font-semibold rounded-xl
                              transition-all duration-300
                              ${
                                interest.includes(item)
                                  ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white border-transparent shadow-lg shadow-pink-500/40"
                                  : "border border-white/40 text-white hover:border-pink-500 hover:text-pink-400"
                              }
                            `}
                          >
                            {item}
                            
                          </button>
                            

                        ))}
                        {errors.interest && (
                                <p className="text-red-400 text-sm mt-2">{errors.interest}</p>
                              )}
                    </div>
                </div>

                {/* BUDGET */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-xl sm:text-2xl lg:text-3xl font-bold">Budget</label>

                    <select
                      value={currency}
                      onChange={(e) => setCurrency(e.target.value)}
                      className="bg-pink-600 px-4 py-2 
                                 text-lg font-semibold rounded-xl"
                    >
                      <option>INR</option>
                      <option>USD</option>
                    </select>
                  </div>

                  <input
                    type="range"
                    min={currency === "INR" ? 10000 : 500}
                    max={currency === "INR" ? 1000000 : 20000}
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full accent-pink-500"
                  />

                  <div className="mt-3 text-lg font-semibold opacity-80">
                    {currency} {budget.toLocaleString()}
                  </div>
                </div>

                {/* DESCRIPTION */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                    <label className="text-xl sm:text-3xl font-bold">
                      Project Description
                    </label>

                    <textarea
                      rows={5}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Briefly describe your project..."
                      className={`w-full sm:flex-1 bg-transparent border-b 
                                      ${errors.description ? "border-red-500" : "border-white/40"}
                                      text-lg sm:text-xl lg:text-3xl font-semibold 
                                      outline-none py-3 focus:border-pink-500`}

                    />
                    {errors.description && (
                        <p className="text-red-400 text-sm mt-1">{errors.description}</p>
                      )}

                  </div>

                {/* SEND */}
                <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={loading}
                      className={`mt-1 px-14 py-4 rounded-full text-xl font-bold
                        transition-all duration-300
                        ${
                          loading
                            ? "bg-gray-600 opacity-50 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 hover:scale-105"
                        }`}
                    >
                      {loading ? "Sending..." : "Send"}
                  </button>

                  {submittedOnce && !isFormValid && (
                    <p className="text-sm text-pink-400 mt-3">
                      Please complete all required fields to Send Form
                    </p>
                  )}
                

              </motion.div>
            )}
          </AnimatePresence>
          {/* MOBILE CONTACT INFO */}
            <div className="mt-16 block lg:hidden">
              <div className="border-t border-white/20 pt-10">
                <ContactInfo />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
