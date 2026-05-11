"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Trophy, GraduationCap, Phone } from "lucide-react";
import Hero from "@/components/home/Hero";
import CourseCard from "@/components/courses/CourseCard";
import ContactForm from "@/components/contact/ContactForm";
import { COURSES, TESTIMONIALS, CONTACT_INFO } from "@/constants/data";
import Image from "next/image";

export default function Home() {
  const featuredCourses = COURSES.slice(0, 4);

  return (
    <div className="flex flex-col">
      <Hero />

      {/* Features Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Us?</h2>
            <p className="text-slate-600 text-lg">We provide comprehensive education consulting services to help you achieve your career goals with the right guidance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, title: "Wide Range of Courses", desc: "From Graduation to Post Graduation and Technical courses.", color: "bg-blue-100 text-primary" },
              { icon: Users, title: "Expert Counseling", desc: "Get personalized career guidance from our experienced mentors.", color: "bg-orange-100 text-secondary" },
              { icon: Trophy, title: "High Success Rate", desc: "Thousands of students successfully admitted to top colleges.", color: "bg-green-100 text-accent" },
              { icon: GraduationCap, title: "Placement Support", desc: "Assistance in finding the right opportunities after graduation.", color: "bg-purple-100 text-purple-600" },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Programs</span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Explore Our Top Courses</h2>
              <p className="text-slate-600">Find the right path for your education from our wide selection of regular and distance courses.</p>
            </div>
            <Link href="/courses" className="btn-outline flex items-center gap-2">
              View All Courses <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
            <path fill="#FFFFFF" d="M45.7,-77.6C58.3,-71.4,67.1,-57.1,73.5,-42.6C79.9,-28.1,83.9,-13.4,82.4,0.9C80.8,15.1,73.7,28.9,64.8,40.7C55.9,52.5,45.2,62.3,32.7,68.9C20.2,75.5,5.9,78.9,-9.5,78.8C-24.9,78.7,-41.4,75.1,-54.6,66.6C-67.8,58.1,-77.7,44.7,-82.1,30.3C-86.5,15.9,-85.4,0.6,-80.6,-13.3C-75.8,-27.2,-67.3,-39.7,-56.3,-47.9C-45.3,-56.1,-31.8,-60,-19.1,-66.2C-6.4,-72.4,5.5,-80.9,19.3,-83.4C33.1,-85.9,48.8,-82.3,45.7,-77.6Z" transform="translate(100 100)" />
          </svg>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Empowering Students to <br />
                <span className="text-secondary">Achieve Their Dreams</span>
              </h2>
              <p className="text-blue-100 text-lg leading-relaxed">
                With over 15 years of experience in the education sector, Jay Shree Shyam Group of Education has been a pioneer in guiding students towards the right career paths. We offer comprehensive support from admission to counseling.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-secondary">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-semibold text-lg">Recognized Degrees</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-secondary">
                    <CheckCircle2 size={24} />
                  </div>
                  <span className="font-semibold text-lg">Direct Admission</span>
                </div>
              </div>
              <Link href="/about" className="btn-secondary text-lg px-8 py-4 inline-block">
                Learn More About Us
              </Link>
            </div>
            <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image src="/images/classroom.png" alt="Classroom" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Students Say</h2>
            <p className="text-slate-600">Hear from our students who have successfully shaped their careers with our guidance.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col"
              >
                <div className="flex text-secondary mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <Trophy key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-slate-600 italic mb-8 text-lg flex-grow">&quot;{t.text}&quot;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white" id="contact">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Contact Us</span>
              <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-6">Have Questions? <br />Get in Touch Today!</h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Our expert counselors are ready to help you choose the best course for your career. Call us or visit our office for a free counseling session.
              </p>
              
              <div className="space-y-8">
                {CONTACT_INFO.phones.map((phone, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 text-primary flex items-center justify-center shadow-inner">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 font-medium">Counseling HotLine</p>
                      <a href={`tel:${phone}`} className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors">
                        +91 {phone}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div id="enquire">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const CheckCircle2 = ({ size, className }: { size?: number, className?: string }) => (
  <svg 
    width={size || 24} 
    height={size || 24} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
    <path d="M9 12L11 14L15 10" />
  </svg>
);
