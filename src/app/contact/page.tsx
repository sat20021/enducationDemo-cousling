import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_INFO } from "@/constants/data";

export default function ContactPage() {
  return (
    <div className="pt-24 min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-20 text-center border-b">
        <div className="container-custom">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Get in Touch</span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mt-4 mb-6">Contact Us</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Have questions about admissions or courses? Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <MapPin size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Our Office</h3>
                <p className="text-slate-600 leading-relaxed">{CONTACT_INFO.address}</p>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-orange-50 text-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Phone size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Phone Numbers</h3>
                <div className="space-y-2 flex flex-col">
                  {CONTACT_INFO.phones.map(phone => (
                    <a key={phone} href={`tel:${phone}`} className="text-slate-600 hover:text-primary transition-colors">
                      +91 {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-green-50 text-accent rounded-2xl flex items-center justify-center mb-6">
                  <Mail size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Email Address</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-600 hover:text-primary transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Clock size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">Working Hours</h3>
                <p className="text-slate-600">Mon - Sat: 10:00 AM - 06:00 PM</p>
                <p className="text-slate-600">Sunday: Closed</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
              
              {/* WhatsApp CTA Card */}
              <div className="mt-12 bg-slate-900 rounded-3xl p-8 text-white flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shrink-0 shadow-lg shadow-[#25D366]/20">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold">Chat with us on WhatsApp</h4>
                    <p className="text-slate-400">Get instant answers to your queries.</p>
                  </div>
                </div>
                <a 
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary px-8 whitespace-nowrap"
                >
                  Start Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="h-[500px] w-full relative">
        <iframe
          src={CONTACT_INFO.mapsEmbed}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale hover:grayscale-0 transition-all duration-700"
        ></iframe>
        <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-2xl max-w-sm hidden md:block border border-slate-100">
          <h4 className="font-bold text-lg mb-2">Visit Our Campus</h4>
          <p className="text-slate-600 text-sm mb-4">{CONTACT_INFO.address}</p>
          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-bold text-sm hover:underline"
          >
            Get Directions
          </a>
        </div>
      </section>
    </div>
  );
}
