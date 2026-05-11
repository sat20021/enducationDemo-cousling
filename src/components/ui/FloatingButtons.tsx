"use client";

import { MessageCircle, PhoneCall, Calendar } from "lucide-react";
import { CONTACT_INFO } from "@/constants/data";
import { motion } from "framer-motion";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
      {/* Enquire Now Button */}
      <motion.button
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
        className="bg-primary text-white p-4 rounded-full shadow-2xl hover:bg-blue-900 transition-all flex items-center gap-2 group overflow-hidden"
        onClick={() => window.location.href = "/contact"}
      >
        <Calendar size={24} />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden whitespace-nowrap font-semibold">
          Enquire Now
        </span>
      </motion.button>

      {/* Call Now Button (Mobile Only) */}
      <motion.a
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.2 }}
        href={`tel:${CONTACT_INFO.phones[0]}`}
        className="md:hidden bg-secondary text-white p-4 rounded-full shadow-2xl hover:bg-orange-600 transition-all flex items-center gap-2 group overflow-hidden"
      >
        <PhoneCall size={24} />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden whitespace-nowrap font-semibold">
          Call Now
        </span>
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.4 }}
        href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#128C7E] transition-all flex items-center gap-2 group overflow-hidden"
      >
        <MessageCircle size={24} />
        <span className="max-w-0 group-hover:max-w-xs transition-all duration-300 overflow-hidden whitespace-nowrap font-semibold">
          WhatsApp Us
        </span>
      </motion.a>
    </div>
  );
};

export default FloatingButtons;
