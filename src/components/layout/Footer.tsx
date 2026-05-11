import Link from "next/link";
import { GraduationCap, MapPin, Phone, Mail, MessageCircle, Send, Camera, Play } from "lucide-react";
import { SITE_NAME, CONTACT_INFO, COURSES } from "@/constants/data";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary p-2 rounded-lg">
                <GraduationCap className="text-white" size={28} />
              </div>
              <span className="font-bold text-xl">{SITE_NAME}</span>
            </Link>
            <p className="text-slate-400 leading-relaxed">
              Leading education consultant in Patna providing admissions in top courses like B.Ed, B.Pharma, GNM, and more. Your trusted partner for a bright career.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Camera size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Send size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Play size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-l-4 border-secondary pl-3">Quick Links</h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <Link href="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link>
              <Link href="/courses" className="text-slate-400 hover:text-white transition-colors">Courses</Link>
              <Link href="/admissions" className="text-slate-400 hover:text-white transition-colors">Admissions</Link>
              <Link href="/placement" className="text-slate-400 hover:text-white transition-colors">Placements</Link>
              <Link href="/facilities" className="text-slate-400 hover:text-white transition-colors">Facilities</Link>
              <Link href="/scholarship" className="text-slate-400 hover:text-white transition-colors">Scholarship</Link>
              <Link href="/gallery" className="text-slate-400 hover:text-white transition-colors">Gallery</Link>
              <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">FAQ</Link>
              <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Top Courses */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-l-4 border-secondary pl-3">Top Courses</h4>
            <ul className="space-y-4 text-slate-400">
              {COURSES.slice(0, 5).map(course => (
                <li key={course.id}>
                  <Link href="/courses" className="hover:text-white transition-colors">{course.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-l-4 border-secondary pl-3">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="text-secondary shrink-0" size={20} />
                <span>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-secondary shrink-0" size={20} />
                <div className="flex flex-col">
                  {CONTACT_INFO.phones.slice(0, 2).map(phone => (
                    <a key={phone} href={`tel:${phone}`} className="hover:text-white transition-colors">{phone}</a>
                  ))}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-secondary shrink-0" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {SITE_NAME}. All Rights Reserved.</p>
          <p className="mt-2 text-[10px] uppercase tracking-widest opacity-50">Designed for Excellence in Education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
