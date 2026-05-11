"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SLIDES } from "@/constants/data";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-screen min-h-[750px] flex items-center overflow-hidden bg-slate-900">
      {/* Background Images Slider */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={SLIDES[current].image}
            alt="Hero Background"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/70 to-transparent z-[1]" />

      <div className="container-custom relative z-10 text-white pt-20">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-block bg-secondary px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Admissions Open 2026-27
                </span>
                <span className="text-secondary/80 font-bold text-xs uppercase tracking-widest">
                  नामांकन प्रारंभ 2026-27
                </span>
              </div>

              <div className="space-y-2 mb-8">
                <h1 
                  className="text-4xl md:text-7xl font-extrabold leading-[1.1]"
                  dangerouslySetInnerHTML={{ __html: SLIDES[current].title }}
                />
                <h2 
                  className="text-2xl md:text-4xl font-bold text-white/60 leading-tight italic"
                  dangerouslySetInnerHTML={{ __html: SLIDES[current].titleHindi }}
                />
              </div>

              <div className="space-y-4 mb-10">
                <p className="text-lg md:text-2xl text-slate-200 leading-relaxed max-w-2xl">
                  {SLIDES[current].subtitle}
                </p>
                <p className="text-md md:text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
                  {SLIDES[current].subtitleHindi}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 items-center">
                <Link href={SLIDES[current].link} className="btn-secondary text-lg flex flex-col items-center px-10 py-4 group">
                  <span className="flex items-center gap-2">
                    {SLIDES[current].cta} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="text-[10px] uppercase tracking-widest opacity-80 mt-1">{SLIDES[current].ctaHindi}</span>
                </Link>
                <Link href="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg flex flex-col items-center px-10 py-4 group">
                  <span>Call Now</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-80 mt-1">अभी कॉल करें</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-16 flex items-center gap-6"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-slate-800 overflow-hidden">
                  <Image src={`/images/classroom.png`} alt="Student" width={48} height={48} className="object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-secondary flex items-center justify-center text-xs font-bold">
                10k+
              </div>
            </div>
            <div className="text-sm">
              <p className="font-bold">Trusted by 10,000+ Students</p>
              <p className="text-slate-400">10,000+ छात्रों द्वारा विश्वसनीय</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-16 right-12 z-20 flex gap-4">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === i ? "w-10 bg-secondary" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 w-full bg-white/10 backdrop-blur-md py-6 hidden lg:block z-10 border-t border-white/5">
        <div className="container-custom flex justify-between">
          {[
            { label: "Courses Offered", val: "25+", labelHi: "उपलब्ध पाठ्यक्रम" },
            { label: "Admissions", val: "5000+", labelHi: "सफल नामांकन" },
            { label: "Counselors", val: "50+", labelHi: "विशेषज्ञ सलाहकार" },
            { label: "Years Experience", val: "15+", labelHi: "वर्षों का अनुभव" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-secondary">{stat.val}</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest">{stat.label}</div>
              <div className="text-[9px] text-slate-500 font-bold">{stat.labelHi}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
