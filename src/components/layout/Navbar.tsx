"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, GraduationCap, ChevronDown } from "lucide-react";
import { SITE_NAME, CONTACT_INFO } from "@/constants/data";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Admissions", href: "/admissions" },
  ];

  const moreLinks = [
    { name: "Gallery", href: "/gallery" },
    { name: "Placements", href: "/placement" },
    { name: "Facilities", href: "/facilities" },
    { name: "Scholarship", href: "/scholarship" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      {/* Top Bar */}
      {!scrolled && (
        <div className="hidden md:block bg-primary text-white py-1">
          <div className="container-custom flex justify-between items-center text-sm">
            <div className="flex gap-4">
              {CONTACT_INFO.phones.slice(0, 2).map((phone) => (
                <a key={phone} href={`tel:${phone}`} className="flex items-center gap-1 hover:text-secondary">
                  <Phone size={14} /> {phone}
                </a>
              ))}
            </div>
            <div className="flex gap-2 font-medium">
              <span>Admissions Open 2026-27</span>
              <span className="opacity-60">|</span>
              <span>नामांकन प्रारंभ 2026-27</span>
            </div>
          </div>
        </div>
      )}

      <div className="container-custom">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-primary p-2 rounded-lg group-hover:bg-secondary transition-colors">
              <GraduationCap className="text-white" size={32} />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-xl leading-none ${scrolled ? "text-primary" : "text-primary md:text-white"}`}>
                JSS Group
              </span>
              <span className={`text-[10px] font-medium tracking-wider uppercase ${scrolled ? "text-gray-500" : "text-gray-200 md:text-white/80"}`}>
                Education Patna
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-semibold transition-colors hover:text-secondary ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Dropdown */}
            <div className="relative">
              <button 
                onMouseEnter={() => setActiveDropdown(true)}
                className={`flex items-center gap-1 font-semibold transition-colors hover:text-secondary ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                Explore More <ChevronDown size={16} />
              </button>
              
              <div 
                onMouseLeave={() => setActiveDropdown(false)}
                className={`absolute top-full left-0 w-56 bg-white shadow-2xl rounded-2xl py-4 transition-all duration-300 origin-top border border-slate-50 ${
                  activeDropdown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {moreLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block px-6 py-2.5 text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/contact" className="btn-secondary py-2 px-5 text-sm">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-primary" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 overflow-y-auto max-h-[80vh] ${
          isOpen ? "block border-t" : "hidden"
        }`}
      >
        <div className="flex flex-col p-6 gap-4">
          {[...navLinks, ...moreLinks].map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-700 font-semibold text-lg hover:text-primary transition-colors border-b border-slate-50 pb-2"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-primary text-center mt-4"
            onClick={() => setIsOpen(false)}
          >
            Request Counseling
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
