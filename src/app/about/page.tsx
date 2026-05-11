import Image from "next/image";
import { CheckCircle2, Award, Users, BookOpen, Target, Heart } from "lucide-react";
import { SITE_NAME } from "@/constants/data";

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <Image 
          src="/images/classroom.png" 
          alt="About Us" 
          fill 
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/40" />
        <div className="container-custom relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Empowering students with quality education guidance for over 15 years.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <Image src="/images/teacher.png" alt="Our Vision" width={600} height={800} className="w-full object-cover h-[500px]" />
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary rounded-3xl -z-0 hidden md:block" />
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-3xl -z-0 hidden md:block" />
            </div>
            
            <div className="space-y-8">
              <span className="text-primary font-bold tracking-widest uppercase text-sm">Who We Are</span>
              <h2 className="text-4xl font-bold text-slate-900 leading-tight">
                Patna&apos;s Most Trusted <br />
                <span className="text-secondary">Educational Consultants</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                {SITE_NAME} was founded with a single mission: to make quality higher education accessible to every student in Bihar. We understand the challenges students face during admissions and career planning.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Target className="text-primary mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">Our Mission</h4>
                  <p className="text-slate-500 text-sm">To provide transparent and reliable admission guidance to help students secure their future.</p>
                </div>
                <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                  <Heart className="text-secondary mb-4" size={32} />
                  <h4 className="text-xl font-bold mb-2">Our Vision</h4>
                  <p className="text-slate-500 text-sm">To become the leading education group in India known for excellence and student success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { icon: Users, label: "Total Students", val: "10k+" },
              { icon: BookOpen, label: "Courses", val: "50+" },
              { icon: Award, label: "Success Rate", val: "99%" },
              { icon: CheckCircle2, label: "Tie-up Colleges", val: "100+" },
            ].map((stat, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto text-secondary">
                  <stat.icon size={32} />
                </div>
                <div className="text-4xl font-bold">{stat.val}</div>
                <div className="text-blue-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Transparency", desc: "No hidden charges, clear admission process, and honest career advice." },
              { title: "Student-First", desc: "We prioritize students' career goals above everything else." },
              { title: "Excellence", desc: "We strive for excellence in every service we provide to our students." },
            ].map((item, i) => (
              <div key={i} className="p-10 bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold mb-4 text-primary">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
