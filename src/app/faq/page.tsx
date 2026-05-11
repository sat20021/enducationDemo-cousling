"use client";

import { useState } from "react";
import { FAQS } from "@/constants/data";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-24 min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-primary py-20 text-white text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Got questions? We have answers. Find everything you need to know about admissions, courses, and life at JSS Group.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="space-y-6">
            {FAQS.map((faq, i) => (
              <div 
                key={i} 
                className={`bg-white rounded-2xl shadow-sm border transition-all ${
                  openIndex === i ? "border-primary shadow-md" : "border-slate-100"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <span className="text-lg md:text-xl font-bold text-slate-900">{faq.q}</span>
                  <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                    openIndex === i ? "bg-primary text-white" : "bg-slate-100 text-slate-400"
                  }`}>
                    {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="p-8 pt-0 text-slate-600 text-lg leading-relaxed border-t border-slate-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white p-12 rounded-[2.5rem] shadow-xl border border-slate-100 text-center">
            <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <HelpCircle size={36} />
            </div>
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-slate-500 mb-8 max-w-md mx-auto">
              Can&apos;t find the answer you&apos;re looking for? Please contact our friendly team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:7048982654" className="btn-primary">Call Now</a>
              <a href="/contact" className="btn-outline">Send a Message</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
