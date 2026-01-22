import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import abstractVideo from "../assets/abstract.mp4";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ContactUs = () => {
  const [open, setOpen] = useState(false);
  const [currency, setCurrency] = useState("INR");
  const [budget, setBudget] = useState(50000);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const sendBtnRef = useRef(null);
  const interestRefs = useRef([]);

  const handleSubmit = async () => {
    setLoading(true);

    // 🔥 API PLACEHOLDER (Node / Firebase / Google Sheet)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1800);
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
    <section className="min-h-screen bg-gradient-to-br from-[#140018] via-[#1a0224] to-[#0b0012] text-white px-4 sm:px-6 py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[420px_1fr] gap-14 items-start">

        {/* ================= LEFT DECORATIVE COLUMN ================= */}
        <div className="relative">
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
          <div className="mt-10 space-y-7 text-xl lg:text-2xl">
            <div className="flex items-center gap-4">
              <span className="text-pink-400">📞</span>
              <span className="text-2xl font-bold">+91 93153-12511</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-pink-400">✉️</span>
              <span className="text-2xl font-bold">
                support@softwaregiant.in
              </span>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-pink-400">📍</span>
              <span className="text-2xl font-bold leading-snug">
                2nd floor, D-123<br />
                Sector-50, Noida<br />
                201301
              </span>
            </div>
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

          <h1 className="text-7xl font-extrabold mb-14">
            Say <span className="opacity-70">“Hello!”</span>
          </h1>

          {/* NAME */}
          <div
            onClick={() => setOpen(true)}
            className="mb-12 cursor-text"
          >
            <label className="block text-2xl font-bold mb-3">
              Hi! I am
            </label>
            <input
              placeholder="eg. John"
              className="w-full bg-transparent border-b border-white/40 
                         text-2xl font-semibold outline-none py-3 
                         focus:border-pink-500"
            />
          </div>

          {/* EMAIL */}
          <div className="mb-14">
            <label className="block text-2xl font-bold mb-3">
              Email me at
            </label>
            <input
              placeholder="eg. hello@example.com"
              className="w-full bg-transparent border-b border-white/40 
                         text-2xl font-semibold outline-none py-3 
                         focus:border-pink-500"
            />
          </div>

          {/* ================= EXPANDABLE FORM ================= */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="space-y-14"
              >
                {/* MOBILE */}
                <div>
                  <label className="block text-2xl font-bold mb-3">
                    Mobile No.
                  </label>
                  <div className="flex gap-4 items-center">
                    <span className="text-pink-500 text-2xl font-bold">
                      +91
                    </span>
                    <input
                      placeholder="98765 43210"
                      className="flex-1 bg-transparent border-b 
                                 border-white/40 text-2xl 
                                 font-semibold outline-none py-3"
                    />
                  </div>
                </div>

                {/* INTEREST */}
                <div>
                  <label className="block text-2xl font-bold mb-5">
                    Interested In
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {[
                      "UI/UX Design",
                      "Web Development",
                      "App Development",
                      "IT Consulting",
                      "CRMS",
                    ].map((item) => (
                      <button
                        key={item}
                        className="px-6 py-3 text-lg font-semibold
                                   border border-white/40 rounded-xl
                                   hover:border-pink-500 hover:text-pink-400
                                   transition"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                {/* BUDGET */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <label className="text-2xl font-bold">Budget</label>

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
                <div>
                  <label className="block text-2xl font-bold mb-3">
                    Project Description
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-transparent border-b 
                               border-white/40 outline-none 
                               text-lg font-semibold"
                  />
                </div>

                {/* SEND */}
                <button
                  onClick={handleSubmit}
                  className="mt-10 px-14 py-4 rounded-full
                             bg-gradient-to-r from-purple-600 to-pink-600
                             text-xl font-bold
                             hover:scale-105 transition"
                >
                  {loading ? "Sending..." : "Send"}
                </button>

                {success && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-green-400 font-semibold text-lg"
                  >
                    ✅ Message sent successfully!
                  </motion.p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};


export default ContactUs;
