"use client";

import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  MessageCircle,
  X,
  Send,
} from "lucide-react";

export default function FAQPopupButton() {
  const [open, setOpen] = useState(false);
  const [question, setQuestion] = useState("");

  const handleSend = () => {
    if (!question.trim()) return;

    const message = `Hello, I have a question:

${question}`;

    const whatsappUrl = `https://wa.me/966538357119?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");

    setQuestion("");
    setOpen(false);
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] text-white shadow-[0_0_40px_rgba(54,177,199,0.35)] transition duration-300 hover:scale-110"
      >
        <MessageCircle size={28} />
      </button>

      {/* POPUP */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />

            {/* MODAL */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: 40,
              }}
              transition={{ duration: 0.25 }}
              className="fixed left-1/2 top-1/2 z-[70] w-[92%] max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-[36px] border border-white/20 bg-white p-8 shadow-[0_25px_100px_rgba(0,0,0,0.15)]"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setOpen(false)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 transition hover:bg-gray-200"
              >
                <X size={20} />
              </button>

              {/* HEADER */}
              <div>
                <div className="inline-flex rounded-full bg-[#36B1C7]/10 px-5 py-2">
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-[#36B1C7]">
                    Quick Support
                  </span>
                </div>

                <h2 className="mt-6 text-4xl font-black uppercase tracking-tight text-[#0B0F19]">
                  Ask Your Question
                </h2>

                <p className="mt-4 text-base leading-8 text-gray-600">
                  Send your industrial product inquiry directly through
                  WhatsApp.
                </p>
              </div>

              {/* TEXTAREA */}
              <div className="mt-8">
                <textarea
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Type your question here..."
                  rows={6}
                  className="w-full rounded-[28px] border border-gray-200 bg-[#F8FAFC] px-6 py-5 text-base text-[#0B0F19] outline-none transition duration-300 placeholder:text-gray-400 focus:border-[#36B1C7] focus:bg-white focus:ring-4 focus:ring-[#36B1C7]/10"
                />
              </div>

              {/* SEND BUTTON */}
              <button
                onClick={handleSend}
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#36B1C7] to-[#960B33] px-8 py-4 text-sm font-black uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(54,177,199,0.25)] transition duration-300 hover:scale-105"
              >
                <Send size={18} />

                Send Question
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}